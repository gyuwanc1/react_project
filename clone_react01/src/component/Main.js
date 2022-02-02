import React from 'react';
import { Link } from 'react-router-dom';
import '../style/mainbanner.scss'

export default function Main() {
  return(
    <section id="Main_banner">
      <div className='explain_box'>
        <h2><span>오직,</span>너만의 길을 찾아</h2>
        <p>진로,취준,커리어 고민 OZIC에서 해결해요</p>
        <p>오디오 커리어콘텐츠 플랫폼 OZIC</p>
      </div>
      <div className='md_box'>
        <p>ozic의 모든콘텐츠,모든 멘토를 만나는 방법! 오직패스최대 57%할인</p>
        <p><Link to="">구매하기</Link></p>
      </div>
    </section>
  )
}
