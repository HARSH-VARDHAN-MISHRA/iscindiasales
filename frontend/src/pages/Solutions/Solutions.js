import React, { useEffect } from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Solutions = () => {
    const solutions = [
        {
            id:1,
            mediaImage: 'https://i.ibb.co/8jPFnNn/13-Fujisawa-SST-2020.jpg',
            solName:'Smart Cities / Town ships'
            
        },
        {
            id:2,
            mediaImage: 'https://i.ibb.co/4Nf1Z8x/High-rise-building-Propertydome.jpg',
            solName:'High rise buildings'
        },
        {
            id:3,
            mediaImage:'https://i.ibb.co/ZmHddbt/Types-of-building-materials.jpg',
            solName:'Residentials'
        },
        {
            id:4,
            mediaImage: 'https://i.ibb.co/7kpPWww/new-bungalows-Joka.jpg',
            solName:'Villas / Bungalows'
        },
        {
            id:5,
            mediaImage: 'https://i.ibb.co/8sb7rMq/Clarkes-Blog-3-Edit.jpg',
            solName:'Commercial'
        },
        {
            id:6,
            mediaImage: 'https://i.ibb.co/cv9m8vy/1835695785.jpg',
            solName:'Hotels / Resorts'
        },
        {
            id:7,
            mediaImage: 'https://i.ibb.co/Tr3J3SN/01-2019-DCA-0007-scaled-Universal-20-Studios-20-Hollywood.jpg',
            solName:'Amusement parks'
        },
        {
            id:8,
            mediaImage: 'https://i.ibb.co/Xp1MFTZ/istock-172463472.webp',
            solName:'Hospitals'
        },
        {
            id:9,
            mediaImage: 'https://i.ibb.co/hMrDg9D/garden-hoses-751.jpg',
            solName:'Garden Pipe'
        },
        {
            id:10,
            mediaImage: 'https://i.ibb.co/Pgb3F9q/1492944919-solar.jpg',
            solName:'Agriculture'
        },
    ]
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <Breadcrumb title="Solutions" middle={{url:'',text:''}}  last='Solutions' />
        <section className='container mt-5'>
            <div className="row">
                <div className="headLine">
                    <h3>SOLUTIONS</h3>
                    <span className='line'></span>
                </div>
            </div>

            <div className="row">
                <div className="cateGrid grid-1">
                    {solutions && solutions.map((item,index)=>(
                        <div className="singleMedia" key={index}>
                            <img src={item.mediaImage} alt="media-image" decoding='async' loading='lazy' />
                            <div className="eventName">{item.solName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Solutions