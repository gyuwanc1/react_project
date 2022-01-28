
import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return(
    <ul className='gnb'>
      <li><h1><NavLink to="/"><span className='blind'>ozic</span></NavLink></h1></li>
      <li><NavLink to="about">about</NavLink></li>
      <li><NavLink to="membership">멤버십 안내</NavLink></li>
      <li><NavLink to="work">직무 둘러보기</NavLink></li>
      <li><NavLink to="lounge">lounge</NavLink></li>
      <li><NavLink to="review">review</NavLink></li>
    </ul>
  )
}
