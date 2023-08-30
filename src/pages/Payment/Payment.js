import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function PaymentPage() {
  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">Selecione o método de pagamento</h5>
              <img
                src="aqui_vai_o_cartao_q_n_tem"
                alt="Selecione o método de pagamento"
                className="img-fluid"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">Resumo</h5>
              <img
                src="aqui_vai_imagem_de_hotel_bonito.jpg"
                alt="Resumo: "
                className="img-fluid"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PaymentPage;
