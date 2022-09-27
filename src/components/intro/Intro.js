import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MainContainer = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  width: 100vw;
  height: 100vh;
`

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8%;
  font-family: "NanumGothic";

  .greeting{
    display: flex;
    flex-direction: column;
    font-size: 3.5rem;
    font-weight: 800; 
  }

  @media screen and (max-width: 724px){
      padding: 20% 10%;
      flex-direction: column;
      justify-content: space-evenly;
      
      .greeting {
        font-size: 2.6rem;
      }
    }
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100%; */

  .loginToGoogle{
    padding: 2.5%;
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
  }

  .loginToGithub{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .googleLogoImg{
    width: 3rem;
  }

  .githubLogoImg{
    width: 4.5rem;
  }
`

const LoginBtn = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 4px;
  width: 350px;
  padding: 5%;
  text-align: center;
  box-shadow: 2px 2px 5px gray;

  &:hover {
  box-shadow: 2px 5px 5px gray;
}
`

const Logined = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: -1rem;
  width: 200px;


  .userName {
    display: flex;
    align-items: center;
  }
  .logoutBtn {
    background-color: ${props => props.theme.gray};
    padding: 0.5rem;
    margin-left: 1rem;
  }
`

function Intro() {
  const [phrase, setPhrase] = useState('안녕하세요!');
  const [userName, setUserName] = useState('unknown');
  // let index = 0;

  // function typing(){
  //   typing1.textContent += phrase[idx++]
  // }
  // useEffect(() => {
    
  // },[])

  return (
    <>
      <MainContainer>
        {/* <Logined>
          <span className='userName'> {userName} </span>
          <div className='logoutBtn'>
            로그아웃
          </div>
        </Logined> */}

        <ContentsContainer>
          <p className='greeting'>
            <span className='typing1'>{phrase}</span>
            <span>저희는 Corun 팀 입니다. </span>
            {/* <span> 오늘 날씨는 따듯하군요!:) </span> */}
          </p>
          <LoginContainer>
            <LoginBtn className='loginToGoogle'>
              <img className='googleLogoImg'src={`${process.env.PUBLIC_URL}/image/googleLogo.png`}></img>
              <span style={{padding: '10px 0'}}>Google계정으로 로그인하기</span>
            </LoginBtn>
            <LoginBtn className='loginToGithub'>
              <img className='githubLogoImg' src={`${process.env.PUBLIC_URL}/image/gitHubLogo.png`}></img>
              <span>Github계정으로 로그인하기</span>
            </LoginBtn>
          </LoginContainer>
        </ContentsContainer>
      </MainContainer>
    </>
  );
}

export default Intro
