import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBIcon,
  MDBRadio,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';

// const [cartao, setCartao] = useState([]);

function calcularDiferencaDias(diaIn, mesIn, anoIn, diaOut, mesOut, anoOut) {
  const dataIn = new Date(anoIn, mesIn - 1, diaIn);
  const dataOut = new Date(anoOut, mesOut - 1, diaOut);

  const diferencaEmMilissegundos = dataOut - dataIn;

  const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

  return diferencaEmDias;
}

function formatDateTime(dia, mes, ano, condicao) {
  // Verifique se os parâmetros são válidos
  if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900) {
    return null; // Retorne null se os parâmetros forem inválidos
  }

  // Crie um objeto de data
  const data = new Date(ano, mes - 1, dia);

  if (condicao === 'IN') {
    // Se a condição for 'IN', defina a hora para 14:00 (2:00 PM)
    data.setHours(14, 0, 0, 0);
  } else if (condicao === 'OUT') {
    // Se a condição for 'OUT', defina a hora para 12:00 (12:00 PM)
    data.setHours(12, 0, 0, 0);
  } else {
    return null; // Retorna null se a condição for inválida
  }

  return data;
}

// async function getCartaoFromCliente(clienteId) {
//   const response = await axios.get(
//     `http://localhost:3001/cartao/${clienteId}`
//   );
  
//     console.log(response.data);

//   setCartao(response.data);
// }

// useEffect(() => {
//   const clienteId = localStorage.getItem("clienteId");
//   getCartaoFromCliente(clienteId);
// }, []);



const diaIn = localStorage.getItem("diaIn");
const mesIn = localStorage.getItem("mesIn");
const anoIn = localStorage.getItem("anoIn");
const diaOut = localStorage.getItem("diaOut");
const mesOut = localStorage.getItem("mesOut");
const anoOut = localStorage.getItem("anoOut");
const dias = calcularDiferencaDias(diaIn, mesIn, anoIn, diaOut, mesOut, anoOut);
// const value = parseFloat(localStorage.getItem("value"));
const value = 120.45;
const img = localStorage.getItem("imagem");
const nome = localStorage.getItem("nome");
const dataIn = formatDateTime(diaIn, mesIn, anoIn, 'IN');
const dataOut = formatDateTime(diaOut, mesOut, anoOut, 'OUT');

async function payment(){
  try{
    const response = await axios.post(`http://localhost:3001/cartao/payment`, {
    clientId: localStorage.getItem("clienteId"),
    hotelId: 1, // aqui coloca o id do hotel
    nomeHotel: nome,
    checkIn: dataIn,
    checkOut: dataOut,
    numQuartos: 1,
    valor: value * dias,
    metodoPagamento: "Cartão de Crédito",
    idCartao: 1, // aqui coloca o id do cartão
  });
  if(response.data){
    alert("Pagamento realizado com sucesso");
    window.location.href = "/home";
  }
  } catch {
    console.log("Erro ao realizar pagamento");
  }
}

function PaymentPage() {
  return (
    <div>
      <Navbar />
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="8">
            <h5 className="mb-4">Selecione o método de pagamento</h5>
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex align-items-center">
                  <div>
                    <p className="d-flex flex-column mb-0">
                      <b>1. Cartão</b>
                    </p>
                  </div>
                </div>
                <div className='pt-3'>
                {/* {cartao ? (
                  cartao.map((cartao) => (
                    <div className="d-flex flex-row pb-3">
                    <div className="rounded border border-black border-2 d-flex w-100 p-3 align-items-center">
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio name="radioDebit" id="radioDebit" />
                      </div>
                      <MDBIcon
                        fab
                        icon="cc-mastercard"
                        size="3x"
                        className="text-black pe-3"
                      />
                      <div className="d-flex flex-column">
                        <p className="mb-1 small text-black">
                          Cartão de Débito
                        </p>
                        <h6 className="mb-0 text-black">{cartao.numero}</h6>
                      </div>
                    </div>
                  </div>
                  ))
                ) : (
                  <div>Nenhum cartão</div>
                )} */}
                </div>
                <div className="pt-3">
                  <div className="d-flex flex-row pb-3">
                    <div className="rounded border border-black border-2 d-flex w-100 p-3 align-items-center">
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio name="radioDebit" id="radioDebit" />
                      </div>
                      <MDBIcon
                        fab
                        icon="cc-visa"
                        size="3x"
                        className="text-black pe-3"
                      />
                      <div className="d-flex flex-column">
                        <p className="mb-1 small text-black">
                          Cartão de Débito
                        </p>
                        <h6 className="mb-0 text-black">**** 8880</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-row pb-3">
                    <div className="rounded border border-black border-2 d-flex w-100 p-3 align-items-center">
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio name="radioDebit" id="radioDebit" />
                      </div>
                      <MDBIcon
                        fab
                        icon="cc-mastercard"
                        size="3x"
                        className="text-black pe-3"
                      />
                      <div className="d-flex flex-column">
                        <p className="mb-1 small text-black">
                          Cartão de Crédito
                        </p>
                        <h6 className="mb-0 text-black">**** 0345</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <p className="d-flex flex-column mb-0">
                      <b>2. Boleto</b>
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="d-flex flex-row pb-3">
                    <div className="rounded border border-black border-2 d-flex w-100 p-3 align-items-center">
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio name="radioDebit" id="radioDebit" />
                      </div>
                      <MDBIcon
                        fa
                        icon="barcode"
                        size="3x"
                        className="text-black pe-3"
                      />
                      <div className="d-flex flex-column">
                        <p className="mb-1 small text-black">Boleto Bancário</p>
                        <h6 className="mb-0 small text-black">
                          Vencimento em **/**/**
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <p className="d-flex flex-column mb-0">
                      <b>3. Pix</b>
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="d-flex flex-row pb-3">
                    <div className="rounded border border-black border-2 d-flex w-100 p-3 align-items-center">
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio name="radioDebit" id="radioDebit" />
                      </div>
                      <div className="d-flex flex-column">
                        <p className="mb-1  text-black">
                          O código PIX gerado para o pagamento é valido por 30
                          minutos após a finalização do pedido.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-1 pt-3">
                  <a href="#!" className="text-muted">
                    Voltar
                  </a>
                  <MDBBtn size="lg" style={{ backgroundColor: 'black' }} onClick="">
                    Usar esta forma de pagamento
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="mb-4">Resumo</h5>
            <MDBCard className="text-black">
              <MDBCardImage src={img} position="top" alt={nome ? nome : "Nome do hotel"} />
              <MDBCardBody>
                <div className="text-center">
                  <MDBCardTitle>{nome}</MDBCardTitle>
                  <p className="text-muted mb-4">De {diaIn}/{mesIn}/{anoIn} até {diaOut}/{mesOut}/{anoOut}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Preço da diaria</span>
                    <span>R$ {value}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Qtd de dias</span>
                    <span>{dias}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span>
                  <span>R$ {value * dias}</span>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default PaymentPage;
