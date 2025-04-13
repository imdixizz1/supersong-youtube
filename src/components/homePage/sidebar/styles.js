import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: calc(100vh - 60px); // Adjust for navbar height
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-top: 1rem;
  margin-right: 0.5rem;

  position: relative;      // ✅ THIS is essential
  z-index: 1001;           // ✅ Now this works

  @media (max-width: 900px) {
    display: none;
  }
`;


export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100% - 60px); // Reserve space for footer
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: #f1f1f1;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Text = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

export const HrElement = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #ddd;
`;

/**
 * The footer will appear naturally after the last menu item.
 * If content is too short, it stays close to the last item.
 */
export const Footer = styled.div`
  padding: 1rem;
  font-size: 1.3rem;
  color: #777;
  text-align: center;
  background-color: #fff;
  height: 60px; // Fixed height for footer
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkFooter = styled.a`
  color: #ff5722;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
