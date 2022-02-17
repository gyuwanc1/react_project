//Howabout.js
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/howabout.scss'

export default function Howabout() {
  return (
    <section id='how_area'>
      <ul className='how_box'>
        <li>
          <p>어떤기업,어느 직무 쓰세요?
            <br />다들 어떻게 고르셨어요?
          </p>
          <p>한 번쯤 궁금했던 직무들 다 모였다!
            <br /> 듣고, 고르면 달라집니다.
          </p>
          <div className='btn_job'>
            <p><Link to="/">직무둘러보기</Link></p>
            <p><Link to="/">멤버십시작</Link></p>
          </div>
        </li>
        <li></li>
      </ul>
      
    </section>
  )
}
