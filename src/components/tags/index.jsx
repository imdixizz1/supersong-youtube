import React from "react";
import { Wrapper, Chip } from "./styles";
import { capitalizeFirstLetter } from "../../utils/functions/index";

const customTags = [
  "Rock",
  "Metal",
  "Classic",
  "Pop",
  "New"

];

function Tags({ activeTag, handleActiveTag }) {
  return (
    <Wrapper>
      <Chip
        isActive={activeTag === "All"}
        onClick={() => handleActiveTag("All")}
      >
        All
      </Chip>
      {customTags.map((tag) => (
        <Chip
          key={tag}
          isActive={activeTag === tag}
          onClick={() => handleActiveTag(tag)}
        >
          {capitalizeFirstLetter(tag)}
        </Chip>
      ))}
    </Wrapper>
  );
}

export default Tags;
