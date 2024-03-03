import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({title, backgroundImage}) => {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='pageheader-section' style={headerStyle}>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='pageheader-content text-center'>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader