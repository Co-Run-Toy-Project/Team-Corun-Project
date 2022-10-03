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
  transition: all 0.6s ease-in-out;

  /* 정확히는 infoContainer가 사라지고 그 위에 정보창이 떠야하는데 Z-index 쓰면 되나  */
  &.strength {
    display: none;
  }

  &.role {
    display: block;
  }
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

const InfoArea = (member) => {
  const [state, setState] = useState(false);

  const handleChangeState = () => {
    setState(!state);
  };

  console.log(state);

  return (
    <ProfileContainer key={member.id}>
      <Switch
        state={state}
        profile={member.profile}
        parentCallback={handleChangeState}
      />
      <InfoCotainer className={state ? "strength" : "role"}>
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
