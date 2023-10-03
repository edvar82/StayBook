import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import img from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit() {
    const response = await axios.post("http://localhost:3001/cliente/login", {
      email: email,
      senha: senha,
    });

    if (handleSubmit) {
      navigate("/home");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <form>
          <img className="pb-4 d-block mx-auto" src={img} alt="logo" />
          <MDBInput
            className="mb-4"
            type="email"
            id="Email"
            label="Email"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="Senha"
            label="Senha"
            style={{ width: "100%", height: "42px" }}
            onChange={(e) => setSenha(e.target.value)}
          />
          <MDBBtn
            type="submit"
            className="mb-4 bg-black"
            style={{ width: "100%", height: "48px", fontSize: "16px" }}
            block
            onClick={() => handleSubmit()}
          >
            Login
          </MDBBtn>
          <div className="text-center">
            <p>
              Não tem uma conta?{" "}
              <a
                href="#"
                className="text-black"
                onClick={() => {
                  navigate("/");
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
