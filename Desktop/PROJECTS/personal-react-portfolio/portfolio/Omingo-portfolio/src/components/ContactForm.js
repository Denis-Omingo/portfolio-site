import './ContactFormStyles.css';
//import emailjs from '@emailjs/browser';

import React from 'react'
import {Field, Form, Formik,ErrorMessage} from 'formik'
import * as Yup from'yup'

const initialValues={
  name:'',
  email:'',
  message:'',
  subject:''
 
}
const onSubmit=values=>{
  console.log('name:',values.name)
  console.log("----------------------------------")
  console.log('Email:',values.email)
  console.log("----------------------------------")
  console.log('Message Subject:',values.subject)
  console.log("----------------------------------")
  console.log('Message:',values.message)
  console.log("----------------------------------")
}
const validationSchema=Yup.object({
  name: Yup.string().required('Required*'),
  email:Yup.string().email('Invalid email format!').required('required*'),
  message:Yup.string().required('Required*'),
  subject:Yup.string().required('Required*')
})


const ContactForm = () => {

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    className='form'>
     <Form>
    
        <label>Your Name</label>
        <Field
        type="text" 
        name="name"
        />
         <div className='error'><ErrorMessage name='name'/></div>
        
       
       
        <label>Email</label>
        <Field type="email"
         name="email"/>
         <div className='error'><ErrorMessage name='email'/></div>
         
         <label>Subject</label>
        <Field
        type="text" 
        name="subject"
        />
        <div className='error'><ErrorMessage name='subject'/></div>


       <label>Message</label>
        <Field as='textarea'
         rows="6" 
         name="message" 
         placeholder="Type Your Message Here" />
  <div className='error'><ErrorMessage name='message'/></div>
     
      <button className='btn' id='btn' type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm;
