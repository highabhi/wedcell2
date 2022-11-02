import React, { useState, useEffect } from 'react'
import Styles from '../styles/Hero.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useRouter } from 'next/router'



const Hero = () => {

    const router = useRouter()

    const [vendorTypes, setVendorTypes] = useState([
        'Select Type',
        'Venue',
        'Vendor',
    ])

    const [locations, setLocations] = useState([
        'All Locations',
        'Mumbai',
        'Pune',
        'Delhi',
        'Jaipur',
        'Goa',
        'Udaipur',
        'Agra',
        'Noida',
        'Gurgaon',
        'Ranchi',
        'Patna',
        'Bangalore',
        'Hyderabad',
        'Ahmedabad',
        'Chennai',
        'Kolkata',
        'Surat',
        'Lucknow',
        'Kanpur',
        'Nagpur',
        'Indore',
        'Thane',
        'Bhopal',
        'Visakhapatnam',
        'Vadodara',
        'Ghaziabad',
        'Ludhiana',
        'Nashik',
        'Meerut',
        'Rajkot',
        'Varanasi',
        'Srinagar',
        'Aurangabad',
        'Dhanbad',
        'Amritsar',
        'Allahabad',
        'Gwalior',
        'Jabalpur',
        'Coimbatore',
        'Vijayawada',
        'Jodhpur',
        'Raipur',
        'Kota',
        'Chandigarh',
        'Guwahati',
        'Mysore',
        'Bareilly',
        'Aligarh',
        'Moradabad',
        'Jalandhar',
        'Bhuba',
        'Gorakhpur',
        'Bikaner',
        'Saharanpur',
        'Jamshedpur',
        'Bhilai',
        'Cuttack',
        'Firozabad',
        'Kochi',
        'Dehradun',
        'Durgapur',
        'Ajmer',
        'Siliguri',
        'Gaya',
        'Tirupati',
        'Mathura',
        'Bilaspur',
        'Haridwar',
        'Gandhinagar',
        'Shimla',
        'Gangtok',
        'Nainital',
        'Jaisalmer',
        'Indor',
        'Rishikesh',
        'kaushali',
        'Pushkar',
        'Kerala',
        'Jim Corbet',
        'Mussoorie',
        'Dubai',
        'Thailand',
        'Canada',
        'Srilanka',
        'South Africa',
        'Singapore',
        'Bali',
        'Italy',
        'UK',
        'Autralia',
        'Bokaro',
        'Faridabad',
        'South Delhi',
        'Kolkata',
    ])

    const CategotiesList = [
        {
            name: 'Food',
            subCategories: [
                'Chaat Counter',
                'Fruit Counter',
                'Catering services',
                'Pan Counter',
                'Cake',
                'Bar Tenders',
            ],
        },
        {
            name: 'Invites & Gifts',
            subCategories: ['invitation card', 'invitation gift'],
        },
        {
            name: 'Jwellery And Accessories',
            subCategories: [
                'FLOWER JEWELLERY ',
                'BRIDAL JEWELLERYON RENT',
                'Artificial',
                'Accessories',
            ],
        },
        {
            name: 'Music & Dance',
            subCategories: [
                'Anchor',
                'Artist management services',
                'Choreographer',
                'Singer',
                'DJ',
                'Ghodi & Baggi',
                'Band Baja',
                'Dhol',
            ],
        },
        {
            name: 'Pandit Jee',
            subCategories: [],
        },
        {
            name: 'Makeup',
            subCategories: ['bridal makeup', 'Groom Makeup', 'Family Makeup'],
        },
        {
            name: 'Mehndi',
            subCategories: ['Bride Mehndi', 'Family Member Mehndi'],
        },
        {
            name: 'Photographers',
            subCategories: [
                'Cinema/Video',
                'Album',
                'Collage Maker',
                'Drone',
                'Pre Wedding Shoot',
            ],
        },
        {
            name: 'Planning & Decor',
            subCategories: [
                'Wedding Decor',
                'Wedding Planners',
                'Celebrities Management',
                'Hospitality Service',
            ],
        },
    ]

    const CategotiesListVenue = [
        {
            name: 'Hotel',
            subCategories: [],
        },
        {
            name: 'Resort',
            subCategories: [],
        },
        {
            name: 'Farm House',
            subCategories: [],
        },
        {
            name: 'Banquet Hall',
            subCategories: [],
        },
        {
            name: 'Lawn',
            subCategories: [],
        },
        {
            name: 'Destination Wedding',
            subCategories: [],
        },
    ]

    const [activeLocation, setActiveLocation] = useState(locations[0])

    const [activeVendor, setActiveVendor] = useState({ type: 'All Types', value: 'All Types' })
    const [srcollTop, setScrollTop] = useState(false)
    const [showSelect, setShowSelect] = useState({ select1: false, select2: false })

    const { select1, select2 } = showSelect


    useEffect(() => {
        const scroll = window.addEventListener('scroll', () => {


            if (window.scrollY > 200) {
                setScrollTop(true)
            }

            else {
                setScrollTop(false)
            }
        })

        return (() => {
            window.removeEventListener('scroll', scroll)
        })
    })


    return (
        <div className={Styles.hero_container} >
            <div className={Styles.overlay}></div>
            <div className={`${Styles.hero_tagline_container} text-center`}>
                <h2 className={`${Styles.hero_title} text-white shadowed-text`}>Find Local Wedding Vendors</h2>
                <p className={`${Styles.hero_info} text-white`} >Browse the best wedding vendors in your area — from venues and photographers, to wedding planners, caterers, florists and more.</p>
            </div>
            <div className={Styles.input_fields_container}>
                <div className='row align-items-center gx-3 gy-3 gy-md-0'>
                    <div className="col-md-5 position-relative">
                        <div className={`${Styles.input_field} d-flex align-items-center justify-content-between `} onClick={() => setShowSelect({ select1: !select1 })} >
                            <span className="type">{activeVendor.value}</span>
                            <FaChevronDown />
                        </div>

                        <div className={`${Styles.search_dropdown} bg-white px-4 position-absolute pt-3`} style={{ transition: 'all 450ms', opacity: select1 ? '1 ' : '0', visibility: select1 ? 'visible' : 'hidden', cursor: 'pointer', height: "150px", overflowX: 'scroll' }} >

                            <span className={'All Typese' === activeVendor.value ? 'text-black d-block pb-3 primary-text' : 'text-black d-block pb-3'} onClick={() => {
                                setActiveVendor({ type: 'All Types', value: "All Types" })
                                setShowSelect({ select1: !select1 })
                            }}> All Types</span>

                            {CategotiesList.map((item, index) => {
                                return (
                                    <span key={index} className={item.name === activeVendor.value ? 'text-black d-block pb-3 primary-text' : 'text-black d-block pb-3'} onClick={() => {
                                        setActiveVendor({ type: 'vendor', value: item.name })
                                        setShowSelect({ select1: !select1 })
                                    }}> {item.name}</span>
                                )
                            })}

                            {CategotiesListVenue.map((item, index) => {
                                return (
                                    <span key={index} className={item.name === activeVendor ? 'text-black d-block pb-3 primary-text' : 'text-black d-block pb-3'} onClick={() => {
                                        setActiveVendor({ type: 'venue', value: item.name })
                                        setShowSelect({ select1: !select1 })
                                    }}> {item.name}</span>
                                )
                            })}

                        </div>

                    </div>
                    <div className="col-md-5 position-relative">
                        <div className="input_field_container">
                            <div className={`${Styles.input_field} d-flex align-items-center justify-content-between`} onClick={() => setShowSelect({ select2: !select2 })} >
                                <span className="type">{activeLocation}</span>
                                <FaChevronDown />
                            </div>

                            <div className={`${Styles.search_dropdown} bg-white p-4 position-absolute `} style={{ transition: 'all 450ms', opacity: select2 ? '1 ' : '0', visibility: select2 ? 'visible' : 'hidden', cursor: 'pointer', height: "150px", overflowX: 'scroll' }} >


                                {locations.map((location, index) => {
                                    return (
                                        <span key={index} className={location === activeLocation ? 'text-black d-block pb-3 primary-text' : 'text-black d-block pb-3'} onClick={() => {
                                            setActiveLocation(location)
                                            setShowSelect({ select2: !select2 })
                                        }}>{location}</span>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button onClick={() => {
                            router.push({
                                pathname: '/listings',
                                query: { type: 'type', city: 'city' }
                            })
                        }} className="primary-btn w-100 d-block">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <button className={Styles.scroll_btn} style={{ transition: 'all 450ms', opacity: srcollTop ? '1' : '0' }} onClick={() => window.scrollTo('', '0px')}>
                <FaChevronUp />
            </button>
        </div>
    )
}

export default Hero