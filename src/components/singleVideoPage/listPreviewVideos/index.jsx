import React from "react";
import Navbar from "../../src/components/navbar";
import {
  ContentVideo,
  Wrapper,
  Col1,
  Col2,
} from "../../src/components/singleVideoPage/styles";
import VideoPreview from "../../singleVideoPage/videoPreview";
import ListVideos from "../../singleVideoPage/listPreviewVideos/index";


import videoData from "../../videos"; // static JSON

export async function getStaticPaths() {
  const paths = videoData.map((video) => ({
    params: { video_id: video.id.toString() },
  }));

  return {
    paths,
    fallback: false, // can also use 'blocking' if needed
  };
}

export async function getStaticProps({ params }) {
  const video = videoData.find((v) => v.id.toString() === params.video_id);

  return {
    props: {
      video,
      allVideos: videoData,
    },
  };
}

function VideoPage({ video, allVideos }) {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ContentVideo>
          {video && (
            <>
              <Col1>
                <VideoPreview video={video} />
              </Col1>
              <Col2>
                <ListVideos videos={allVideos} />
              </Col2>
            </>
          )}
        </ContentVideo>
      </Wrapper>
    </div>
  );
}

export default VideoPage;
