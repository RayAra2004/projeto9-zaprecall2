import styled from "styled-components";
import certo from './../../../assets/icone_certo.png'
import erro from './../../../assets/icone_erro.png'
import quase from './../../../assets/icone_quase.png'
import party from './../../../assets/party.png'
import sad from './../../../assets/sad.png'

const resultadosAtual = [];
function responder(answer, color, respondidas, setRespondidas, indice, resultados, setResultados, cards, setMsgFinal){
    
    resultadosAtual.push(color)
    if(cards.length === respondidas.length + 1){
        //setMsgFinal('Acabou')
        if(resultadosAtual.includes('#FF3030')){
            setMsgFinal((
                <>
                    <div>
                        <img src={sad}/>
                        <span>Putz...</span>
                    </div>
                    <div>
                        <span>
                            Ainda faltam alguns...<br/>Mas não desanime!
                        </span>
                    </div>
                </>
            ))
        }else{
            setMsgFinal((
                <>
                    <div>
                        <img src={party}/>
                        <span>Parabéns!</span>
                    </div>
                    <div>
                        <span>
                            Você não esqueceu de<br/>nenhum flashcard!
                        </span>
                    </div>
                </>
            ))
        }
        
    }
    if(answer === 'Não lembrei'){
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
        setResultados([...resultados, <img data-test='no-icon' src={erro}></img>])
    }else if(answer === 'Quase não lembrei'){
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
        setResultados([...resultados, <img data-test='partial-icon' src={quase}></img>])
    }else{
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
        setResultados([...resultados, <img data-test='zap-icon' src={certo}></img>])
    }
}


function dataTestResposta(c){
    if(c === '#2FBE34'){
        return 'zap-btn'
    }
    if(c === '#FF922E'){
        return 'partial-btn'
    }
    if(c === '#FF3030'){
        return 'no-btn'
    }
}

export default function Resposta(props){
    const {answer, color} = props.possivel;
    const {respondidas, setRespondidas, indice, resultados, setResultados, cards, setMsgFinal} = props;
    let test = dataTestResposta(color);
    return(
        <>
            <SCResposta data-test={test} onClick={() => 
                responder(answer, color, respondidas, setRespondidas, indice, resultados, setResultados, cards, setMsgFinal)} 
                color = {color}>{answer}</SCResposta>
        </>
    );
}

const SCResposta = styled.button`
        background-color: ${props => props.color};
        border: none;
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;       
        text-align: center;

`