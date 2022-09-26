import React, { useState } from "react";
import styled from "styled-components";
import members from "../../data/members.json";

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
    // 여기서 a면 프로필 사진 b면 기술스택으로 할 것임
    <ChangeCircle

      onClick={toggle}
      className={state ? "open" : ""}
    >
      {/* state가 true면 닫히고 false면 열리고 */}
      {/* {state ? "close" : "open"} */}
    </ChangeCircle>
  );
};

export default Switch;
