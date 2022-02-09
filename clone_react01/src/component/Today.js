//today.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../style/today.scss';
import Tocate from './Tocate';

export default function Today() {
  return( 
  <div id='today_ozic'>
    <div className='tag_area'>
      <h2>오늘의 오직</h2>
      <p className='f_p'>무료</p>
      <p className='s_p'>새로운 콘텐츠를 만나보세요</p>
    </div>
    <ul className='con_area'>
      <li className='bcg_img'>
        <p className='toozic_01'>식품 생산관리 선배가 답해주는 1문 1답</p>
        <p className='toozic_02'>궁금한 점은 후기에 작성 부탁 드려요</p>
        <p className='oziclistens'><Link to="/">듣기</Link></p>
      </li>
      <li className='bcg_img_02'>
        <Tocate />
      </li>
    </ul>
  </div>
  )
}
