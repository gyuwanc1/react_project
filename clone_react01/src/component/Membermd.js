import React from 'react'
import { Link } from 'react-router-dom'
import "../style/membermd.scss"

export default function Membermd() {
  return (
    <section id="membermdbox">
      <p className='nth_01'>01</p>
      <p className='nth_02'>하고싶은 직무 확실하다면</p>
      <p className='nth_03'>30일 무제한 멤버십</p>
      <div className='md_box'>
        <p>30일 무제한 멤버쉽</p>
        <p>10% 할인</p>
        <p>멤버십가 25,000원</p>
        <p><Link to="/">구매하기</Link></p>
      </div>
    </section>
  )
}
