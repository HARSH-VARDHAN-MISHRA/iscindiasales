import React, { useEffect, useState } from 'react'
import './SingleTapCategory.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const SingleTapCategory = () => {

    const { categoryName } = useParams()
    // console.log(categoryName)
    // get-tap-product
    const [litexCate, setlitexCate] = useState([]);
    const handleFetch = async () => {
        try {
            const res = await axios.get('https://www.api.iscindiasales.co.in/api/v1/get-tap-product')
            // setlitexCate(res.data.data)
            const fillterProducts = res.data.data.filter((item) => item.productCategory === categoryName)
            console.log(fillterProducts)
            setlitexCate(fillterProducts)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    }, [])
    return (
        <>
            <Breadcrumb title={categoryName} middle={{ url: '/tap-products', text: 'Tap Categories' }} last={categoryName} />

            <section className="container tabProducts ">
                <div className="row">
                    <div className="cateGrid grid-2">
                        {litexCate && litexCate.map((item, index) => {
                            return (

                            <div key={index} className="singleProduct tap-product-lines">
                                <img src={item.prodImage} alt="product-image" />
                                <div className="contents">
                                    <div className="heading">{item.productHeadpara || "  "}</div>
                                    <div className="flex-d">
                                        <div className="names">
                                            <strong>{item.productBold}</strong>
                                            <p>{item.productBoldpara}</p>
                                        </div>
                                        <div className="price">₹{item.productPrice}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleTapCategory