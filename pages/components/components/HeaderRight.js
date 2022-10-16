import styled from "styled-components"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { App } from "../Layout/Layout";
import { useContext } from "react";
import Wallet from "./Wallet";

const HeaderRight = () => {
  const toggler=useContext(App);
  return (
    <HeaderRightWrapper>
    <Wallet/>
    <ThemeToggle>
    <WbSunnyIcon onClick={toggler}/>
    </ThemeToggle>
      
    </HeaderRightWrapper>
  )
}
const HeaderRightWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items:center

`
const ThemeToggle = styled.div`

`
export default HeaderRight