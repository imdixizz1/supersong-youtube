import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* min-height: 56px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 2rem;
`;

export const Chip = styled.div`
  height: 32px;
  width: fit-content;
  min-width: 12px;
  padding: 0 10px;
  border-radius: 16px;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.isActive ? "#fff" : "#030303")};
  background-color: ${(props) => (props.isActive ? "#030303" : "#e8e8e8")};
  border: 1px solid #ccc;
`;

export const HeroBanner = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh; /* full viewport height */
  margin: 0;
  border-radius: 0;
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

