import styled from "styled-components";
import Resposta from "./Resposta";

export default function Respostas(props){
    const {respondidas, setRespondidas, indice, resultados, setResultados, cards, setMsgFinal} = props;

    const possRespostas = [
        {answer: 'Não lembrei', color: '#FF3030'},
        {answer: 'Quase não lembrei', color: '#FF922E'},
        {answer: 'Zap!', color: '#2FBE34'}
    ]
    return(
        <SCRespostas>
            {possRespostas.map(r => <Resposta 
                key = {r.answer}
                possivel = {r} 
                respondidas = {respondidas} 
                setRespondidas = {setRespondidas}
                indice = {indice}
                resultados = {resultados}
                setResultados = {setResultados}
                cards = {cards}
                setMsgFinal = {setMsgFinal}
            />)}
        </SCRespostas>
    );
}

const SCRespostas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    margin-left: -6px;
`