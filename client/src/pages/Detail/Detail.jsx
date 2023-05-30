import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import "./Detail.scss"
import { Helmet } from "react-helmet";

const Detail = () => {
  const {id}=useParams()
  const[item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8585/bizpro/${id}`).then(res=>{
      setItem(res.data)
    })
  })
  return (
 <>
 <Helmet>
        <title>Detail</title>
      </Helmet>
 <Header/>
 <div className="details">
 <h2>{item.name}</h2>
 <p>{item.desc}</p>
 <h5>{item.price}</h5>
 </div>


 



 </>
  )
}

export default Detail