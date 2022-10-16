import './style/global.css';
import styled from "styled-components"
import Layout  from "./components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return(
    <Whole>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Whole>
  )
}


const Whole = styled.div`

background-color: ${(props) => props.theme.bgcolor};
background-image: ${(props) => props.theme.bgimage};
color: ${(props) => props.theme.color};

`
export default MyApp

