import logo from './../assets/logo.png';
import styled from 'styled-components';

export default function Logo(){
    return(
        <SCLogo>
            <img src={logo} alt='logo do zapRecall' />
            <p>ZapRecall</p>
        </SCLogo>
    );
}

const SCLogo = styled.div`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 52px;
        height: 60px;
        margin-right: 15px;
        margin-top: 50px;
    }

    p{
        margin-top: 50px;
    }
`;