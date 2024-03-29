import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Loanding from "../../components/Loading/Loanding";
import "./Search.css";

import axios from "axios";

import { MDBIcon } from "mdb-react-ui-kit";

export default function Search() {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function extrairNumeros(valorEmReais) {
    // Usa uma expressão regular para encontrar todos os dígitos e pontos flutuantes
    const numeros = valorEmReais.match(/\d|\./g);
  
    // Se não houver números, retorna vazio
    if (numeros === null) {
      return "";
    }
  
    // Concatena os números encontrados para formar a string final
    return numeros.join("");
  }

  async function getData() {
    setIsLoading(true);
    const q = localStorage.getItem("lugar");
    const diaIn = localStorage.getItem("diaIn");
    const mesIn = localStorage.getItem("mesIn");
    const anoIn = localStorage.getItem("anoIn");
    const diaOut = localStorage.getItem("diaOut");
    const mesOut = localStorage.getItem("mesOut");
    const anoOut = localStorage.getItem("anoOut");
    const adultos = localStorage.getItem("adultos");
    const children = localStorage.getItem("children");
    const rooms = localStorage.getItem("rooms");

    const langid = "1046";
    const siteid = "301800003";

    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v3/search",
      params: {
        q,
        locale: "pt_BR",
        langid,
        siteid,
      },
      headers: {
        "X-RapidAPI-Key": "939919db1bmshef6f81ce1a442d6p16cec8jsna42e092c76ed",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      const gaiaId = data.sr[0].gaiaId;
      console.log(gaiaId);
      const options2 = {
        method: "POST",
        url: "https://hotels4.p.rapidapi.com/properties/v2/list",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "d3a927dc58msh2a358643581b862p1ddb0djsnd4b86e9e2254",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
        data: {
          currency: "BRL",
          eapid: 3,
          locale: "pt_BR",
          siteId: 301800003,
          destination: {
            regionId: gaiaId,
          },
          checkInDate: {
            day: parseInt(diaIn),
            month: parseInt(mesIn),
            year: parseInt(anoIn),
          },
          checkOutDate: {
            day: parseInt(diaOut),
            month: parseInt(mesOut),
            year: parseInt(anoOut),
          },
          rooms: [
            {
              adults: parseInt(adultos),
              children: [{ age: 5 }, { age: 7 }],
            },
          ],
          resultsStartingIndex: 0,
          resultsSize: 200,
          sort: "PRICE_LOW_TO_HIGH",
          filters: {
            price: { max: 150, min: 100 },
          },
        },
      };
      const response2 = await axios.request(options2);
      const data2 = response2.data;
      console.log("data: ", data2);
      if (data2.errors || response2.errors) {
        document.getElementById("erro").innerHTML =
          "Não foi possível encontrar nenhum hotel com essas especificações";
        ("Clique em voltar e tente novamente");
      } else {
        console.log(data2.data.propertySearch.properties);
        setHotel(data2.data.propertySearch.properties);
        console.log('oi:', data2.data.propertySearch.properties[0]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const savePrice = (value) => {
    localStorage.setItem("price", value);
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "50px" }}>
          <MDBIcon
            fa="search"
            className="me-2"
            style={{ fontSize: "40px", transform: "translateY(-4px)" }}
          />
          Resultados da pesquisa
        </h2>

        {isLoading ? (
          <Loanding />
        ) : (
          <div className="cards2" style={{marginRight: '10px'}}>
            {hotel &&
              hotel.map((val, index) => (
                <div className="card2" key={val.id}>
                  <div
                    className="image"
                    style={{ margin: "auto", paddingRight: "20px" }}
                  >
                    <img src={val.propertyImage?.image.url} alt="" />
                    <div className="text">
                      <strong>{val.name}</strong>
                      {val.neighborhood && <span>{val.neighborhood.name}</span>}
                    </div>
                    <div
                      className="values"
                      style={{ margin: "auto", paddingLeft: "40px" }}
                    >
                      <div className="valueDescricao">
                        {/* <p>Valor da diária:</p>
            <p>Custo fixo:</p> */}
                        <p>Total:</p>
                      </div>
                      <div className="value">
                        {/* <p>R$X,00</p> Replace with the actual price data */}
                        {/* <p>R$X,00</p> Replace with the actual cost data */}
                        <p>{val.mapMarker.label}</p>{" "}
                        {/* Replace with the actual total data */}
                      </div>
                    </div>

                    <button
                      className="buttonEnd"
                      onClick={() => {
                        savePrice(extrairNumeros(val.mapMarker.label));
                        navigate(`/description/${val.id}`);
                      }}
                    >
                      Ver Acomodação
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div style={{ fontSize: "20px", marginTop: "40px" }}>
          <h2 id="erro"></h2>
        </div>
      </div>
    </>
  );
}
