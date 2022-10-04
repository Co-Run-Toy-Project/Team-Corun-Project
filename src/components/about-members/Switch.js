import React, { useState } from "react";
import styled from "styled-components";

// button 말고 input 태그로 수정
const ChangeCircle = styled.button`
    position: relative;
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 50%;

  background-image: url("image/dummyProfile.jpg");
  background-size: 300px;
  /* background-color: ${(props) => props.theme.gray}; */
  left: 0%;
  transition: all 0.6s ease-in-out;

  /* 아 & 안 써서 이동 안했네 ㅅ.....* */
  &.open {
    background-image: url("image/dummyTech.jpg");
    background-size: 350px;
    content: '';
    left: 70%;
  }
`;

const Switch = () => {
  // 초기상태
  const [state, setState] = useState(false);

  const toggle = () => {
    // toggle 누르면 state 바뀜
    setState(!state);
  };

  return (
     <ChangeCircle
      onClick={toggle}
      className={state ? "open" : ""}
    />
  );
};

export default Switch;
