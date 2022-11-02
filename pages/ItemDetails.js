import React from "react";
import Styles from "../styles/itempage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "swiper/css";

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
    title: "   gown for women",
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

                        <form className="pickercontainer">
                          <fieldset className="picker">
                            <legend className="h6 fs-16 text-body mb-3">
                              Choose a size
                            </legend>
                            <label for="size-s">
                              <input type="radio" name="sizes" id="size-s" />
                              <span>S</span>
                            </label>
                            <label for="size-m">
                              <input type="radio" name="sizes" id="size-m" />
                              <span>M</span>
                            </label>
                            <label for="size-l">
                              <input type="radio" name="sizes" id="size-l" />
                              <span>L</span>
                            </label>
                            <label for="size-xl">
                              <input type="radio" name="sizes" id="size-xl" />
                              <span>XL</span>
                            </label>
                          </fieldset>

                          <fieldset className="picker">
                            <legend className="h6 fs-16 text-body mb-3">
                              Choose a color
                            </legend>
                            <label for="color-1" className={Styles.green}>
                              <input type="radio" name="colors" id="color-1" />
                              <span>green</span>
                            </label>

                            <label for="color-2" className={Styles.blue}>
                              <input type="radio" name="colors" id="color-2" />
                              <span>green</span>
                            </label>
                            <label for="color-3" className={Styles.maroon}>
                              <input type="radio" name="colors" id="color-3" />
                              <span>red</span>
                            </label>
                            <label for="color-4" className={Styles.lavender}>
                              <input type="radio" name="colors" id="color-4" />
                              <span>marron</span>
                            </label>
                          </fieldset>

                          <div className="row">
                            <div className="col-lg-9 d-flex flex-row pt-2">
                              <div>
                                <div className="form-select-wrapper inputwrapper">
                                  <select className="form-select">
                                    <option value={1} selected>
                                      1
                                    </option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                                {/*/.form-select-wrapper */}
                              </div>
                              <div className="flex-grow-1 mx-1">
                                <button className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1 Button">
                                  add to cart
                                </button>
                              </div>
                            </div>
                            {/* /column */}
                          </div>
                        </form>

                        <div className={Styles.input}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Pincode"
                            aria-label="Enter Your Pincode"
                          />
                          <button
                            className="btn  btn-outline-secondary"
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
