import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import Navbar from '../../components/Navbar';  

import mastercard from '../../assets/img/mastercard.ico';

export default function Profile() {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <section style={{ backgroundColor: '#fff', height: '100%' }}>
        <MDBContainer className="h-100 py-5">
          <MDBRow className="h-100 align-items-center">
            <MDBCol lg="4" className="d-flex justify-content-center">
              <MDBCard className="mb-4 p-4" style={{ marginTop: '20px', color: 'red', height: '80%' }}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '200px', height: '200px' }}
                    fluid />
                  <MDBCardTitle className="mt-3" style={{ fontSize: '2rem' }}>Usuário Logado</MDBCardTitle>
                  <MDBCardText className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>Amante de tecnologia e colecionador de momentos inesquecíveis</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4 p-4">
              <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nome Completo</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Usuario Logado no Sistema</MDBCardText>
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
                      <MDBCardText className="text-muted">Bairro Moraes, Rua dos Bobos Nº 0, Maceió - AL</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow className='ml-3'>
                <MDBCard className="mb-4 p-4">
                  <MDBCardBody>
                    <MDBCardTitle className="mb-4" style={{ fontSize: '1.5rem' }}>Métodos de Pagamento</MDBCardTitle>
                      <div className="border rounded p-3 mb-3">
                        <div class="d-flex flex-row">
                          <div class="rounded d-flex w-100 p-3 align-items-center">
                            <p class="mb-0">
                              <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                                Office
                            </p>
                            <div class="ms-auto">************1038</div>
                          </div>
                        </div>
                      </div> 
                      <div className="border rounded p-3 mb-3">
                        <div class="d-flex flex-row">
                          <div class="rounded d-flex w-100 p-3 align-items-center">
                            <p className="mb-0">
                              <i className="fas fa-credit-card fa-lg text-dark pe-2"></i> Adicionar método de pagamento
                            </p>
                          </div>
                        </div>
                      </div> 
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 p-4 " style={{ marginLeft: '30px' }}>
                  <MDBCardBody>
                    <MDBCardTitle className="mb-4" style={{ fontSize: '1.5rem' }}>Minhas Hospedagens</MDBCardTitle>
                    <div className="border rounded p-3">
                      {/* Conteúdo do primeiro retângulo */}
                    </div>
                    <div className="border rounded p-3">
                      {/* Conteúdo do segundo retângulo */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}
