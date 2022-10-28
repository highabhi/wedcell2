import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../Components/CustomButton";
import Styles from "../styles/PopularMakeup.module.css";
import Image from "next/image";

const PopularMehndi = ({ mehndi }) => {
  const [mehandi, setMehandi] = useState();
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
  console.log(mehndi);
  useEffect(() => {
    setMehandi(mehndi);
  }, [mehndi]);

  return (
    <div className={`py-60 bg-grey`}>
      <div className=" px-4">
        <div className="title-container text-center">
          <h2>Popular Mehndi</h2>
          <p className="text-gray">
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
          containerClass={"py-5"}
        >
          {mehndi.map((meh) => {
            return (
              <div className={Styles.cr_container}>
                <div
                  className={`${Styles.cr_img_wrapper} w-100 position-relative`}
                >
                  <Image
                    src={`http://wedcell.cloudjiffy.net/${meh.mainImage}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="cr-body">
                  <div className="cr-info pt-4 px-5 text-center text-gray">
                    {meh.address}
                  </div>
                  <div className={`cr-footer d-flex mt-4 ${Styles.br_top}`}>
                    <div className={Styles.cr_info}>
                      <span className="d-block">{meh.price}</span>
                      <span className="d-block f-bold mt-2 shadowed-text">
                        Starting Price
                      </span>
                    </div>

                    <div className={`${Styles.cr_info} `}>
                      <div className="stars-container d-flex align-items-center mx-auto w-max">
                        <span className="d-block text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                      </div>
                      <span className="d-block small mt-2">(20)</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularMehndi;
