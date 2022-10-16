import React from 'react'
import Image from 'next/image'
import flood from './static/f.jpg'
import styled from 'styled-components'
import Link from 'next/link'
import { toast } from 'react-toastify'

const Home = () => {
  const Greetings=()=>{
    toast.success("You are Great")



  }
  return (
    <Wrapper>
      <LeftSection>
        <Main>We are Here For Paksitan</Main>
        <SubMain>Donate Here and <br/> save Pakistan</SubMain>
        <SemiSubMain>Donate Here and save Pakistan.<br/>We are here for the flood victoms <br/>We will provide our best to donate them</SemiSubMain>
       <Link href={'/Campaigns'}><Button onClick={Greetings}> Donate Now.</Button></Link> 
      </LeftSection>
      <RightSection>
        <Image src={flood}
          width={630}
          height={350}
        />
      </RightSection>
     
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
align-items:center;
margin:30px;
`
const LeftSection = styled.div`
display:flex;
flex-direction:column
`

const RightSection = styled.div`
margin-top:40px`

const Main = styled.p`
font-family: 'Quicksand', sans-serif;
color:grey;
text-align: center;
font-size:10px;
margin-bottom:1px
`

const SubMain = styled.h1`
font-family: 'Questrial', sans-serif;
color:${(props)=>props.theme.color};
margin-bottom:1px;

font-size:40px

`

const SemiSubMain = styled.h3`
font-family: 'Quicksand', sans-serif;
color:${(props)=>props.theme.color};
font-size:17px

`

const Button=styled.div`
padding:12px;
background-color: ${(props) => props.theme.color};
font-family: 'Quicksand', sans-serif;
color:white;
width:40%;
border-radius: 10px;
border:2px solid ${(props) => props.theme.color} ;
font-size: 16px;
font-weight: bold;
cursor:pointer;
`

export default Home