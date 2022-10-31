import React from "react";
import Styles from "../styles/Shop.module.css";
import Link from "next/link";
import Filter from "../Components/Filter";

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
      <div className={Styles.Cards}>
        <div className="card-body">
          <div className="row g-6">
              
          <Filter />
    
            
            <Link href={"/ItemDetails"}>
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

      <div className="card">
        <div className="card-body">
          <div className="row g-6">
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
