import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 2rem;

  /* Optional: Add smooth scrolling for a better user experience */
  scroll-behavior: smooth;

  /* Hide scrollbar in Firefox */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  /* Hide scrollbar in WebKit browsers (like Chrome) */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Chip = styled.div`
  white-space: nowrap;
  height: 32px;
  padding: 0 10px;
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "#fff" : "#030303")};
  background-color: ${(props) => (props.isActive ? "#030303" : "#e8e8e8")};
  border: 1px solid #ccc;
  flex-shrink: 0; // important to prevent shrinking in a scroll container
`;


export const HeroBanner = styled.div`
  position: relative;
  width: 100%;
  height: 250px; /* or any height you want */
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;




export const BannerText = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: white;
  font-size: clamp(18px, 4vw, 36px);
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

