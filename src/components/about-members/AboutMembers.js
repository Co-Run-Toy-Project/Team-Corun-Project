// 한 번 한 페이지에 다 담아보겠습니다.
import React, { useState } from "react";
import styled from "styled-components";
import members from "../../data/members.json";
// import Switch from "./Switch";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 50px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const InfoCotainer = styled.div`
  margin-left: 40px;
`;

const NameArea = styled.div`
  display: flex;
      

  a {
    text-decoration: none;
    color: ${(props => props.theme.black)};

    margin-left: 10px;

    text-align: center;
    align-self: center;

    width: 100px;
    height: 36px;
    

    border: none;
    border-radius: 25px;
    background-color: ${(props) => props.theme.gray};

    &:hover {
      transition: 0.5s;
      background-color: ${(props) => props.theme.bgColor};
    }

    &:visited {
      background-color: ${(props) => props.theme.blue};
    }
  }
`;



const Description = styled.div`
  /* 개행 문자(\n) 인식 */
  white-space: pre-wrap;
`;

// button 말고 img 태그로 수정
const ChangeCircle = styled.img`
  position: relative;
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 50%;
  background-size: 300px;
 
  left: 0%;
  transition: all 0.6s ease-in-out;

  &.open {
    background-image: url("image/dummyTech.jpg");
    background-size: 350px;
    content: "";
    left: 70%;
  }`;


  // 프로필 창이 변경되는 함수
  const Switch = (props) => {
    // 초기상태
    const [state, setState] = useState(false);

    // toggle 누르면 state 바뀜
    const toggle = () => {
      setState(!state);
    };
    
    return (
      <ChangeCircle
        onClick={toggle}
        className={state ? "open" : ""}
        src={process.env.PUBLIC_URL+props.profile}
      />

    );
  };


export default function AboutMembers() {
  const InitialSetting = () => {
    // 초기상태 설정
    const [members, setMembers] = useState(members);
  };

  

  return (
    <Container>
      <h1>CoRun의 구성원을 소개합니다</h1>
      {members.map((member) => (
      <ProfileContainer key={member.id}>
        {/* 합치면 같이 움직임 */}
        <Switch profile={member.profile}/>
        <InfoCotainer >
          <NameArea>
            <h1>{member.name}</h1>
            <a target="_blank" href={member.github}>
              Github
            </a>
            <a target="_blank" href={member.blog}>
              Blog
            </a>
          </NameArea>
          <h2>Front Developer</h2>
          <Description>{member.strength}</Description>
        </InfoCotainer>
      </ProfileContainer>))};
    </Container>
  );
}

