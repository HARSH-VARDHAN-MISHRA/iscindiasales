import React, { useEffect } from 'react'
import './ProductCate.css'

// import agriculturePvc from './images/agriculture-pvc.jpg'
// import brassMetal from './images/brass-metal-products.jpg'
// import casingPipes from './images/casing-pipes.jpg'
// import cpvc from './images/cpvc.jpg'
// import submersibleColumn from './images/submersible-column-pipes.jpg'
// import swrPipes from './images/swr-pipes.jpg'
// import upvc from './images/upvc.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const ProductCate = () => {

    const [cateDetails,setCateDetails] = useState([]);
    const handleFetch = async()=>{
        try {
            const res = await axios.get('https://www.api.iscindiasales.co.in/api/v1/get-category')
            setCateDetails(res.data.data)
            // console.log(res.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    },[])
    
  return (
    <>
        <section className="our-categories">
            <div className="container">
                <div className="flex-4">
                    {cateDetails && cateDetails.map((item,index)=>(
                        <Link to={`/pipes/${item.categoryName}`} className="single" key={index}>
                            <img src={item.categoryImage} alt="category-image" />
                            <p className="name">{item.categoryName}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductCate