import React, { useEffect, useState } from "react";
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
  height: calc(100vh - 80px); /* minus navbar */
`;

const Col1 = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
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
`;

const VideoBox = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const Thumb = styled.img`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;


const Title = styled.h2`
  margin: 10px 0 5px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
`;

// ------------- Main Page ----------------
function VideoPage() {
  const router = useRouter();
  const { video_id } = router.query;

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

  if (!video) return <div style={{ padding: "20px" }}>Loading or video not found.</div>;

  return (
    <div>
      <Navbar query="" handleQuery={() => {}} getVideos={() => {}} removeQuery={() => {}} />

      <Wrapper>
        <ContentVideo>
          {/* Main Video Column */}
          <Col1>
            <VideoContainer>
              <StyledVideo
                key={video.src} // force reload when src changes
                autoPlay
                controls
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </VideoContainer>
            <Title>{video.title}</Title>
            <Description>{video.description}</Description>
          </Col1>

          {/* Sidebar Videos */}
          <Col2>
            {otherVideos.map((vid) => (
              <Link href={`/${vid.id}`} key={vid.id} passHref>
                <VideoBox>
                <Thumb src={vid.thumbnail || "/default-thumbnail.jpg"} alt={vid.title} />

                  <p>{vid.title}</p>
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
