import React, { useEffect, useState } from 'react'
import ModelPopup from '../../components/ModelPopup/ModelPopup'

const GardenPipes = () => {
    const GardenPipeProducts = [
        // {
        //     id:1,
        //     mediaImage: 'https://i.ibb.co/GksfFrN/1000038499-removebg-preview.png',
        //     proName:'Thread Pipe - 2.5 Kg'
            
        // },
        // {
        //     id:2,
        //     mediaImage: 'https://i.ibb.co/SRDgv8Z/1000038477-removebg-preview.png',
        //     proName:'Plain thread pipe - 4 Kg'
        // },
        // {
        //     id:3,
        //     mediaImage:'https://i.ibb.co/8c0wqz5/1000038478-removebg-preview.png',
        //     proName:'Plain thread pipe - 6 Kg'
        // },
        // {
        //     id:4,
        //     mediaImage: 'https://i.ibb.co/7W9Zdj0/1000038479-removebg-preview.png',
        //     proName:'Plain thread pipe - 8 Kg'
        // },
        {
            id:5,
            mediaImage: 'https://i.ibb.co/6ywg4Lb/Photoroom-20240711-153931.png',
            proName:'THREAD PIPE 4 KG'
        },
        {
            id:6,
            mediaImage: 'https://i.ibb.co/L98PDWY/Photoroom-20240711-153904.png',
            proName:'Plain thread pipe - 4 Kg'
        },
        {
            id:7,
            mediaImage: 'https://i.ibb.co/GQMHC75/Photoroom-20240711-153847.png',
            proName:'Plain thread pipe - 6 Kg'
        },
        {
            id:8,
            mediaImage: 'https://i.ibb.co/svhXrDx/Photoroom-20240711-153829.png',
            proName:'Plain thread pipe - 8 Kg'
        },
    ]

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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        
        <section className='container'>
            
            <div className="row">
                <div className="cateGrid grid-1">
                    {GardenPipeProducts && GardenPipeProducts.map((item,index)=>(
                        <div className="singleMedia" key={index} style={{border:'1px solid var(--color-main)'}}  onClick={()=>{handleMoldelImage(item.mediaImage,item.proName)}}>
                            <img src={item.mediaImage} alt="media-image" decoding='async' loading='lazy' style={{objectFit:'contain'}} />
                            <div className="eventName">{item.proName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <ModelPopup imgModel={imgModel} proName={modelName} onClose={handleClose} />
    </>
  )
}

export default GardenPipes