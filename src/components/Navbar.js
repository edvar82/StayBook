import React, { useState } from 'react';
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

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="white"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            style={{ width: '15rem' }}
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
                href="#"
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
                User
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