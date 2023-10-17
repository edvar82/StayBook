import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Search.css';

import axios from 'axios';

import { MDBIcon } from 'mdb-react-ui-kit';

export default function Search() {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const q = localStorage.getItem('lugar');
    const diaIn = localStorage.getItem('diaIn');
    const mesIn = localStorage.getItem('mesIn');
    const anoIn = localStorage.getItem('anoIn');
    const diaOut = localStorage.getItem('diaOut');
    const mesOut = localStorage.getItem('mesOut');
    const anoOut = localStorage.getItem('anoOut');
    const adultos = localStorage.getItem('adultos');
    const children = localStorage.getItem('children');
    const rooms = localStorage.getItem('rooms');

    const langid = '1046';
    const siteid = '301800003';

    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
      params: {
        q,
        locale: 'pt_BR',
        langid,
        siteid,
      },
      headers: {
        'X-RapidAPI-Key': '2f452bd6edmsh1ae05fc5cb9b667p13e8afjsn1785c2490f98',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      const gaiaId = data.sr[0].gaiaId;
      const options2 = {
        method: 'POST',
        url: 'https://hotels4.p.rapidapi.com/properties/v2/list',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '2f452bd6edmsh1ae05fc5cb9b667p13e8afjsn1785c2490f98',
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
            day: parseInt(diaIn),
            month: parseInt(mesIn),
            year: parseInt(anoIn),
          },
          checkOutDate: {
            day: parseInt(diaOut),
            month: parseInt(mesOut),
            year: parseInt(anoOut),
          },
          rooms: [
            {
              adults: parseInt(adultos),
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
      const response2 = await axios.request(options2);
      const data2 = response2.data;
      console.log(data2);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: '60px' }}
      >
        <h2 style={{ fontSize: '50px' }}>
          <MDBIcon
            fa
            icon="search"
            className="me-2"
            style={{ fontSize: '40px', transform: 'translateY(-4px)' }}
          />
          Resultados da pesquisa
        </h2>

        {hotel.map((val, index) => (
          <div className="cards2">
            <div className="card2">
              <div
                className="image"
                style={{ margin: 'auto', paddingRight: '20px' }}
              >
                <img src="hotel2.jpeg"></img>
                <div className="text">
                  <strong>{val.name}</strong>
                  <span>Praia do françês</span>
                </div>
                <div className="values">
                  <div className="valueDescricao">
                    <p>Valor da diária:</p>
                    <p>Custo fixo:</p>
                    <p>Total:</p>
                  </div>
                  <div className="value">
                    <p>R$X,00</p>
                    <p>R$X,00</p>
                    <p>R$X,80</p>
                  </div>
                </div>

                <button
                  className="buttonEnd"
                  onClick={() => {
                    navigate('/description');
                  }}
                >
                  Ver Acomodação
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="card2">
            <div
              className="image"
              style={{ margin: "auto", paddingRight: "20px" }}
            >
              <img src="hotel2.jpeg"></img>
              <div className="text">
                <strong>Pousada mar da luz</strong>
                <span>Praia do françês</span>
              </div>
              <div className="values">
                <div className="valueDescricao">
                  <p>Valor da diária:</p>
                  <p>Custo fixo:</p>
                  <p>Total:</p>
                </div>
                <div className="value">
                  <p>R$529,80</p>
                  <p>R$50,00</p>
                  <p>R$579,80</p>
                </div>
              </div>

              <button
                className="buttonEnd"
                onClick={() => {
                  navigate("/description");
                }}
              >
                Ver Acomodação
              </button>
            </div>
          </div>
          <div className="card2">
            <div
              className="image"
              style={{ margin: "auto", paddingRight: "20px" }}
            >
              <img src="hotel2.jpeg"></img>
              <div className="text">
                <strong>Pousada mar da luz</strong>
                <span>Praia do françês</span>
              </div>
              <div className="values">
                <div className="valueDescricao">
                  <p>Valor da diária:</p>
                  <p>Custo fixo:</p>
                  <p>Total:</p>
                </div>
                <div className="value">
                  <p>R$529,80</p>
                  <p>R$50,00</p>
                  <p>R$579,80</p>
                </div>
              </div>

              <button
                className="buttonEnd"
                onClick={() => {
                  navigate("/description");
                }}
              >
                Ver Acomodação
              </button>
            </div>
          </div> */}
      </div>
    </>
  );
}
