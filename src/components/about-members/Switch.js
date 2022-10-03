import React, { useState } from "react";
import styled from "styled-components";

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

const Switch = (props) => {
  // 초기상태
  const [state, setState] = useState(false);

  const toggle = () => {
    // toggle 누르면 state 바뀜
    setState(!state);
  };
  // console.log(props);
  return (
    <ChangeCircle
      onClick={toggle}
      className={state ? "open" : ""}
      src={process.env.PUBLIC_URL+props.profile}
    />

  );
};

export default Switch;
