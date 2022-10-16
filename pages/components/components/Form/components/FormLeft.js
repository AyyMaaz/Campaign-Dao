import styled from 'styled-components'
import  { useContext } from 'react'
import {FormState} from './Form'

const FormLeft = () => {
    const Handler=useContext(FormState)
    return (
        <FormWrapperLeft>
            <FormInput>
                <Label>Campaign Name</Label>
                <Input onChange={Handler.FormHandler} placeholder='Campaign Name' value={Handler.form.campaignTitle} name='campaignTitle'>

                </Input>
            </FormInput>

        

        </FormWrapperLeft>
    )
}
const FormWrapperLeft = styled.div`
display: flex;
justify-content: center;
width:100%;
`
const FormInput = styled.div`
margin: 30px;
display:flex;
flex-direction: column;
width:74%;
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
export default FormLeft