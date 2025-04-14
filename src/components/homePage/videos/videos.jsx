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
  const { thumbnail, id, title, createdAt, src, author, text, date } = video;
  const [view, setView] = useState("");
  const router = useRouter();

  useEffect(() => {
    setView(Math.floor(Math.random() * 1000));
  }, []);

  let newDate = new Date();

  return (
    <>
      <Wrapper
        onClick={() =>
          router.push({
            pathname: `/${id}`,
          })
        }
      >
        <Thumbnail src={thumbnail} alt={"thumbnail"}></Thumbnail>

        <CustomVideos autoPlay muted loop preload="auto">
          <source src={src} type="video/mp4" />
        </CustomVideos>
        <SubInformationsWrapper>
          <Avatar>
            <Initials>{text}</Initials>
          </Avatar>
          <TitleWrapper>
            <Title>{title}</Title>
            <SubTitle>
              <p>{author}</p>
              <p>
                {view + " views"} <IconSeparator size={11} />
                <span>{date}</span>
              </p>
            </SubTitle>
          </TitleWrapper>
        </SubInformationsWrapper>
      </Wrapper>
    </>
  );
}

export default Video;
