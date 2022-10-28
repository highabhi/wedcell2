import React from 'react'
import Styles from '../styles/Vendors.module.css'
import Image from 'next/image'
const Albums = () => {
    return (
        <div className='row g-3'>
            <div className="col-md-6">
                <div className={`${Styles.albums_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className={`${Styles.album_overlay} pb-1 px-4 d-flex flex-column justify-content-end`}>
                        <h5 className="text-white fw-bold">Tyler Madhav</h5>
                        <span className="text-white">Banglore</span>
                        <p className="text-white">Greens Oranges and Sunshine this morning.</p>
                    </div>
                   
                </div>
            </div>
            <div className="col-md-6">
                <div className={`${Styles.albums_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className={`${Styles.album_overlay} pb-1 px-4 d-flex flex-column justify-content-end`}>
                        <h5 className="text-white fw-bold">Tyler Madhav</h5>
                        <span className="text-white">Banglore</span>
                        <p className="text-white">Greens Oranges and Sunshine this morning.</p>
                    </div>
                   
                </div>
            </div>


        </div>
    )
}

export default Albums