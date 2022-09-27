// 한 번 한 페이지에 다 담아보겠습니다.
import React, { useState } from "react";
import styled from "styled-components";
import members from "../../data/members.json";
import Switch from "./Switch";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-left: 30px;
  margin-bottom: 50px;
`;



const InfoCotainer = styled.div`
  margin-left: 40px;
`;

const NameArea = styled.div`
  display: flex;
`;

const SocialBtn = styled.button`
  margin-left: 10px;
  width: 100px;
  height: 36px;
  opacity: 80%;

  border: none;
  border-radius: 15px;
  z-index: -1;

  &:hover {
    transition: 0.5s;
    background-color: ${(props) => props.theme.gray};
  }
`;

const Description = styled.p`
  /* 개행 문자(\n) 인식 */
  white-space: pre-wrap;
`;

export default function AboutMembers() {
  const IterationSample = () => {
    // 초기상태 설정
   
    const [members, setMembers] = useState(members);

  };

  const Name = () =>
    members.map((member) => (
      <ProfileContainer>
        <Switch />
        <InfoCotainer>
          <NameArea>
            <h1>{member.name}</h1>
            <SocialBtn>Github</SocialBtn>
            <SocialBtn>Blog</SocialBtn>
          </NameArea>
          <h2>{member.role}</h2>
          <Description>{member.desc}</Description>
        </InfoCotainer>
      </ProfileContainer>
    ));

  return (
    <Container>
      <h1>CoRun의 구성원을 소개합니다</h1>
      <Name />
    </Container>
  );
}