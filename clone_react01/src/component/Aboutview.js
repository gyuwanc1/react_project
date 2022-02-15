//about_banner.js

import React from 'react'
import { Link } from 'react-router-dom'
import '../style/aboutview.scss'

export default function Aboutview() {
  return (
    <section id='aboutview_area'>
      <div className='explain_box'>
        <h2><span>오직,</span><br />너만의 길을 찾아</h2>
        <p>이 직무, 저 직무 골고루 듣고 골라보는 곳</p>
        <p>커리어 콘텐츠 플랫폼 오직</p>
        <p><Link to="">동영상 보기</Link></p>
      </div>
      <div className='md_box'>
        <p>ozic의 모든콘텐츠,모든 멘토를 만나는 방법! 오직패스최대 57%할인</p>
        <p><Link to="">구매하기</Link></p>
      </div>
    </section>
  )
}
