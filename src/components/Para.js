import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledPara = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 0.5rem 0 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
    text-align: left;
  }
`

const Para = ({ children }) => {
  return (
    <StyledPara
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {children}
    </StyledPara>
  )
}

export default Para
