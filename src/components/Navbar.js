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
    const q = document.getElementById('search').value;
    const dataAtual = new Date();

    const diaIn = dataAtual.getDate() + 1;
    const mesIn = dataAtual.getMonth() + 1;
    const anoIn = dataAtual.getFullYear();

    const diaOut = dataAtual.getDate() + 2;
    const mesOut = dataAtual.getMonth() + 1;
    const anoOut = dataAtual.getFullYear();
    const adultos = 2;
    const children = 0;
    const rooms = 1;
    localStorage.setItem('lugar', q);
    localStorage.setItem('diaIn', diaIn);
    localStorage.setItem('mesIn', mesIn);
    localStorage.setItem('anoIn', anoIn);
    localStorage.setItem('diaOut', diaOut);
    localStorage.setItem('mesOut', mesOut);
    localStorage.setItem('anoOut', anoOut);
    localStorage.setItem('adultos', adultos);
    localStorage.setItem('children', children);
    localStorage.setItem('rooms', rooms);
    navigate('/search');
  }

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="white"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="/home">
          <img
            style={{ width: '10rem' }}
            src={logo}
            alt="logo"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon
            icon="bars"
            fas
          />
        </MDBNavbarToggler>

        <MDBCollapse
          navbar
          show={showBasic}
        >
          <MDBNavbarNav
            className="ms-auto"
            fullWidth={false}
          >
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
                <MDBIcon
                  far
                  icon="heart"
                  className="me-2"
                />
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
                <MDBIcon
                  far
                  icon="user"
                  className="me-2"
                />
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
                id="search"
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
