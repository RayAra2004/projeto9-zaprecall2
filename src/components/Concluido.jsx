import styled from "styled-components";

export default function Concluido(props){
    const {cards, respondidas, resultados, msgFinal} = props;

    return(
        <SCConcluido msgFinal = {msgFinal} data-test="footer">
            <SCMsgFinal >
                {msgFinal}
            </SCMsgFinal>
            <p>{respondidas.length}/{cards.length} CONCLUÍDOS</p>     
            <SCResultados data-test="finish-text">
                {resultados}
            </SCResultados>
        </SCConcluido>
    );
}

const SCConcluido = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 375px;
    height: ${props => props.msgFinal.length > 0 ? '100px' : '70px'};
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    p{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const SCResultados = styled.div`
    img{
        margin-right: 3px;
    }
`

const SCMsgFinal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`