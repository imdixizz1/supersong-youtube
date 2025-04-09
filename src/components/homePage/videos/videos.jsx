import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Thumbnail,
  SubInformationsWrapper,
  Avatar,
  Initials,
  TitleWrapper,
  Title,
  SubTitle,
  IconSeparator,
  CustomVideos,
} from "./styles";
import { useRouter } from "next/router";

function Video({ video }) {

  console.log("video===", video);

  const { thumbnail, id, title, createdAt,src } = video;
  const [view, setView] = useState("");
  const router = useRouter();

  useEffect(() => {
    setView(Math.floor(Math.random() * 1000));
  }, []);

  let newDate = new Date();

  return (
    <>
      <Wrapper>
        <Thumbnail src={thumbnail} alt={"thumbnail"}></Thumbnail>

        <CustomVideos
          autoPlay
          muted
          loop
          preload="auto"
          onClick={() =>
            router.push({
              pathname: `/`,
              query: id,
            })
          }
        >
          <source src={src} type="video/mp4" />
        </CustomVideos>
        <SubInformationsWrapper>
          <Avatar>
            <Initials>API</Initials>
          </Avatar>
          <TitleWrapper>
            <Title>{title}</Title>
            <SubTitle>
              <p>Superfan Video</p>
              <p>
                {view} <IconSeparator size={11} />
                <span>{newDate.toLocaleDateString()}</span>
              </p>
            </SubTitle>
          </TitleWrapper>
        </SubInformationsWrapper>
      </Wrapper>
    </>
  );
}

export default Video;
