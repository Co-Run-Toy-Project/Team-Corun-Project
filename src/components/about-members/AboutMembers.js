// 한 번 한 페이지에 다 담아보겠습니다.
import React from "react";
import styled from "styled-components";

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
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.gray};
`;

const InfoCotainer = styled.div`
  margin-left: 30px;
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

  &:hover {
    transition: 0.5s;
    background-color: ${(props) => props.theme.gray};
  }
`;

export default function AboutMembers() {
  return (
    <Container>
      <h1>CoRun의 구성원을 소개합니다</h1>
      <ProfileContainer>
        <Circle />
        <InfoCotainer>
          <NameArea>
            <h1>이름</h1>
            <SocialBtn>Github</SocialBtn>
            <SocialBtn>Blog</SocialBtn>
          </NameArea>
          <h2>Frontend Engineer</h2>
          <p>
            안녕하세요 소개글입니다. <br />
            깃허브 포폴을 어떻게 해야 예쁘게 꾸밀 수 있을까요? <br />
            소개글 말고도 더 많은 정보를 주면 좋을 것 같은데 어떻게 넣어볼지 고민되네요
          </p>
        </InfoCotainer>
        
      </ProfileContainer>
    </Container>
  );
}