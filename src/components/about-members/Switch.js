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

// 프로필 창이 변경되는 함수
const Switch = (props) => {
  return (
    <ChangeCircle
      onClick={props.parentCallback}
      className={props.state ? "open" : ""}
      src={process.env.PUBLIC_URL + props.profile}
    />
  );
};

export default Switch;
