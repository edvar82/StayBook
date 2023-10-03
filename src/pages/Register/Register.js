import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import img from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  async function handleCreateCliente(event) {
    event.preventDefault();

    const formaData = new FormData(event.target);

    const data = Object.fromEntries(formaData);

    try {
      // await axios.post(`http://localhost:3001/cliente`, {
      //   email: data.email,
      //   nome: data.nome,
      //   endereco: data.endereco,
      //   telefone: data.telefone,
      //   cpf: data.cpf,
      //   senha: data.senha,
      // });
      alert(data.cpf);
      // navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar cliente");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <form onSubmit={handleCreateCliente}>
          <img className="pb-4 d-block mx-auto" src={img} alt="logo" />

          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            label="Email"
            style={{ width: "100%", height: "42px" }}
          />

          <MDBInput
            className="mb-4"
            type="text"
            id="nome"
            label="Nome"
            style={{ width: "100%", height: "42px" }}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="cpf"
            label="Cpf"
            style={{ width: "100%", height: "42px" }}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="telefone"
            label="Telefone"
            style={{ width: "100%", height: "42px" }}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="endereco"
            label="Endereço"
            style={{ width: "100%", height: "42px" }}
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="senha"
            label="Senha"
            style={{ width: "100%", height: "42px" }}
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="confirmarSenha"
            label="Confirmar senha"
            style={{ width: "100%", height: "42px" }}
          />
          <MDBBtn
            type="submit"
            className="mb-4 bg-black"
            style={{ width: "100%", height: "48px", fontSize: "16px" }}
            block
          >
            Registrar
          </MDBBtn>
          <div className="text-center">
            <p>
              Já possui uma conta?{" "}
              <a
                href="#"
                className="text-black"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Entre aqui
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
