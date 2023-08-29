import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import img from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div style={{ maxWidth: '420px', width: '100%' }}>
        <form>
          <img
            className="pb-4 d-block mx-auto"
            src={img}
            alt="logo"
          />

          <label
            htmlFor="Email"
            className="form-label text-black"
          >
            Email
          </label>
          <MDBInput
            className="mb-4"
            type="email"
            id="Email"
            label="Email"
            style={{ width: '100%', height: '42px' }}
          />
          <label
            htmlFor="Senha"
            className="form-label text-black"
          >
            Senha
          </label>
          <MDBInput
            className="mb-4"
            type="password"
            id="Senha"
            label="Senha"
            style={{ width: '100%', height: '42px' }}
          />
          <MDBBtn
            type="submit"
            className="mb-4 bg-black"
            style={{ width: '100%', height: '48px' }}
            block
            onClick={() => {
              navigate('/home');
            }}
          >
            Login
          </MDBBtn>
          <div className="text-center">
            <p>
              Não tem uma conta?{' '}
              <a
                href="#"
                className="text-black"
                onClick={() => {
                  navigate('/');
                }}
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
