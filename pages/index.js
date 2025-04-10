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
import Image from "next/image";

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
    <div>
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

      <Wrapper>
        <Sidebar />
        <GridWrapper>
          {/* <HeroBanner>
            <image
              src="/images.png"
              alt="Music Banner"
              height={300}
              width={1200}
              
            />

            <BannerText>Discover the Best in Music with Superfan  🎵</BannerText>
          </HeroBanner> */}
          <Tags
            tags={tags}
            activeTag={activeTag}
            handleActiveTag={handleActiveTag}
          />
          <GridVideos videos={videos} activeTag={activeTag} />
        </GridWrapper>
      </Wrapper>
    </div>
  );
}
