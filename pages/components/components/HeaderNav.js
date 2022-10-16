import styled from "styled-components"
import  { useRouter } from 'next/router';
import Link  from "next/link";

const HeaderNav = () => {
  const Router=useRouter();
  return (
    <HeaderNavWrapper>
     <Link href='/'><HeaderNavLinks>
       Home
      </HeaderNavLinks></Link>

      <Link href={'/About'}><HeaderNavLinks active={Router.pathname == '/' ? true : false}>
       About
      </HeaderNavLinks></Link>


      <Link href={"/Campaigns"}><HeaderNavLinks active={Router.pathname == '/' ? true : false}>
        All Campaign
      </HeaderNavLinks></Link>

      <Link href={"/CreateCampaign"}><HeaderNavLinks active={Router.pathname == '/' ? true : false}>
        Add Campaign
      </HeaderNavLinks></Link>

      <Link href={'/MyCampaign'}><HeaderNavLinks active={Router.pathname == '/' ? true : false}>
        My Campaign
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}
const HeaderNavWrapper = styled.div`
display: flex;
justify-content: center;
padding:6px;
font-size: 22px;

`
const HeaderNavLinks = styled.div`
margin: 15px;
font-family: 'Akaya Kanadaka', cursive;
cursor: pointer;


`

export default HeaderNav