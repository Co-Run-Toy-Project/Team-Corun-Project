import React from 'react';
import styled from "styled-components";


const OurProjectArea = styled.div`
    width : 100vw;
    height: 100vw;
    display: flex;
    flex-flow: column;
    font-family: "NanumGothic";  
    background-color : ${(props) => props.theme.bgColor};
`

const TitleBox = styled.div`
    width : 100vw;
    display: flex;
    padding: 150px 0 150px 0;
    justify-content: center;
    h1 {
        font-size: 3em;
        font-weight: 700;
    }
`

const ProjectInfo = styled.div`
    width : 100vw;
    text-align: center;
    .project-info-title {
        display: flex;
        flex-flow: column;
    }
    h2 {
        color: ${(props) => props.theme.projectTitleGray};
        font-weight: 700;
    }
    .date {
        font-weight: 700;
        color: ${(props) => props.theme.projectDateGray};
        margin: 15px;
    }

    .btn-box {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .btn {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        /* border-width: 0px 0px 1px 0px;
        border-style: solid; */
        border-style: none;
        font-weight: 700;
        margin-top: 15px;
        cursor: pointer;
        background-color:  ${(props) => props.theme.bgColor};
    }
    .btn>img {
        width: 20px;
        margin-right: 5px;
        /* height: 10px; */
    }
    .border-line {
        width: 160px;
        height: 1px;
        margin-top: 5px;
        background-color:  ${(props) => props.theme.black};
    }
`

const Carousel = styled.div`
    margin-top: 10px;
    width : 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    .slide-box {
        width: 1220px;
        height: 420px;
    }
    .slide-img {
        width: 100%;
        padding-top: 400px;
        background-color : ${(props) => props.theme.gray};
    }
    .slide-btn-box {
        width: 50%;
        height: 40px;
        background-color : ${(props) => props.theme.gray};
    }

`


const OurProject = () => {
    return (
        <OurProjectArea>
        <TitleBox>
            <h1>Corun's Project</h1>
        </TitleBox>
        <ProjectInfo>
            <div className='project-info-title'>
                <div className='info-text'>
                   <h2>Shopping mall Clone Coding Project</h2>
                  <p className='date'>22.08.16 ~ 22.08.30</p>
                </div>
                <div className='btn-box'>
                    <button className='btn'>
                        <img src='/icons/click.png' className='btn-icon'></img>
                        <p>배포 사이트 이동하기</p>
                    </button>
                        <div className='border-line'></div>
                </div>
            </div>
            <Carousel>
                <div className='slide-box'>
                    <img className='slide-img'></img>
                </div>
                <div className='slide-btn-box'>

                </div>
            </Carousel>
        </ProjectInfo>
        </OurProjectArea>
    ) 
}

export default OurProject;