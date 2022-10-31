import Link from "next/link";
import React from "react";
import Styles from "../styles/itempage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import { Button } from "bootstrap";

function ItemDetails() {
  const property = {
    imageURL:
      "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/05/56431137_3.jpg",
    title: "item name",
    itemDescription: "Bridal Wear Clothing Name",
    button: "Shop",
  };
  const data = {
    imageurl:
      "https://www.fbcover.in/wp-content/uploads/2015/05/indian-wedding.jpg",
  };

  const itemDetails = {
    title: "long gown for women",
    id: "abc123",
    Currency: "₹",
    PriceTag: "20,000",
  };
  return (
    <div>
      <div className={Styles.Container}>
        <div className="card-body">
          <div className="row g-6">
            <div className="col-lg">
              <div className="card">
                <div className={Styles.SwipeC}>
                  <Swiper
                    loop={true}
                    navigation={true}
                    pagination={{
                      type: "progressbar",
                    }}
                    modules={[Navigation, Pagination]}
                    className={Styles.Swiper}
                  >
                    <SwiperSlide className={Styles.Swiper}>
                      <img src={data.imageurl} />
                    </SwiperSlide>
                    <SwiperSlide className={Styles.Swiper}>
                      <img src={data.imageurl} />
                    </SwiperSlide>
                    <SwiperSlide className={Styles.Swiper}>
                      <img src={data.imageurl} />
                    </SwiperSlide>
                    <SwiperSlide className={Styles.Swiper}>
                      <img src={data.imageurl} />
                    </SwiperSlide>
                    <SwiperSlide className={Styles.Swiper}>
                      <img src={data.imageurl} />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className={Styles.DetailsI}>
                  <div className="card g-6">
                    <div className={Styles.decard}>
                      <div className="card-body col-lg-5">
                        <h5 className="card-title">{itemDetails.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {itemDetails.id}
                        </h6>
                        <p className="card-text">
                          {itemDetails.Currency} {itemDetails.PriceTag}
                        </p>
                        <a className={Styles.buttongroup}>
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Buy Now
                          </button>
                          <br />
                          <button
                            type="button"
                            className="btn btn-primary btn-lg pl-5 "
                          >
                            Add to wishlist
                          </button>
                        </a>

                        <div className={Styles.input}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Pincode"
                            aria-label="Enter Your Pincode"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            Check
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
