import Header from "../Header"
import Theme from "./Theme"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { useState, createContext } from "react"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App=createContext();
const Layout = ({ children }) => {

    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }
    return (
        <App.Provider value={changeTheme}>
        <ThemeProvider theme={Theme[theme]}>
        <ToastContainer />
        
        <GlobalStyle>
            <LayoutWrapper >
           
               
                <Header />
               
                {children}

            </LayoutWrapper>
          
          </GlobalStyle>
            </ThemeProvider>
            </App.Provider >
      
    )
}
const GlobalStyle = styled.div`





`
const LayoutWrapper = styled.div`

min-height: 100vh;
margin:0;
padding:0 ;
background-color: ${(props) => props.theme.bgcolor};
background-image: ${(props) => props.theme.bgimage};
color: ${(props) => props.theme.color};

`

export default Layout
export {App};