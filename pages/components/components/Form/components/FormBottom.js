import styled from 'styled-components'
import React, { useContext } from 'react'
import {FormState} from './Form'

const FormBottom = () => {
    const Handler=useContext(FormState)
  return (
    <FormWrapperBottom>
    <FormInput>
    <Label>About Campaign</Label>
    <Textarea onChange={Handler.FormHandler} value={Handler.form.story} name='story' placeholder='Your Description'>

    </Textarea>
</FormInput>
</FormWrapperBottom>

  )
}

const FormWrapperBottom = styled.div`
display: flex;
justify-content: center;
width:100%;
`

const Textarea = styled.textarea`
padding:100px;
background-color: ${(props) => props.theme.bgdiv};
border-color:#0F1B4C ;
border-radius: 20px;
border:2px solid;
overflow-x: hidden;

`

const FormInput = styled.div`
margin: 30px;
display:flex;
flex-direction: column;
width:74%;
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
export default FormBottom