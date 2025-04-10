import React from "react";
import {
  Wrapper,
  ScrollContent,
  Container,
  Text,
  HrElement,
  Footer,
  LinkFooter,
} from "./styles";
import {
  Home,
  Compass,
  Activity,
  Video,
  Youtube,
  Archive,
  Clock,
  ThumbsUp,
} from "react-feather";

const Sidebar = () => {
  return (
    <Wrapper>
      <ScrollContent>
        <Container><Home /><Text>Home</Text></Container>
        <Container><Compass /><Text>Explore</Text></Container>
        <Container><Activity /><Text>Shorts</Text></Container>
        <Container><Video /><Text>Memberships</Text></Container>
        <HrElement />
        <Container><Youtube /><Text>Library</Text></Container>
        <Container><Archive /><Text>Historic</Text></Container>
        <Container><Clock /><Text>Watch later</Text></Container>
        <Container><ThumbsUp /><Text>Likes</Text></Container>
      </ScrollContent>

      {/* Footer moved outside of scrollable content */}
      <Footer>
        Made with 🧡 &nbsp;by
        <LinkFooter
          href="https://superlabs.co"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;SuperLabs
        </LinkFooter>
      </Footer>
    </Wrapper>
  );
};


export default Sidebar;
