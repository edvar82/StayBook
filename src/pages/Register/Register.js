import React, {useState, useRef} from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import img from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast'


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
        

import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const toast = useRef(null);

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleCreateCliente(event) {
    event.preventDefault();

    if(senha !== confirmarSenha) {
      toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Senhas não coincidem' });
      return;
    }

    try {
      await axios.post(`http://localhost:3001/cliente`, {
        email,
        nome,
        endereco,
        telefone,
        cpf,
        senha,
      });
      await toast.current.show({ severity: 'success', summary: 'Success', detail: 'Cliente cadastrado com sucesso' });
      // navigate("/home");
    } catch (err) {
      console.log(err);
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Erro ao cadastrar cliente' });
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Toast ref={toast} />
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <form onSubmit={handleCreateCliente}>
          <img className="pb-4 d-block mx-auto" src={img} alt="logo" />

          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            label="Email"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <MDBInput
            className="mb-4"
            type="text"
            id="nome"
            label="Nome"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setNome(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="cpf"
            label="Cpf"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setCpf(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="telefone"
            label="Telefone"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="endereco"
            label="Endereço"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="senha"
            label="Senha"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setSenha(e.target.value)}
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="confirmarSenha"
            label="Confirmar senha"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setConfirmarSenha(e.target.value)}
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
