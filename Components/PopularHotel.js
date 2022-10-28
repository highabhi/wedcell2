import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../Components/CustomButton";
import Styles from "../styles/PopularMakeup.module.css";
import Image from "next/image";
import { Gethotels } from "../redux/actions/HomeActions";
import { useDispatch, useSelector } from "react-redux";

const PopularHotel = ({ hotel }) => {
  const dispatch = useDispatch();
  const [hotels, setHotels] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    setHotels(hotel);
  }, [hotel]);
  console.log(hotels);

  return (
    <div className={`py-60 bg-grey`}>
      <div className=" px-4">
        <div className="title-container text-center">
          <h2>Popular Hotel</h2>
          <p className="text-gray">
            A short description for showcase of Popular Make up.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          ssr={true}
          swipeable={true}
          draggable={true}
          arrows={false}
          centerMode={true}
          customButtonGroup={<CustomButton />}
          itemClass={Styles.carousel_item}
          containerClass={"py-5"}
        >
          {
            hotels.map((hot) => {
              
          return <div className={Styles.cr_container}>
            <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
              <Image
                src={`/${hot?.mainImage}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="cr-body">
              <div className="cr-info px-2 py-2 ">
                <h4>{hot?.name}</h4>
              </div>
              <div className={`cr-footer p-3  ${Styles.br_top}`}>
                <div className="price d-flex align-items-center  justify-content-between">
                  <span className="d-block f-bold">Room Price</span>
                  <span className="d-block">{hot?.price}</span>
                </div>

                <div className="hotel-food-info d-flex align-items-center  justify-content-between text-gray">
                  <span>Veg Per Plate</span>
                  <span>{hot?.vegPerPlate}</span>
                </div>
                <div className="hotel-food-info d-flex align-items-center justify-content-between text-gray">
                  <span>Non-Veg Per Plate</span>
                  <span>{hot?.nonVegPerPlate}</span>
                </div>
              </div>
            </div>
          </div>
          })}
        
         
       
        </Carousel>
      </div>
    </div>
  );
};

export default PopularHotel;
