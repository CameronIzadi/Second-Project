import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Loader from "./Loader"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE


const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/TABLE%201`


export default function ProminalDetail() {
  const [everything, setEverything] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchEverything()
    
  }, [])
  const fetchEverything = async () => {
    const bigURL = `${URL}/${id}`
    const res = await axios.get(bigURL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      }
    })
    setEverything(res.data)
  }

  if (everything.length === 0) {
    return <Loader />;
  }

  return <div>
    <h2>{everything.fields?.name}</h2>
    <h2>{everything.fields?.author}</h2>
    <img src={everything.fields?.image} alt={everything.fields?.name} />
    <img src={everything.fields?.image_2} alt={everything.fields?.name} />
    <img src={everything.fields?.image_3} alt={everything.fields?.name} />
    <img src={everything.fields?.image_4} alt={everything.fields?.name} />
    <img src={everything.fields?.image_5} alt={everything.fields?.name} />
    <img src={everything.fields?.avatar_url} alt={everything.fields?.name} />
    <p>{everything.fields?.description}</p>
    <h2>{everything.fields?.price}</h2>
  </div>
}


