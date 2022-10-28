import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from '../Components/CustomButton'
import Styles from '../styles/PopularMakeup.module.css'
import Image from 'next/image';
const PopularPhotographer = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <div className={`bg-grey py-60 `} >
    <div className=" px-4">

        <div className="title-container text-center">
            <h2>Popular Photographer</h2>
            <p className='text-gray'>
            A short description for showcase of Popular Mehandi. 
            </p>
        </div>


        <Carousel
            responsive={responsive}
            infinite={true}
            ssr={true}
            swipeable={true}
            draggable={true}
            arrows={false}
            customButtonGroup={<CustomButton />}
            itemClass={Styles.carousel_item}
            containerClass={'py-5'}
        >
            <div className={`${Styles.cr_container} box-shadow`} >
                <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/product_image/61780f71c1f98.jpeg'}
                        layout='fill'
                        objectFit='cover'
                    />

                </div>
                <div className="cr-body">
                    <div className="cr-info pt-4 px-5 text-center text-gray">
                        <h5>Paralight Pictures...</h5>
                        <p className='text-gray'>

                        Gurukul Road, Shantiniketan Society, Visharam Nagar, Ghatlod...
                        </p>
                    </div>
                    <div className={`cr-footer  mt-4 ${Styles.br_top} text-center py-3`}>
                       
                            <span className="d-block ">INR 12,000</span>
                            <span className="d-block f-bold mt-2 ">Starting Price</span>
                        
                    </div>
                </div>
            </div>

            <div className={`${Styles.cr_container} box-shadow`} >
                <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/product_image/61780f71c1f98.jpeg'}
                        layout='fill'
                        objectFit='cover'
                    />

                </div>
                <div className="cr-body">
                    <div className="cr-info pt-4 px-5 text-center text-gray">
                        <h5>Paralight Pictures...</h5>
                        <p className='text-gray'>

                        Gurukul Road, Shantiniketan Society, Visharam Nagar, Ghatlod...
                        </p>
                    </div>
                    <div className={`cr-footer  mt-4 ${Styles.br_top} text-center py-3`}>
                       
                            <span className="d-block ">INR 12,000</span>
                            <span className="d-block f-bold mt-2 ">Starting Price</span>
                        
                    </div>
                </div>
            </div>
            <div className={`${Styles.cr_container} box-shadow`} >
                <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/product_image/61780f71c1f98.jpeg'}
                        layout='fill'
                        objectFit='cover'
                    />

                </div>
                <div className="cr-body">
                    <div className="cr-info pt-4 px-5 text-center text-gray">
                        <h5>Paralight Pictures...</h5>
                        <p className='text-gray'>

                        Gurukul Road, Shantiniketan Society, Visharam Nagar, Ghatlod...
                        </p>
                    </div>
                    <div className={`cr-footer  mt-4 ${Styles.br_top} text-center py-3`}>
                       
                            <span className="d-block ">INR 12,000</span>
                            <span className="d-block f-bold mt-2 ">Starting Price</span>
                        
                    </div>
                </div>
            </div>
            <div className={`${Styles.cr_container} box-shadow`} >
                <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                    <Image
                        src={'https://www.wedcell.com/assetss/images/product_image/61780f71c1f98.jpeg'}
                        layout='fill'
                        objectFit='cover'
                    />

                </div>
                <div className="cr-body">
                    <div className="cr-info pt-4 px-5 text-center text-gray">
                        <h5>Paralight Pictures...</h5>
                        <p className='text-gray'>

                        Gurukul Road, Shantiniketan Society, Visharam Nagar, Ghatlod...
                        </p>
                    </div>
                    <div className={`cr-footer  mt-4 ${Styles.br_top} text-center py-3`}>
                       
                            <span className="d-block ">INR 12,000</span>
                            <span className="d-block f-bold mt-2 ">Starting Price</span>
                        
                    </div>
                </div>
            </div>
 

        </Carousel>
    </div>
</div>
  )
}

export default PopularPhotographer