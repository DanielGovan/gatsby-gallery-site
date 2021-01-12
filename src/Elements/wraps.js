import styled from "styled-components"
import * as cssVars from "../const/constants"

//Layout

export const MainWrap = styled.main`
  margin: 0 auto;
  min-height: ${cssVars.screenHeight};
`

export const InnerWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${cssVars.deskPad};
  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`
