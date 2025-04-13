import React, { useState, useEffect } from "react";
import {
  NavbarWrapper,
  Logo,
  SearchInput,
  SearchButton,
  Col1,
  Col2,
  Col3,
  IconClose,
} from "./styles";
import { Search, X } from "react-feather";
import { Avatar, Initials } from "../homePage/videos/styles";
import { useRouter } from "next/router";

function Navbar({ query, handleQuery, getVideos, removeQuery, scrollableRef }) {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const scrollElement = scrollableRef?.current;
    if (!scrollElement) return;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = scrollElement.scrollTop;

      if (window.innerWidth <= 768) {
        if (currentScroll > lastScrollTop) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      }
    };

    scrollElement.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [scrollableRef]);

  return (
    <NavbarWrapper isVisible={showNavbar}>
      <Col1>
        <Logo src="/logo.png" alt="Superfan Logo" onClick={() => router.push("/")} />
      </Col1>
      <Col2>
        <SearchInput
          placeholder="Find your favourite artist"
          value={query}
          onChange={handleQuery}
        />
        <SearchButton onClick={getVideos}>
          <Search size={20} color={"#030303"} />
          <IconClose
            onClick={(event) => removeQuery(event)}
            disabled={query?.length === 0}
          >
            <X />
          </IconClose>
        </SearchButton>
      </Col2>
      <Col3>
        <Avatar>
          <Initials>SF</Initials>
        </Avatar>
      </Col3>
    </NavbarWrapper>
  );
}

export default Navbar;
