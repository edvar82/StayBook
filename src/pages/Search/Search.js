import React from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Search.css';

export default function Search() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '60px' }}>
        <h2>Resultado da Pesquisa</h2>
        <div className="cards2">
          <div className="card2">
            <div className="image">
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
                  navigate('/description');
                }}>
                Ver Acomodação
              </button>
            </div>
          </div>
          <div className="card2">
            <div className="image">
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
                  navigate('/description');
                }}>
                Ver Acomodação
              </button>
            </div>
          </div>
          <div className="card2">
            <div className="image">
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
                  navigate('/description');
                }}>
                Ver Acomodação
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
