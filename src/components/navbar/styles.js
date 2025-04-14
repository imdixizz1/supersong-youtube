import styled from "styled-components";
import Image from "next/image";

export const NavbarWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  z-index: 100;
  position: sticky;
  top: 0;
  transition: height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;

  height: ${({ isVisible }) => (isVisible ? "56px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-100%)")};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;



export const Logo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  cursor: pointer;
  overflow: hidden;
  z-index: 10000;
  padding-right: 5px;

  @media (max-width: 768px) {
    width: 90px;
  }
`;


export const Col1 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 120px;
  height: 50px;
  position: relative;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    width: 60px;
    height: 30px;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  padding: 2px 6px 2px 10px;
  height: 40px;
  width: 100%;
  min-width: 100px;
  max-width: 600px;
  justify-content: center;
  border-right: none;
  border-radius: 2px 0 0 2px;
  box-shadow: inset 0 1px 2px #eee;
  color: #111111;
`;



export const SearchButton = styled.div`
  border: 1px solid #ccc;
  justify-content: center;
  border-radius: 0 2px 2px 0;
  height: 40px;
  width: 64px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #030303;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #e9e9e9;
  }

  @media (max-width: 600px) {
    width: 40px;
  }
`;

export const Col2 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 70%;
  padding: 0 20px;
`;

export const Col3 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 400px) {
    margin-left: 20px;
    display: none;
  }
`;

export const IconClose = styled.div`
  position: absolute;
  left: -35px;
  opacity: ${(props) => (props.disabled ? 0 : 1)};
`;
