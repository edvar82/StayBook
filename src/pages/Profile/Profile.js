import React from 'react';

import { useState } from 'react';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBBtn,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import Navbar from '../../components/Navbar';

import luxo from '../../assets/img/luxo.jpg';

export default function Profile() {
  const [basicModal, setBasicModal] = useState(false);
  const [nomeTitular, setNomeTitular] = useState('');
  const [NCartao, setNCartao] = useState('');
  const [Validade, setValidade] = useState('');
  const [CVV, setCVV] = useState('');

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <div
      style={{ height: '100vh' }}
      className="scrool"
    >
      <Navbar />
      <section
        style={{
          backgroundColor: '#fff',
          height: '100%',
          width: '100%',
          zoom: '0.8',
          marginTop: '-40px',
        }}
      >
        <MDBContainer className="h-100 py-5">
          <MDBRow className="h-100 align-items-center">
            <MDBCol
              lg="3"
              className="d-flex justify-content-center"
            >
              <MDBCard
                className="mb-4 p-4"
                style={{ marginTop: '20px', height: '80%' }}
              >
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '200px', height: '200px' }}
                    fluid
                  />
                  <MDBCardTitle
                    className="mt-3"
                    style={{ fontSize: '2rem' }}
                  >
                    Usuário
                  </MDBCardTitle>
                  <MDBCardText
                    className="text-muted mb-4"
                    style={{ fontSize: '1.2rem' }}
                  >
                    Amante de tecnologia e colecionador de momentos inesquecíveis
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="9">
              <MDBCard className="mb-4 p-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nome Completo</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Usuario Logado no Sistema
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">usuario@teste.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Telefone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(011) 3234-5678</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Celular</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(011) 98765-4321</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Endereço</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Bairro Moraes, Rua dos Bobos Nº 0, Maceió - AL
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow className="ml-3">
                <div className="d-flex flex-row">
                  <MDBCard
                    className="mb-4 p-4 w-75"
                    style={{ width: '10px' }}
                  >
                    <MDBCardBody>
                      <MDBCardTitle
                        className="mb-4"
                        style={{ fontSize: '1.5rem' }}
                      >
                        Métodos de Pagamento
                      </MDBCardTitle>
                      <div className="mt-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="https://i.imgur.com/qHX7vY1.webp"
                            className="rounded"
                            width="70"
                          />
                          <div className="d-flex flex-column ms-3">
                            <span className="h5 mb-1">Cartão de Crédito</span>
                            <span className="small text-muted">1234 XXXX XXXX 2570</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="https://i.imgur.com/qHX7vY1.webp"
                            className="rounded"
                            width="70"
                          />
                          <div className="d-flex flex-column ms-3">
                            <span className="h5 mb-1">Cartão de Débito</span>
                            <span className="small text-muted">1234 XXXX XXXX 2570</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="ms-auto"
                        onClick={toggleShow}
                        style={{ paddingTop: '10px', cursor: 'pointer' }}
                      >
                        <p className="text-primary">
                          <MDBIcon
                            fas
                            icon="plus-circle"
                            className="text-primary pe-1"
                          />
                          Adicionar método de pagamento
                        </p>
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard
                    className="mb-4 p-4 w-75"
                    style={{ width: '10px', marginLeft: '15px' }}
                  >
                    <MDBCardBody>
                      <MDBCardTitle
                        className="mb-4"
                        style={{ fontSize: '1.5rem' }}
                      >
                        Minhas Hospedagens
                      </MDBCardTitle>
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
                              <MDBCardTitle>Hotel Resort Do Gunga</MDBCardTitle>
                              <MDBCardText>De 24/03/23 à 27/03/23</MDBCardText>
                              <MDBCardText>Status: A ser feita</MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                          <MDBCol md="4">
                            <MDBCardImage
                              style={{ height: '9rem', borderRadius: '10px' }}
                              src={luxo}
                              alt="..."
                              fluid
                            />
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                      <MDBCard
                        style={{
                          borderRadius: '10px',
                          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                          width: '100%',
                          marginTop: '15px',
                        }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol md="8">
                            <MDBCardBody>
                              <MDBCardTitle>Hotel Resort Do Gunga</MDBCardTitle>
                              <MDBCardText>De 24/03/23 à 27/03/23</MDBCardText>
                              <MDBCardText>Status: A ser feita</MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                          <MDBCol md="4">
                            <MDBCardImage
                              style={{ height: '9rem', borderRadius: '10px' }}
                              src={luxo}
                              alt="..."
                              fluid
                            />
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <MDBModal
        show={basicModal}
        setShow={setBasicModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Adicionar novo cartão</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Nome do Titular"
                id="form3"
                type="text"
                size="lg"
                onChange={(e) => {
                  setNomeTitular(e.target.value);
                }}
                value={nomeTitular}
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Nº do cartão"
                    id="form4"
                    type="text"
                    size="lg"
                    onChange={(e) => {
                      setNCartao(e.target.value);
                    }}
                    value={NCartao}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Validade"
                    id="form5"
                    type="text"
                    size="lg"
                    placeholder="MM/YY"
                    onChange={(e) => {
                      setValidade(e.target.value);
                    }}
                    value={Validade}
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                    onChange={(e) => {
                      setCVV(e.target.value);
                    }}
                    value={CVV}
                  />
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="dark"
                block
              >
                Adicionar cartão
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
