import React from "react"
import styled from "styled-components"

const Rippling = styled.div`
  width: 10.4rem;
  height: 10.4rem;
  margin: 4rem auto 0;

  div {
    position: absolute;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 0.5rem solid white;
    animation: 1.5s ripple infinite;
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
  }

  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }

    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`

const LoadingRipple = () => {
  return (
    <Rippling>
      <div></div>
      <div></div>
    </Rippling>
  )
}

export default LoadingRipple
