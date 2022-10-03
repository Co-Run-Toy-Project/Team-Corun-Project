import React, { useState } from "react";
import styled from "styled-components";

import Switch from "./Switch";

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
    color: ${(props) => props.theme.black};

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
  }
`;

const InfoArea = (member) => {
  
  const [state, setState] = useState(false);

  const handleChangeState = () => {
    setState(!state);
    // console.log(state);
  };

  return (
    <ProfileContainer key={member.id}>
      {/* 합치면 같이 움직임 */}
      <Switch
        state={state}
        profile={member.profile}
        parentCallback={handleChangeState}
      />
      <InfoCotainer>
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
    </ProfileContainer>
  );
};

export default InfoArea;
