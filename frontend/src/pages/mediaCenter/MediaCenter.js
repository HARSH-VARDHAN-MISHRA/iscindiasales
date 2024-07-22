import React, { useEffect, useState } from 'react'
import './MediaCenter.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import axios from 'axios'
import ModelPopup from '../../components/ModelPopup/ModelPopup'

const MediaCenter = () => {
    const [mediaFeilds,setmediaFeilds] = useState();
    
    const fetchMedia = async()=>{
        try {
            const res = await axios.get('https://www.api.iscindiasales.co.in/api/v1/get-media-center')
            setmediaFeilds(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        fetchMedia();
    },[])

    const [open, setOpen] = useState(false);
    const [imgModel, setImageModal] = useState(null);
    const [modelName,setModelName] = useState(null);
  
    const handleMoldelImage = (img,modelProName) => {
      setImageModal(img);
      setModelName(modelProName)
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setImageModal(null); // Reset imgModel when closing modal
      };
  return (
    <>
        <Breadcrumb title="Media Center" middle={{url:'',text:''}}  last='Media Center' />
        <section className='container mt-5'>
            <div className="row">
                <div className="headLine">
                    <h3>MEDIA CENTER</h3>
                    <span className='line'></span>
                </div>
            </div>

            <div className="row">
                <div className="cateGrid grid-1">
                    {mediaFeilds && mediaFeilds.map((item,index)=>(
                        <div className="singleMedia" key={index}  onClick={()=>{handleMoldelImage(item.mediaImage,item.mediaName)}}>
                            <img src={item.mediaImage} alt="media-image" decoding='async' loading='lazy' />
                            <div className="eventName">{item.mediaName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <ModelPopup imgModel={imgModel} proName={modelName} onClose={handleClose} />
    </>
  )
}

export default MediaCenter