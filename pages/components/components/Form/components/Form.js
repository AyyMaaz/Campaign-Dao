import styled from "styled-components"
import FormRight from "./FormRight"
import FormLeft from "./FormLeft"
import FormBottom from './FormBottom'
import { createContext, useState } from "react"
import {TailSpin} from 'react-loader-spinner';
import {ethers} from 'ethers';
import {toast} from 'react-toastify';
import CampaignFactory from "../artifacts/contracts/Campaign.sol/CampaignFactory.json"
import { PUBLIC } from "./constants/public"
export const FormState=createContext();
const Form = () => {
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("");
    
    const [form,setForm]=useState({
        campaignTitle:'',
        story:'',
        requiredAmount:'',
        category:''
    });
    const [image,setImage]=useState(null);

    const FormHandler=(e)=>{
        setForm({...form ,[e.target.name] : e.target.value})

    }
    const ImageHandler=(e)=>{
        setForm(e.target.files[0])

    }
    const [storyUrl, setStoryUrl] = useState();
    const [imageUrl, setImageUrl] = useState();
    const startCampaign = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    
        if(form.campaignTitle === "") {
          toast.warn("Title Field Is Empty");
        } else if(form.story === "" ) {
          toast.warn("Story Field Is Empty");
        } else if(form.requiredAmount === "") {
          toast.warn("Required Amount Field Is Empty");
        // } else if(uploaded == false) {
        //     toast.warn("Files Upload Required")
        }
        else {        
          setLoading(true);  
    
          const contract = new ethers.Contract(
            PUBLIC ,
            CampaignFactory.abi,
            signer
          );
            
    
          const CampaignAmount = contract.ethers.utils.parseEther(form.requiredAmount);
    
          const campaignData = await contract.createCampaign(
            form.campaignTitle,
            CampaignAmount ,
            imageUrl,
            storyUrl,
            form.category
      
          );
    
          await campaignData.wait();   
    
          setAddress(campaignData.to);
        }
    }


   


  return (
    <FormState.Provider value={{form,setForm,image,setImage,FormHandler,ImageHandler,storyUrl,imageUrl,setStoryUrl, setImageUrl,loading, setLoading,address, setAddress,startCampaign}}>
    <FormWrapper>
        <FormSub>
            
            {loading == true ?
                address !== "" ?
            
                    <Spinner>
                        <TailSpin height={60} />
                    </Spinner> :
                <Address>
                <Heading>Your Campagin has been started!</Heading>
                <SubHeading>Make sure you are collecting funds for the flood victoms.If we see you are doing inappropriate things using the<br/>name of campaign We will burn ur campaign.And you are not able to visit the site again</SubHeading>
                    <SubHeading>{address}</SubHeading>
                    <Button>
                        Go To Campaign
                    </Button>
                  
                </Address>:
                
            <FormInput>
            <FormTitle>Create Campaign</FormTitle>
                <FormLeft/>
                <FormBottom/>
                <FormRight/>
            </FormInput>}
        </FormSub>
    </FormWrapper>
    </FormState.Provider>
  )
}
const FormWrapper=styled.div`
margin-top: 4%;
width:100%;
display:flex;
justify-content:center`

const FormSub=styled.div`
width:100%;`

const FormTitle=styled.div`
width:100%;
font-family: 'Akaya Kanadaka', cursive;
text-transform: capitalize;
color:${(props)=>props.theme.color};
font-size: 75px;
margin:30px;
display:flex;
justify-content:center;
align-items:center`

const FormInput=styled.div`
display:flex;
flex-direction: column;
`
const Spinner = styled.div`
    width:100%;
    height:80vh;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`
const Heading=styled.h1`
color:white;
font-family: 'Akaya Kanadaka', cursive;
`
const Address = styled.div`
    /* width:100%; */
    height:60vh;
    margin-left:10%;
    margin-right:10%;

    display:flex ;
    flex-direction:column;
    justify-content: center;
    align-items:center ;
    background-color:${(props) => props.theme.color} ;
    border-radius:8px;
`
const SubHeading=styled.h4`color:white;
font-family: 'Space Grotesk', sans-serif;;`

const Button = styled.button`
display:flex ;
    justify-content: center;
    align-items:center ;
border:4px solid ${(props) => props.theme.color} ;
color:black;
border-radius:10px;
font-size: 14px;
padding:10px;
margin: 20px;

font-weight: bolder;
background-color:${(props) => props.theme.bgcolor};
font-family: 'Space Grotesk', sans-serif;
cursor: pointer;
`

export default Form;
