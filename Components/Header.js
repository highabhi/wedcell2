import React, { useState, useEffect, useRef } from "react";
import Styles from "../styles/Navbar.module.css";
import { FaChevronDown } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Getallitems } from "../redux/actions/HomeActions";

import appstore from '../public/images/Apple-Store.png'
import google from '../public/images/Google-Play.png'
import logo from '../public/logo.jpeg'

import { useRouter } from "next/router";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [auth, setAuth] = useState('')
  const [role, setRole] = useState('')

  const [showCities, setShowCities] = useState(false)

  const router = useRouter()

  const [locations, setLocations] = useState([
    'All Location',
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

  const [activeLocation, setActiveLocation] = useState(locations[0])

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

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("wedcell")
    const role = JSON.parse(localStorage.getItem("role"))
    setAuth(auth)
    setRole(role)

  }, [auth])

  return (
    <div
      className="nav-bar-wrapper w-100"
      style={{
        transition: "all 450ms",
        position: show ? "fixed" : "relative",
        zIndex: "100",
        top: "0",
      }}
    >
      <div
        className={`${Styles.top_nav_container} bg-black py-2`}
        style={{ transition: "all 450ms", display: show ? "none" : "block" }}
      >
        <div className="container">
          <div className="row align-items-center gy-2 gy-md-0 ">
            <div className="col-md-4">
              <span className="d-block text-white">
                India’s first wedding market place
              </span>
            </div>
            <div className="col-md-4 col-12" onClick={() => setShowCities(!showCities)}>
              <div
                className={`${Styles.input_container} d-flex
                         justify-content-between align-items-center bg-white `}
              >
                <span>{activeLocation}</span>
                <FaChevronDown />
              </div>

              <div className={`${Styles.search_dropdown} bg-white p-4 position-absolute col-md-4 col-8`} style={{ transition: 'all 450ms', opacity: showCities ? '1 ' : '0', visibility: showCities ? 'visible' : 'hidden', cursor: 'pointer', height: "150px", overflowX: 'scroll' }} >


                {locations.map((location, index) => {
                  return (
                    <span key={index} className={location === activeLocation ? 'text-black d-block pb-3 primary-text' : 'text-black d-block pb-3'} onClick={() => {
                      setActiveLocation(location)
                      setShowCities(!showCities)
                    }}>{location}</span>
                  )
                })}


              </div>

            </div>
            <div className="col-md-2 col-6">
              <div className="feedback-wrapper d-flex align-items-center text-white ">
                <span className="icon me-2">
                  <FiEdit />
                </span>
                <span>Write A Review</span>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="dowload-links d-flex justify-content-end justify-content-md-start">
                <Link href={"https://play.google.com/store/apps/details?id=com.wb.wedcell"}>
                  <Image
                    src={
                      google
                    }
                    style={{
                      cursor: 'pointer'
                    }}
                    width={80}
                    height={24}
                    objectFit="contain"
                  />
                </Link>
                <Link href={"https://apps.apple.com/in/app/wedcell/id1603782330"}>
                  <Image
                    src={
                      appstore
                    }
                    style={{
                      cursor: 'pointer'
                    }}
                    width={80}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottm-nav px-4 py-2 primary-bg d-flex align-items-center justify-content-between position-relative ">
        <Link href={"/"} passHref>
          <div className="logo-container">
            <Image
              src={logo}
              width={220}
              height={57}
              objectFit="contain"
            />
          </div>
        </Link>

        <div className="nav-links-container align-items-center d-none d-md-flex">
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Venues</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            {/* <div className={Styles.dropdown}>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Hotel</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Resort</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Farm House</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Lawn</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Destination Wedding</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Lawn</a>
              </Link>
            </div> */}
            <div className={Styles.dropdown}>
              {CategotiesListVenue.map((item, key) => (
                <Link href="/venue" key={key}>
                  <a className={Styles.dropdown_link}> {item.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Vendors</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            <div className={`${Styles.dropdown} ${Styles.drop_center}`} style={{
              height: "250px",
              overflowY: 'scroll'
            }}>
              {/* <div className="drop-downlinks-container d-flex">
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
              </div> */}
              {CategotiesList.map((item, key) => (
                <Link href="/vendors" key={key}>
                  <a className={Styles.dropdown_link}> {item.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Shop Now</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            <div className={Styles.dropdown}>
              {/* <div className="drop-downlinks-container d-flex">
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/Shop">
                      <a className={Styles.dropdown_link}> Bridal Wears</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
              </div> */}
              <Link href="/Shop">
                <a className={Styles.dropdown_link}> Bridal Wear</a>
              </Link>
              <Link href="/Shop">
                <a className={Styles.dropdown_link}> Groom Wear</a>
              </Link>
            </div>
          </div>
          <div className={`${Styles.nav_link} `}>
            <Link href="/blogs">
              <a className="d-block text-white">Blog</a>
            </Link>
          </div>
          {auth ?

            <div className={`${Styles.nav_link} `}>
              {role.role === "Vendor" ?
                <Link href="/dashboard">
                  <a className="d-block text-white">Account</a>
                </Link>
                : <a href={"#"} onClick={() => {
                  localStorage.removeItem("wedcell")
                  localStorage.removeItem("role")
                  router.push("/")
                  location.reload(true)
                }}>
                  <a className="d-block text-white"> logout</a>
                </a>
              }
            </div>

            :
            <div
              className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
            >
              <span className="d-block">Login</span>
              <span className={`d-block ms-2 ${Styles.chevron}`}>
                <FaChevronDown />
              </span>
              <div className={Styles.dropdown}>
                {/* <Link href="/vendor-login">
                  <a className={Styles.dropdown_link}> Vendor Login </a>
                </Link> */}
                <Link href="/customer-login">
                  <a className={Styles.dropdown_link}> Customer Login </a>
                </Link>
              </div>
            </div>
          }
        </div>

        <div
          className={Styles.search_wrapper}
          onClick={() => setShowSearch(true)}
        >
          <span className="mb-1">
            <FaSearch />
          </span>
        </div>

        <div
          className={`${Styles.hamburger_container} d-grid d-md-none ms-auto`}
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="d-block mx-auto w-max">
            <GiHamburgerMenu />
          </span>
        </div>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      </div>
    </div >
  );
};

export default Header;
