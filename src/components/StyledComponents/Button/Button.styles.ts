import { styled } from "styled-components";

export const StyledButton = styled.button<{ $darkMode?: boolean }>`
  border: 1px solid white;
  background-color: ${({ $darkMode }) => ($darkMode ? "#242424" : "#a9a9a9")};
  width: fit-content;
  color: ${({ $darkMode }) => ($darkMode ? "white" : "black")};
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all ease-in-out;
  &:hover {
    background-color: yellow;
  }
`;
