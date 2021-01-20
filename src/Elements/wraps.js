import styled from "styled-components"
import * as cssVars from "../const/constants"

export const MainWrap = styled.main`
  margin: 0 auto;
  min-height: ${cssVars.screenHeight};
`

export const InnerWrap = styled.div`
  max-width: 1000px;
  padding: 0 ${cssVars.deskPad} 0;
  margin: 2rem auto 4rem;
  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`
