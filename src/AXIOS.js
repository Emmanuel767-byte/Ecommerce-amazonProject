import React from 'react'
import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-first-ecommerce-site.cloudfunctions.net/api"//THE API FireBASE(cloud function) URL
    //http://localhost:5001/first-ecommerce-site/us-central1/api

    
});

export default instance;