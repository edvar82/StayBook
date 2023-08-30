import React from 'react';
import Navbar from '../../components/Navbar';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import logo from '../../assets/img/logo copy.png';
import Header from '../../components/Header';
import './Home.css';

import beiramar from '../../assets/img/beira-mar.jpg';
import cashback from '../../assets/img/cashback.jpg';
import comidaBoa from '../../assets/img/comida-boa.jpg';
import luxo from '../../assets/img/luxo.jpg';
import piscina from '../../assets/img/piscina.jpg';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{ overflowY: 'none', zoom: '0.9' }}>
      <Navbar />
      <MDBCarousel
        showControls
        showIndicators
      >
        <MDBCarouselItem
          className="w-100 d-block active"
          style={{ height: '40rem' }}
          itemId={1}
          src={luxo}
          alt="..."
        >
          <div className="back-opaco">
            <h5>Sinta-se em casa no nosso hotel de luxo</h5>
            <p>
              Nossos quartos espaçosos e elegantes oferecem tudo o que você precisa para
              uma estadia confortável.
            </p>
            <img
              src={logo}
              style={{ width: '6rem', paddingTop: '1rem' }}
            ></img>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          style={{ height: '40rem' }}
          itemId={2}
          src={piscina}
          alt="..."
        >
          <div className="back-opaco">
            <h5>Descanse e relaxe à beira da piscina</h5>
            <p>
              Nossa piscina de borda infinita oferece uma vista deslumbrante do oceano.
            </p>
            <img
              src={logo}
              style={{ width: '6rem', paddingTop: '1rem' }}
            ></img>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          style={{ height: '40rem' }}
          itemId={3}
          src={comidaBoa}
          alt="..."
        >
          <div className="back-opaco">
            <h5>Experimente a nossa culinária de alta classe</h5>
            <p>Experimente a nossa culinária de alta classe</p>
            <img
              src={logo}
              style={{ width: '6rem', paddingTop: '1rem' }}
            ></img>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
      <Header />
      <div
        className="container"
        style={{ marginTop: '70px' }}
      >
        <h1>Ofertas</h1>
        <div
          className="d-flex flex-row"
          style={{
            maxWidth: '1200px',
            marginTop: '15px',
            marginBottom: '70px',
          }}
        >
          <MDBCard
            style={{
              borderRadius: '10px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              marginRight: '15px',
              width: '100%',
            }}
          >
            <MDBRow className="g-0">
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Hotéis à beira mar</MDBCardTitle>
                  <MDBCardText>
                    Se hospede nos hotéis com as melhores vistas que a praia do Francês
                    pode te ofertar!
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="4">
                <MDBCardImage
                  style={{ borderRadius: '10px' }}
                  src={beiramar}
                  alt="..."
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCard>
          {/* Fim de um card */}
          <MDBCard
            style={{
              borderRadius: '10px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              width: '100%',
            }}
          >
            <MDBRow className="g-0">
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>5% CASHBACK!!</MDBCardTitle>
                  <MDBCardText>
                    Aqui na StayBook você pode fazer sua reserva no hotel dos seus sonhos
                    e ainda ganhar um cashback aqui na StayBook. Vai perder essa?!
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="4">
                <MDBCardImage
                  style={{ height: '20rem', borderRadius: '10px' }}
                  src={cashback}
                  alt="..."
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}
