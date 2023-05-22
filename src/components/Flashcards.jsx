import Concluido from "./Concluido";
import Logo from "./Logo";
import Perguntas from "./perguntas/Perguntas";
import styled from "styled-components";
import cards from "../cards";
import { useState } from "react";


export default function Flashcards(){

    const [respondidas, setRespondidas] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [msgFinal, setMsgFinal] = useState('');

    return(
        <SCFlashCards>
            <Logo/>
            <Perguntas 
                cards = {cards} 
                respondidas = {respondidas} 
                setRespondidas = {setRespondidas} 
                resultados = {resultados}
                setResultados = {setResultados}
                setMsgFinal = {setMsgFinal}
            />
            <Concluido 
                cards = {cards} 
                respondidas = {respondidas} 
                resultados = {resultados}
                msgFinal = {msgFinal}
            />
        </SCFlashCards>
    );
}

const SCFlashCards = styled.div`
  background-color: #FB6B6B;
  display: ${props => props.telaBoasVindas ? 'none' : 'block'};
`