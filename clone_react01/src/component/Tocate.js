//tocate.js


import React from 'react';
import { Link } from 'react-router-dom';

export default function Tocate() {
  return (
<ul>
  <li><p>식품생산관리 선배가 답해주는 1문1답</p><Link to="/">듣기</Link></li>
  <li><p>광고기획 선배가 답해주는 1문1답</p><Link to="/">듣기</Link></li>
  <li><p>반도체 선배가 답해주는 1문1답</p><Link to="/">듣기</Link></li>
  <li><p>배터리와 테슬라</p><Link to="/">듣기</Link></li>
  <li><p>이커머스와 오픈마켓</p><Link to="/">듣기</Link></li>
  <li><p>모빌리티와 자동차 전장</p><Link to="/">듣기</Link></li>
  <li><p>바이든 2천조와 미국경제</p><Link to="/">듣기</Link></li>
  <li><p>2030 투자방식 - 조각투자</p><Link to="/">듣기</Link></li>
  <li><p>lg와 sk배터리 분쟁 합의</p><Link to="/">듣기</Link></li>
  <li><p>코인거래소와 코인베이스</p><Link to="/">듣기</Link></li>
</ul>
  );
}
