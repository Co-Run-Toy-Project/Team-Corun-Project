import React from 'react';
import styled from "styled-components";

import projectDummy from '../../data/project-dummy.json'

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

        margin-top: 30px;

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

        margin-bottom: 20px;

    }
    .btn {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border-style: none;
        font-weight: 700;
        margin-top: 15px;
        cursor: pointer;
        background-color:  ${(props) => props.theme.bgColor};
        transition: 0.3s;
        border-width: 0px 0px 2px 0px ;
        border-style: solid;
    }
    .btn:hover {
        color: ${(props) => props.theme.gray};
        transition: 0.3s;

    }
    .btn>img {
        width: 20px;
        margin-right: 5px;
    }
    
    a {
        text-decoration: none;
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

                <ul className='info-title'>
                    {/* 39번 이슈 다시 커밋 */}
                    {projectDummy.project.map(el => (
                        <li key={el.id}>
                            <h2>{el.title}</h2>
                            <p className='date'>{el.date}</p>
            
                            <a href={el.page}>
                                <div className='btn-box'>
                                   <button className='btn'>
                                      <img src='/icons/click.png' className='btn-icon'></img>
                                      <p>{el.movelink}</p>
                                   </button>
                                </div>
                            </a>

                            <Carousel>
                                <div className='slide-box'>
                                    <img className='slide-img'></img>
                                </div>
                                <div className='slide-btn-box'>

                                </div>
                            </Carousel>
                        </li>
                    ))}
                    
                </ul>


               
            </div>

        </ProjectInfo>
        </OurProjectArea>
    ) 
}

export default OurProject;