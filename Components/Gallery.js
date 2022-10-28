import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Vendors.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
const Gallery = () => {
    return (
        <div className='row g-2'>
            <div className="col-md-4">
                <div className={`${Styles.gallery_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/gallery_image/download_(1).jfif'}
                        layout='fill'
                        objectFit='cover'
                    />

                    <div className={Styles.gallery_overlay}>
                        <span className="icon">
                            <AiOutlineSearch />
                        </span>
                    </div>
                </div>

            </div>
            <div className="col-md-4">
                <div className={`${Styles.gallery_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/gallery_image/download.jfif'}
                        layout='fill'
                        objectFit='cover'
                    />

                    <div className={Styles.gallery_overlay}>
                        <span className="icon">
                            <AiOutlineSearch />
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={`${Styles.gallery_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        layout='fill'
                        objectFit='cover'
                    />

                    <div className={Styles.gallery_overlay}>
                        <span className="icon">
                            <AiOutlineSearch />
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={`${Styles.gallery_img_wrapper} position-relative overflow-hidden`}>
                    <Image
                        src={'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        layout='fill'
                        objectFit='cover'
                    />

                    <div className={Styles.gallery_overlay}>
                        <span className="icon">
                            <AiOutlineSearch />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery