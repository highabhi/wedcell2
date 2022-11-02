import React from "react";
import Styles from "../styles/Shop.module.css";
import Link from "next/link";
import { ButtonGroup } from "react-bootstrap";

function Shop() {
  const property = {
    imageURL:
      "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/05/56431137_3.jpg",
    title: "item name",
    itemDescription: "Bridal Wear Clothing Name",
    button: "Shop",
  };

  return (
    <div>
      <div className="cards">
        <div className="card-body ">
          <div className="row g-3 m">
            <div className={Styles.Filter}>
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

                <div className={Styles.SelectorContainer}>
                  <div className={Styles.selector}>
                    <legend>Price</legend>
                    <select className="form-select">
                      <option value={1}>100 - 999</option>
                      <option value={2}>1000 - 1999</option>
                      <option value={3}>2000 - 2999</option>
                      <option value={4}>3000 - 4500</option>
                    </select>
                  </div>

                  <div className={Styles.selector}>
                    <legend>Occasion</legend>
                    <select className="form-select">
                      <option>Mehandi</option>
                      <option>Casual</option>
                      <option>Festive</option>
                      <option>Reception</option>
                      <option>Wedding</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <Link href={"/ItemDetails"}>
              <div className="col-lg-3 ">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">Image Cap Top</h5>
                    <p className="card-text">{property.title}</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={property.imageURL}
                  srcSet={property.imageURL}
                  alt
                />
                <div className="card-body">
                  <h5 className="card-title">Image Cap Top</h5>
                  <p className="card-text">{property.title}</p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={property.imageURL}
                  srcSet={property.imageURL}
                  alt
                />
                <div className="card-body">
                  <h5 className="card-title">Image Cap Top</h5>
                  <p className="card-text">{property.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row g-6">
            <div className={Styles.FilterFake}></div>
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={property.imageURL}
                  srcSet={property.imageURL}
                  alt
                />
                <div className="card-body">
                  <h5 className="card-title">Image Cap Top</h5>
                  <p className="card-text">{property.title}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={property.imageURL}
                  srcSet={property.imageURL}
                  alt
                />
                <div className="card-body">
                  <h5 className="card-title">Image Cap Top</h5>
                  <p className="card-text">{property.title}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={property.imageURL}
                  srcSet={property.imageURL}
                  alt
                />
                <div className="card-body">
                  <h5 className="card-title">Image Cap Top</h5>
                  <p className="card-text">{property.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
