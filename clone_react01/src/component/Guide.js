import React from 'react';
import { Link } from 'react-router-dom';
import "../style/guide.scss";

export default function Guide() {
  return(
    <ul id="guide_box">
      <li><Link to="/"><span>ozic 이용가이드</span></Link></li>
      <li><Link to="/"><span>ozic 취업가이드</span></Link></li>
    </ul>
  );
}
