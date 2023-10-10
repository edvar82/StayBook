import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  const navigate = useNavigate();

  async function handleSearch() {
    const q = document.querySelector('input').value;
    const locationOptions = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
      params: {
        q: q,
        locale: 'pt_BR',
        langid: '1046',
        siteid: '301800003',
      },
      headers: {
        'X-RapidAPI-Key': '3b2679503emsh05c8eb60b7396b2p1a0f05jsn0a8518b4c95e',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      },
    };

    try {
      const locationResponse = await axios.request(locationOptions);
      console.log(locationResponse.data);
      const gaiaId = locationResponse.data.sr[0].gaiaId;
      const propertiesOptions = {
        method: 'POST',
        url: 'https://hotels4.p.rapidapi.com/properties/v2/list',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key':
            '3b2679503emsh05c8eb60b7396b2p1a0f05jsn0a8518b4c95e',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        },
        data: {
          currency: 'BRL',
          eapid: 3,
          locale: 'pt_BR',
          siteId: 301800003,
          destination: {
            regionId: gaiaId,
          },
          checkInDate: {
            day: 28,
            month: 10,
            year: 2023,
          },
          checkOutDate: {
            day: 30,
            month: 10,
            year: 2023,
          },
          rooms: [
            {
              adults: 2,
              children: [{ age: 5 }, { age: 7 }],
            },
          ],
          resultsStartingIndex: 0,
          resultsSize: 200,
          sort: 'PRICE_LOW_TO_HIGH',
          filters: {
            price: { max: 150, min: 100 },
          },
        },
      };
      const propertiesResponse = await axios.request(propertiesOptions);
      const dados = propertiesResponse;
      localStorage.setItem('dados', JSON.stringify(dados));
      const dados2 = localStorage.getItem('dados');
      console.log(dados2);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/home">
          <img style={{ width: '10rem' }} src={logo} alt="logo" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="ms-auto" fullWidth={false}>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
                style={{
                  color: 'black',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '28px',
                  marginRight: '30px',
                }}
                onClick={() => {
                  navigate('/favoritos');
                }}
              >
                <MDBIcon far icon="heart" className="me-2" />
                Favoritos
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="/profile"
                style={{
                  color: 'black',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '28px',
                  marginRight: '30px',
                }}
              >
                <MDBIcon far icon="user" className="me-2" />
                {localStorage.getItem('clienteNome')}
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <MDBInputGroup
              style={{ width: '550px' }}
              noBorder
              textAfter={
                <MDBIcon
                  fas
                  icon="search"
                  style={{
                    color: 'black',
                    fontSize: '1.8rem',
                    cursor: 'pointer',
                    marginTop: '12px',
                  }}
                  onClick={() => {
                    handleSearch();
                  }}
                />
              }
            >
              <input
                className="form-control"
                style={{
                  height: '50px',
                  borderRadius: '10px',
                  border: '1px solid black',
                  lineHeight: '20px',
                  fontSize: '19px',
                  fontWeight: 400,
                }}
                type="text"
                placeholder="Pesquisar por um hotel"
              />
            </MDBInputGroup>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
