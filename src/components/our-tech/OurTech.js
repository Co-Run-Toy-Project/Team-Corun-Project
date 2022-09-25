import React, {useState} from "react";
import styled from "styled-components";


const MainBox = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: ${(props) => props.theme.gray};

    //임시로
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );

    //정렬


    .my__tech{
        font-family: "NanumSquareBold"; 
        font-size: 20px;
        text-align: center;
        margin-top: 3rem;
        justify-content: center;
    }

`


//useState로 상태를 세 가지 종류로 만든다 
//  0  > 둘 다 클릭되지 않았을 때
//  1 > 위에 것이 클릭되었을 때
// -1 > 아래 것이 클릭되었을 때
// hover시 백그라운드 컬러 변경 
// 클릭 시 크기 변경 상태로 만든다 


const TabMenu = styled.div`
    width: 75%;
    height: 10rem;
    border-radius: 20px;
    position: relative;
    background-color: ${(props) => props.theme.bgColor};

    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    display: flex;
    padding-top: 2rem;
    justify-content: space-evenly;

    transition-duration: 0.3s;

    cursor: pointer;

    .logo {
        width: 100px;
        height: 100px;
    }

    >img{
        display: none;
    }

    >img:hover{
        background-color: blue;
    }

    &&:hover{
        background-color: ${(props) => props.theme.black};
    }
    
    &.gray{
        background-color: ${(props) => props.theme.black};
        height: 18rem;
        transition-duration: 0.3s;

        >img{
            display: block;
            transition-duration: 1s;
        }
    }

    &.shrink{
        background-color: ${(props) => props.theme.bgColor};
        height: 3rem;
        transition-duration: 0.3s;
        margin-top: 2rem;

        >img{
            display: none;
            transition-duration: 1s;
        }
    }

    &.standard{
        background-color: ${(props) => props.theme.bgColor};
        >img{
            display: block;
            transition-duration: 1s;
        }
    }
`

const TechZone = () => {
    const [isOpen, setIsOpen] = useState(0);

    const OpenTab = (index) => {
        setIsOpen(index)
    }

    return(
        <MainBox>
            <div className="my__tech">My Tech</div>
            <TabMenu onClick = {isOpen === 1 ? () => OpenTab(0) : () => OpenTab(1)} 
                className = {isOpen ===  1 ? "spread gray" :
                                isOpen ===  0 ?  "standard" 
                                    : "shrink"}>
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
            </TabMenu>
            <TabMenu onClick = {isOpen === -1 ? () => OpenTab(0) : () => OpenTab(-1)} className = {isOpen ===  -1 ? "spread gray" :
                isOpen ===  0 ?  "standard" : "shrink"}>
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>        
            </TabMenu> 
        </MainBox>
    )
}


function OurTech(){

    return(        
            <TechZone>
            {/* <TechZone>
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
            </TechZone>
            <TechZone>             
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
            </TechZone> */}
            </TechZone>

    )
} 

export default OurTech;