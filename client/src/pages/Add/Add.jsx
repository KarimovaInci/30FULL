import React from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import "./Add.scss"
import Header from '../../layout/Header/Header'
import { Helmet } from "react-helmet";

const Add = () => {
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
    <Header/>
    <div className="form">
    <Formik  initialValues={{
      name:"",
      desc:"",
      price:""
    }}

    validationSchema={Yup.object({
      name:Yup.string().required("name is required"),
      desc: Yup.string().required("description is required"),
      price:Yup.number().required("price is required")
    })}

    onSubmit={(values, {resetForm})=>{
      axios.post("http://localhost:8585/bizpro/", values).then(res=>{
        toast.success("new card has been added")
      })
      resetForm()
    }}
    >
    {
      ({values, handleSubmit,handleChange,dirty})=>(
        <form onSubmit={handleSubmit}>
        <label htmlFor="name" onSubmit={handleSubmit}>Name:</label> 
        <input type="text"  id="name" onChange={handleChange} value={values.name} placeholder="Enter name"/>

        <label htmlFor="desc" onSubmit={handleSubmit}>Description:</label>
        <input type="text"  id="desc" onChange={handleChange} value={values.desc} placeholder="Enter description" />

        <label htmlFor="price" onSubmit={handleSubmit}>Price:</label>
        <input type="text"  id="price" onChange={handleChange} value={values.price} placeholder="Enter price" />

        <button type="submit" disabled={!dirty}>Add</button>
        
        </form>
      )
    }



    </Formik>


<Toaster/>

    </div>




    </>
  )
}

export default Add