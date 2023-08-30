import React from "react";
import Navbar from "../../components/Navbar";
import './style.css'

export default function Favoritos(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <h2>Favoritos</h2>
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <img src="hotel2.jpeg"></img>
                            <div className="text">
                                <strong>Pousada mar da luz</strong>
                                <span>Praia do françês</span>
                            </div>
                            <div className="values">
                                <div className="valueDescricao">
                                    <p>Valor da diária:</p>
                                    <p>Custo fixo:</p>
                                    <p>Total:</p>
                                </div>
                                <div className="value">
                                    <p>R$529,80</p>
                                    <p>R$50,00</p>
                                    <p>R$579,80</p>
                                </div>
                            </div>
                            
                            <button className="buttonEnd">Ver Acomodação</button>
                            
                        </div>
                    </div>
                    <div className="card">
                    <div className="image">
                            <img src="hotel2.jpeg"></img>
                            <div className="text">
                                <strong>Pousada mar da luz</strong>
                                <span>Praia do françês</span>
                            </div>
                            <div className="values">
                                <div className="valueDescricao">
                                    <p>Valor da diária:</p>
                                    <p>Custo fixo:</p>
                                    <p>Total:</p>
                                </div>
                                <div className="value">
                                    <p>R$529,80</p>
                                    <p>R$50,00</p>
                                    <p>R$579,80</p>
                                </div>
                            </div>
                            
                            <button className="buttonEnd">Ver Acomodação</button>
                            
                        </div>
                    </div>
                    <div className="card">
                    <div className="image">
                            <img src="hotel2.jpeg"></img>
                            <div className="text">
                                <strong>Pousada mar da luz</strong>
                                <span>Praia do françês</span>
                            </div>
                            <div className="values">
                                <div className="valueDescricao">
                                    <p>Valor da diária:</p>
                                    <p>Custo fixo:</p>
                                    <p>Total:</p>
                                </div>
                                <div className="value">
                                    <p>R$529,80</p>
                                    <p>R$50,00</p>
                                    <p>R$579,80</p>
                                </div>
                            </div>
                            
                            <button className="buttonEnd">Ver Acomodação</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}