import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Sidebar from "../src/components/homePage/sidebar/index";
import GridVideos from "../src/components/homePage/videos/gridVideos";
import Tags from "../src/components/tags/index";
import { Wrapper, GridWrapper } from "../styles/globalStyles";
import ApikeyInput from "../src/components/homePage/apikeyInput/index";
import Navbar from "../src/components/navbar";
import { useApiKeyContext } from "../src/components/provider/ApiKeys";
import { Actions } from "../src/components/provider/ApiKeys/reducer";
import { filterTags } from "../src/utils/functions/index";
import videoJson from "../src/components/videos";
import { BannerText, HeroBanner } from "../src/components/tags/styles";
// import banner from "../public/images.png";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    handleFiltering();
  }, [query, activeTag]);

  useEffect(() => {
    const allTags = filterTags(videoJson);
    setTags(allTags);
  }, []);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const removeQuery = (event) => {
    event.stopPropagation();
    setQuery("");
  };

  const handleActiveTag = (tag) => {
    setActiveTag(tag);
  };

  const handleFiltering = () => {
    let filtered = videoJson;

    if (activeTag !== "All") {
      filtered = filtered.filter((video) =>
        video.type.toLowerCase().includes(activeTag.toLowerCase())
      );
    }

    if (query.trim()) {
      filtered = filtered.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setVideos(filtered);
  };

  return (
    <>
      {" "}
      <Head>
        <title>SuperFan | Watch and Discover Music Videos</title>
        <meta
          name="description"
          content="Explore trending music videos powered by SuperFan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav2.ico" />
      </Head>
      <Navbar
        query={query}
        handleQuery={handleQuery}
        getVideos={handleFiltering}
        removeQuery={removeQuery}
      />
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 60px)",
          overflow: "hidden",
        }}
      >
        {/* Sidebar stays fixed in place */}
        <div
          style={{ height: "100vh", position: "sticky", top: 0, flexShrink: 0 }}
        >
          <Sidebar />
        </div>

        {/* Scrollable right section */}
        <div style={{ flex: 1, overflowY: "auto", paddingRight: "1rem" }}>
          <HeroBanner>
            <img
              src="/images.png"
              alt="Music Banner"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <BannerText>Discover the Best in Music with Superfan 🎵</BannerText>
          </HeroBanner>

          <Tags
            tags={tags}
            activeTag={activeTag}
            handleActiveTag={handleActiveTag}
          />
          <GridVideos videos={videos} activeTag={activeTag} />
        </div>
      </div>
    </>
  );
}
