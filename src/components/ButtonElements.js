import styled from "styled-components"
import { bpmd } from "../const/constants"

export const Button = styled.a`
  border-radius: 12px;
  background: ${({ primary }) => (primary ? "#ff4040" : "#000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? " 16px 64px" : " 10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? " 20px" : " 16px")};
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#000" : "#ff4040")};
  }

  @media screen and (max-width: ${bpmd}) {
    width: 100%;
  }
`
