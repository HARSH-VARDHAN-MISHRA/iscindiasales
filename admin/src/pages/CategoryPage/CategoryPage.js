import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryPage = () => {
    const [categories,setCategory] = useState([]);

    const handleFetch = async()=>{
        try {
            const res = await axios.get('https://www.api.iscindiasales.co.in/api/v1/get-category');
            setCategory(res.data.data)
            console.log(categories)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        handleFetch();
    },[])
    const hadndleDelete = async (id)=>{
        try {
            const res = await axios.delete(`https://www.api.iscindiasales.co.in/api/v1/delete-category/${id}`);
            console.log(res.data)
            toast.success("Product Deleted Successfully")
            handleFetch()
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
        <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>Our Category</h2>
                    <ul>
                        <li><a href="/">Home / </a></li>
                        <li>Our Categories</li>
                    </ul>
                </div>
                <div className="btn1">
                    <Link to={'/create-category'} >Create Category </Link>
                </div>
            </section>

            <section className="tables">
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Products</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.reverse().map((item,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td><img src={item.categoryImage} alt="Category-image" /></td>
                                        <td>{item.categoryName}</td>
                                        <td>{item.description}</td>
                                        <td className='upd-btns'>
                                            <Link to={`/edit-category/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={()=>{hadndleDelete(item._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryPage