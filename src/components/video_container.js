import React from 'react'
import './video_container.css'

function video_container() {
    return (
        <div>
            <div className="h1-section">
                <h1 className="h1-title">ELANCO and DOGS</h1>
                <h1 className="h1-data">Elanco products address a variety of animal health issues.</h1>
            </div>
            <div className="section">
                <div className="video-container">
                    <video className="" autoPlay="yes" loop="yes" muted="yes" data-reactid=".0.1.0.0" playsInline="yes">
                        <source src='/Videos/video_1.mp4' type="video/mp4" />
                    </video>
                </div>
            </div>
            
            
        </div>
    )
}

export default video_container
