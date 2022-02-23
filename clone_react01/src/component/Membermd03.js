import React from 'react'
import { Link } from 'react-router-dom'
import '../style/membermd_03.scss'

export default function Membermd03() {
  return (
    <section id='membermdbox03'>
      <p className='nth_01'>03</p>
      <p className='nth_02'>이번시즌 안에 꼭 최합하자!</p>
      <p className='nth_03'>180일 무제한 멤버십</p>
      <div className='md_box'>
        <p>180일 무제한 멤버쉽</p>
        <p>57% 할인</p>
        <p>멤버십가 72,000원</p>
        <p><Link to="/">구매하기</Link></p>
      </div>

    </section>
  )
}
