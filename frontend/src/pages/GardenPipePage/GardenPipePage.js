import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import GardenPipes from '../../components/GardenPipes/GardenPipes'

const GardenPipePage = () => {
  return (
    <>
        <Breadcrumb title="Plain Garden Pipes" middle={{url:'',text:''}}  last='Plain Garden Pipes' />
        <div className="container">
            <div className="row">
                <div className="headLine">
                    <h3>PLAIN GARDEN PIPES</h3>
                    <span className='line'></span>
                </div>
            </div>

        </div>
        <GardenPipes/>
    </>
  )
}

export default GardenPipePage