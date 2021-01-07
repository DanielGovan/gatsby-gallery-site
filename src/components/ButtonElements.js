import styled from "styled-components"
import * as cssVars from "../const/constants"
// import { motion } from "framer-motion"

// rework to not use styled components? because we need it to look the same whether it be a "a" or a "Link"

export const Button = styled.a`
  border-radius: 12px;
  white-space: nowrap;
  color: ${cssVars.nearWhite};
  background: ${({ primary }) => (primary ? "#ff4040" : "#000")};
  padding: ${({ big }) => (big ? " 16px 32px" : " 10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? " 1.8rem" : " 1.4rem")};
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease-out;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    background: ${({ primary }) => (primary ? "#000" : "#ff4040")};
  }

  @media screen and (max-width: ${cssVars.breakPointS}) {
    width: 100%;
  }
`
