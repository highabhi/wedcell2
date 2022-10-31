import React, { useState } from "react";
import Styles from "../styles/weddingprofile.module.css";
import Link from "next/link";
import VStyles from "../styles/Vendors.module.css";
import Gallery from "../Components/Gallery";
import Albums from "../Components/Albums";
import Videos from "../Components/Videos";
import { CiLocationOn } from "react-icons/fa";

function WeddingProfile() {
  const property = {
    imageURL:
      "https://i.pinimg.com/originals/fa/f7/4d/faf74dba236b185c5cf255328141e204.jpg",
    bannerImage: "https://collectatics.com/images/background1.png",
  };

  const data = {
    groomName: "Rahul",
    brideName: "Ananya",
    title: "Couples name",
    location: "Delhi",
    date: "10-12-2022",
  };

  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <>
      <div className={Styles.Card}>
        <div className={Styles.CoupleD}>
          <div className={Styles.TextArea}>
            <h5 className="card-title">{data.brideName}</h5>
            <h5 className="card-title">{data.groomName}</h5>
          </div>

          <div className={Styles.Location}>
            <h5 className="card-title">{data.location}</h5>
            <h5 className="card-title">{data.date}</h5>
          </div>
          
          <img className={Styles.Image} src={property.bannerImage} />
        </div>
      </div>

      <div className={Styles.containers}>
        <div className={Styles.container2}>
          <div className={Styles.Cardv}>Photographer</div>

          <div className={Styles.Cardv}>Mehandi</div>

          <div className={Styles.Cardv}>Decorator</div>

          <div className={Styles.Cardv}>Makeup</div>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-md-10">
              <div className="gallery-container pb-5 bg-white box-shadow mb-4">
                <div className="tabs-container d-flex align-items-center">
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "gallery" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "gallery"
                          ? "hsla(0, 70%, 24%, 1)"
                          : "#000",
                    }}
                    onClick={() => setActiveTab("gallery")}
                  >
                    <h5 className="fw-bold">Gallery </h5>
                  </div>
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "albums" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "albums"
                          ? "hsla(0, 70%, 24%, 1)"
                          : "#000",
                    }}
                    onClick={() => setActiveTab("albums")}
                  >
                    <h5 className="fw-bold">Albums </h5>
                  </div>
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "videos" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "videos"
                          ? "hsla(0, 70%, 24%, 1)"
                          : "#000",
                    }}
                    onClick={() => setActiveTab("videos")}
                  >
                    <h5 className="fw-bold">Videos</h5>
                  </div>
                </div>
                <div className="active-comp px-4 mt-4">
                  {activeTab == "gallery" && <Gallery images={[]} />}
                  {activeTab == "albums" && <Albums albums={[]} />}

                  {activeTab == "videos" && <Videos links={[]} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.profilecontainer}>
        <div className="card">
          <div className="card-body ">
            <div className="row g-6">
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
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
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
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingProfile;
