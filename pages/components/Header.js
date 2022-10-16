import styled from "styled-components"
import HeaderLogo from "./components/HeaderLogo"
import HeaderNav from "./components/HeaderNav"
import HeaderRight from "./components/HeaderRight"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo/>
      <HeaderNav/>
      <HeaderRight/>


    </HeaderWrapper>
  )
}
const HeaderWrapper=styled.div`
height:100%;
width:100%;
/* border-bottom:2px solid black; */
display:flex;
justify-content: space-evenly;
align-items:center;
`

export default Header