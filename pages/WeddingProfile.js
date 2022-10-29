import React from 'react';
import Styles from '../styles/weddingprofile.module.css';
import Link from 'next/link';



function WeddingProfile() {

    const property = {
        imageURL: 'https://cdn2.thebridalbox.com/wp-content/uploads/2016/05/Contemporary-Indian-Brides-5.jpg',
        title: 'Couples name',
        location: 'Delhi',
    }


    return(
        <>
            


            <div className={Styles.container}>
               <div className="col-sm-4 w-75 rounded ">
                  <div className={Styles.Card}>
                    <img className="card-img-top " src={property.imageURL} srcSet={property.imageURL} alt />
                    </div>
                    </div>
            </div>
                  

            

        <div className={Styles.profilecontainer}>
            <div className="card">
             <div className="card-body">
                <div className="row g-6" >
                    <Link href={"/ItemDetails"}>
                    
                    <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <p className="card-text">{property.location}</p>
                   
                    </div>
                  
                  </div>
                 </div>
                </Link>
               
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <p className="card-text">{property.location}</p>
                    </div>
                    </div>
                </div>
               
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
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
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <p className="card-text">{property.location}</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <p className="card-text">{property.location}</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
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
    )
}


export default WeddingProfile;