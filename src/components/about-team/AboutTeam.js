import styled from "styled-components";
// import click from "./icons/click";


const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : ${(props) => props.theme.bgColor};
    border : 1px solid red;
 
    > h1 {
        font-family : "NanumGothic";
        font-weight : 800;
        font-size : 200px;
        top : 10px;
        left : 3%;
        position : absolute;
        /* left : 50px; */
        color : ${(props) => props.theme.gray};
        /* z-index : 1; */
    }

    > .question {
        /* padding-top : 100px; */
        padding-left : 30px;
        top : 100px;
        left : 3%;
        font-size : 40px;

        font-family : "NanumGothic";
        font-weight : 800;
        /* font-size : 3vw; */

        position : absolute;

        /* z-index : 5; */
    }

    > .quote-left {
        font-family : "NanumGothic";
        font-weight : 800;
        font-size : 200px;

        top : 28%;
        left : 20%;

        position : absolute;

    }

    > .quote-right {
        font-family : "NanumGothic";
        font-weight : 800;
        font-size : 200px;

        top : 50%;
        left : 75%;

        position : absolute;

    }

    > .content {
        /* border : 1px solid red; */
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;


        font-size : 25px;

        font-family : "NanumGothic";
        font-weight : 800;


        padding-top : 20%;
    }
    > .footer {

        padding-top : 20%;
        /* border : 1px solid red; */
        display : flex;
        justify-content : center;
        
        > .moreInformation {
    
            width : 230px;
            display : flex;
            justify-content : center; 
            align-items : center;
    
            border-bottom : 1px solid;
            position : absolute;

            cursor: pointer;

            > .icon-area {
                > img {
                    width : 20px;
                    height : auto;
                }
            }
    
            > .icon-text {
                font-family : 'NanumGothic';
                margin-left : 10px;

                cursor: pointer;
            }
        }

    }
`


// const Footer = styled.div`
//     width : 100%;
//     height : 300px;
// `

const AboutTeam = () => {
    return (
        <>
            <Container>
                <h1>?</h1>
                <div className="question">Corun은 어떤 팀인가요?</div>
                <h1 className="quote-left">"</h1>
                <h1 className="quote-right">"</h1>
                <div className="content">
                    <div className="context1">저희는 부트캠프를 통해 배운 기술을 기반으로</div>
                    <div className="context2">다양한 프로젝트를 시도하는 프론트엔드 팀입니다.</div>
                </div>

                <div className="footer">
                    <div className="moreInformation">
                        <span className="icon-area">
                            <img src={`${process.env.PUBLIC_URL}/icons/click.png`}></img>
                        </span>
                        
                        <span className="icon-text">Corun의 프로젝트 보러가기</span>
                    </div>
                </div>
            </Container>
            {/* <Footer>

            </Footer> */}

        </>
    ) 
}

export default AboutTeam;