import React from 'react';
import Navbar from '../components/Navbar';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import logo from '../assets/img/logo copy.png';
import Header from '../components/Header';
import './Home.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <MDBCarousel
        showControls
        showIndicators
      >
        <MDBCarouselItem
          className="w-100 d-block active"
          style={{ height: '40rem' }}
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
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
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
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
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
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
    </div>
  );
}
