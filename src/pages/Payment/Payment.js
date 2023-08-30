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
import React from 'react';

import Navbar from '../../components/Navbar';
import luxo from '../../assets/img/luxo.jpg';

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
                  <MDBBtn size="lg" style={{ backgroundColor: 'black' }}>
                    Usar esta forma de pagamento
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="mb-4">Resumo</h5>
            <MDBCard className="text-black">
              <MDBCardImage src={luxo} position="top" alt="Apple Computer" />
              <MDBCardBody>
                <div className="text-center">
                  <MDBCardTitle>Hotel Praia do Gunga</MDBCardTitle>
                  <p className="text-muted mb-4">De 24/03 até 27/03</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Preço da diaria</span>
                    <span>R$ 220,00</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Qtd de dias</span>
                    <span>4</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span>
                  <span>R$ 880,00</span>
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
