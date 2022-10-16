import styled from 'styled-components'
import React, { useState } from 'react'
import { useContext } from 'react'
import { FormState } from './Form'
import { toast } from 'react-toastify'
import { TailSpin } from 'react-loader-spinner'
import { create as IPFSHTTPCLIENT } from 'ipfs-http-client'
const client = IPFSHTTPCLIENT('https://api.web3.storage')

const FormRight = () => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [adding, setAdding] = useState(false);


  const Handler = useContext(FormState)

  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if (Handler.form.story !== "") {

      const added = await client.add(Handler.form.story);
      setAdding(true)
      if (adding == true) {
        Handler.setStoryUrl(added.path)
  

      }
      else {
        toast.warn(`Error Uploading story`);

      }
      

    }


    if (Handler.image !== null) {

      const added = await client.add(Handler.Image);
      setAdding(true)
      if (adding == true) {
        Handler.setImageUrl(added.path)
  

      }
      else {
        toast.warn(`Error Uploading Image`);

      }
    }
   
    if (Handler.image == null ||Handler.form.story == "") {
      toast.warn(`Error Uploading Image`);

    }
    toast.success(`Good To Go `)
    setUploaded(true);
    setUploadLoading(false);
  }
 



  return (
    <FormWrapperRight>
      <FormInput>

        <FormRow>
          <Label>Required Amount</Label>
          <Input onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name='requiredAmount' type={'number'} placeholder='Required Amount' >

          </Input>
        </FormRow>


        <FormRow>
          <Label>Category</Label>
          <Selecting onChange={Handler.FormHandler} value={Handler.form.category} name='category' >
            <Option>Health</Option>
            <Option>Education</Option>
            <Option>Food</Option>

          </Selecting>
        </FormRow>

      </FormInput>
      <FormInput>
        <FormRowImage>
          <Label>Image</Label>
          <Image onChange={Handler.ImageHandler} type={'file'} accept="image/*" />
        </FormRowImage> </FormInput>
      <FormButton>
        {uploadLoading == true ? <FirstButton><TailSpin color='#fff' height={20} /></FirstButton> :
          uploaded == false ?
            <FirstButton onClick={uploadFiles}>
              Upload
            </FirstButton>
            : <FirstButton style={{ backgroundColor: "red" }}>Uploaded Sucessfully</FirstButton>
        }


        <SecondButton  onClick={Handler.startCampaign}>
          Start Campaign
        </SecondButton>
      </FormButton>

    </FormWrapperRight>
  )
}


const FormWrapperRight = styled.div`
width:100%;

`

const FormRow = styled.div`
margin: 30px;
display:flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
width:100%;

`

const FormRowImage = styled.div`
display:flex;
flex-direction: column;
width:100%;
margin:50px;

`

const FormInput = styled.div`
margin: 10px;
display:flex;
justify-content: space-between;
width:100%;
`

const Input = styled.input`
padding:12px;
background-color: ${(props) => props.theme.bgdiv};
border-color:#0F1B4C ;
border-radius: 20px;
border:2px solid;
`
const Label = styled.label`
display: flex;
justify-content: center;
margin-bottom: 20px;
color:${(props) => props.theme.color};
font-family: 'Quicksand', sans-serif;
font-size: 20px;
font-weight: bold;
`

const Selecting = styled.select`
padding:12px;
font-family: 'Quicksand', sans-serif;
background-color: ${(props) => props.theme.bgdiv};
border-color:#0F1B4C ;
border-radius: 20px;
border:2px solid;`

const Option = styled.option`
font-family: 'Quicksand', sans-serif;
font-weight:bold`

const Image = styled.input`
width:100%;
margin-left:43%;
padding:12px;
background-color: ${(props) => props.theme.bgcolor};
border:none;
outline: none;
&::-webkit-file-upload-button{
    padding:6px;
background-color:${(props) => props.theme.color};
font-family: 'Quicksand', sans-serif;
color:white;
border-radius: 10px;
border:3px solid #0F1B4C;

}
`
const FormButton = styled.div`
margin:20px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items:center;

width:100%;

`
const FirstButton = styled.button`
padding:16px;
background-color: ${(props) => props.theme.color};
font-family: 'Quicksand', sans-serif;
color:white;
border-radius: 10px;
border:3px solid ${(props) => props.theme.color};
font-size: 20px;
font-weight: bold;
cursor:pointer;
width:25%;

`

const SecondButton = styled.button`
padding:16px;
background-color:${(props) => props.theme.color};
font-family: 'Quicksand', sans-serif;
color:white;
border-radius: 10px;
cursor:pointer;
border:3px solid ${(props) => props.theme.color};
margin-top:12px;
font-size: 20px;
font-weight: bold;
width:25%;

`

export default FormRight