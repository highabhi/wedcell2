import React from 'react';
import Styles from '../styles/Shop.module.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';






function Shop() {

        const property = {
            title : 'item name',
            itemDescription: 'Bridal Wear Clothing Name',
            button: 'Shop'
        }

        


    return(
        <div>
            
            <MDBCard className={Styles.firstrow}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                {property.itemDescription}
                </MDBCardText>
                <MDBBtn href='#'>{property.button}</MDBBtn>
            </MDBCardBody>
            </MDBCard>

            <MDBCard className={Styles.firstrow}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>


            <MDBCardBody className={Styles.Cards}>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
            </MDBCard>



        </div>
    )
}

export default Shop;