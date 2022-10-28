import React from 'react'
import Styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import {AiOutlineClose} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className={Styles.sidebar_container} style={{transition:'all 450ms', transform:isSidebarOpen?'translateX(0)':'translateX(100%)'}} >
            <div className="sidebar-header d-flex justify-content-between align-items-center  px-3">
                <div className="logo-container">
                    <Image
                        src={'https://www.wedcell.com/assets/front/images/logo.png'}
                        width='100'
                        height='57'
                        objectFit='contain'
                    />
                </div>
                <button className="clos-btn btn p-0 text-white" onClick={()=>setIsSidebarOpen(false)}>
                    <AiOutlineClose/>
                </button>
            </div>

            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Venues
                </span>

                <span className={`d-block ${Styles.icon}`} >
                <BiChevronDown/>
                </span>
            </div>
            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Shops
                </span>

                <span className={`d-block ${Styles.icon}`} >
                <BiChevronDown/>
                </span>
            </div>
            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Vedors
                </span>

                <span className={`d-block ${Styles.icon}`} >
                <BiChevronDown/>
                </span>
            </div>

            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <a href="#
                ">

                Blogs
                </a>
              

                
            </div>
        </div>
    )
}

export default Sidebar