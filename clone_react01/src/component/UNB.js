import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UNB() {
  return(
    <ul className='unb'>
      <li><NavLink to="login">로그인</NavLink></li>
      <li><NavLink to="signup">회원가입</NavLink></li>
    </ul>
  )
}
