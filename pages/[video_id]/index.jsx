import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import videoJson from "../../src/components/videos";
import Navbar from "../../src/components/navbar";
import styled from "styled-components";
import Link from "next/link";

// ----------- Styled Components -----------
const Wrapper = styled.div`
  padding: 20px;
`;

const ContentVideo = styled.div`
  display: flex;
  gap: 20px;
  height: calc(100vh - 80px);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Col1 = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 70vh;
  background: black;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Col2 = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 100%;

  @media (max-width: 768px) {
    max-height: none;
    margin-top: 20px;
  }
`;

const VideoBox = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Thumb = styled.img`
  width: 120px;
  height: 67.5px; /* 16:9 ratio */
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100px;
    height: 56.25px;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const VideoTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const VideoAuthor = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const VideoDescription = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: #999;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Title = styled.h2`
  margin: 10px 0 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Author = styled.p`
  font-size: 13px;
  color: #777;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #555;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const SmallStat = styled.span`
  white-space: nowrap;
`;

const ViewsText = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: #666;
`;

// ------------- Main Page ----------------
function VideoPage() {
  const router = useRouter();
  const { video_id } = router.query;
  const scrollableRef = useRef(null); // 👈 ref for scrollable content

  const [video, setVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);

  useEffect(() => {
    if (video_id) {
      const current = videoJson.find((v) => v.id == video_id);
      const others = videoJson.filter((v) => v.id != video_id);
      setVideo(current);
      setOtherVideos(others);
    }
  }, [video_id]);

  if (!video)
    return <div style={{ padding: "20px" }}>Loading or video not found.</div>;


  const formatViews = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };



  return (
    <div>
      <Navbar
        query=""
        handleQuery={() => {}}
        getVideos={() => {}}
        removeQuery={() => {}}
        scrollableRef={scrollableRef}
      />

<Wrapper ref={scrollableRef} style={{ overflowY: "auto", height: "100vh" }}>
        <ContentVideo>
          {/* Main Video Column */}
          <Col1>
            <VideoContainer>
              <StyledVideo key={video.src} autoPlay controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </VideoContainer>

            <Title>{video.title}</Title>
            {video.author && <Author>{video.author}</Author>}
            <Description>{video.description}</Description>
            <StatsRow>
              <SmallStat>👍 {video.likeCount || 0}</SmallStat>
              <SmallStat>💬 {video.commentCount || 0}</SmallStat>
              <SmallStat>👁️ {video.views || 0}</SmallStat>
            </StatsRow>
          </Col1>

          {/* Sidebar Videos */}
          <Col2>
  {otherVideos.map((vid) => (
    <Link href={`/${vid.id}`} key={vid.id} passHref>
      <VideoBox>
        <Thumb
          src={vid.thumbnail || "/default-thumbnail.jpg"}
          alt={vid.title}
        />
        <VideoInfo>
          <VideoTitle>{vid.title}</VideoTitle>
          <VideoAuthor>{vid.author || "Unknown Artist"}</VideoAuthor>
          <VideoDescription>
            {vid.description || "No description available."}
          </VideoDescription>
         <ViewsText>👁️ {formatViews(vid.views || 0)} views</ViewsText>

        </VideoInfo>
      </VideoBox>
    </Link>
  ))}
</Col2>

        </ContentVideo>
      </Wrapper>
    </div>
  );
}

export default VideoPage;
