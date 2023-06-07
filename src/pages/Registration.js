import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {

    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    
    };
    
    const validationSchema = 
    Yup.object().shape({
        username:  Yup.string().min(3).max(15).required(), 
        password: Yup.string().min(4).max(20).required(),
    
    })





const onSubmit = (data) =>{
axios.post("https://full-stack-api-homero.herokuapp.com/auth", data).then(() =>{
    navigate('/');
});
};


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

    <Form className="formContainer">
      
       <label>Username: </label>
       <ErrorMessage name="username" component="span" />
       <Field  autoComplete="off"  id="inputCreatePost" name="username" placeholder= "(EX  username..)" />
   
       <label>Password: </label>
       <ErrorMessage name="password" component="span" />
       <Field  type="password" autoComplete="off"  id="inputCreatePost" name="password" placeholder= "(EX  password..)" />
   

   <button type="submit">Register</button>
   
   </Form> 
   </Formik>
  )
}

export default Registration