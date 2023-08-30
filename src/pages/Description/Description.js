import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

import './description.css';

import { FaStar } from 'react-icons/fa6';

export default function Description() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: '40px' }}
      >
        <h2>Pousada Mar da Luz</h2>
        <div className="content">
          <div
            className="imagem"
            style={{ zoom: '0.8' }}
          >
            <img src="hotel.svg"></img>
            <div className="valores">
              <div className="valueDescription">
                <h6>Valor da Diária:</h6>
                <h6>Custo fixo:</h6>
                <h6>Total:</h6>
              </div>
              <div className="price">
                <h6>R$529,80</h6>
                <h6>R$50,00</h6>
                <h6>R$579,80</h6>
              </div>
            </div>
          </div>
          <div className="descriptionOfHotel">
            <p style={{ textAlign: 'justify', paddingRight: '40px' }}>
              Bem-vindo ao refúgio sereno e encantador que é a Pousada Mar da Luz!
              Localizada em um cenário deslumbrante à beira-mar, nossa pousada é um
              verdadeiro oásis de tranquilidade e beleza natural. Com vistas deslumbrantes
              do oceano que se estendem até onde os olhos podem ver, oferecemos uma
              experiência única de relaxamento e rejuvenescimento. A Pousada Mar da Luz é
              um retiro acolhedor que combina conforto moderno com a autenticidade de uma
              atmosfera beira-mar. Nossos quartos elegantemente decorados são projetados
              para proporcionar uma estadia aconchegante e memorável. Cada detalhe foi
              cuidadosamente considerado para garantir que nossos hóspedes se sintam em
              casa enquanto desfrutam da brisa do mar e dos sons suaves das ondas.
            </p>
            <div className="star">
              <FaStar
                size={40}
                color="yellow"
              />
              <FaStar
                size={40}
                color="yellow"
              />
              <FaStar
                size={40}
                color="yellow"
              />
              <FaStar
                size={40}
                color="yellow"
              />
              <FaStar
                size={40}
                color="yellow"
              />
            </div>
            <div className="buttonAcomodacao">
              <button
                className="touchButton"
                onClick={() => {
                  navigate('/payment');
                }}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
