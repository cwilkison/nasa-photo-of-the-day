import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function CardPage() {
 const [pictures, setPictures] = useState([]);
 useEffect(() => {
  axios
  .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  .then(response => {
    console.log(response.data)
    setPictures(response.data);
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })
 }, [])
  return (
    <div className="photos">
        <Card date={pictures.date} explanation={pictures.explanation} title={pictures.title} url={pictures.url}/>
    </div>
    );
}
