import React from 'react'
import { Link } from 'react-router-dom'
import '../style/membermd_02.scss'

export default function Membermd02() {
  return (
    <section id='membermd02'>
      <p className='nth_01'>02</p>
      <p className='nth_02'>여러직무 비교하며 취준하기</p>
      <p className='nth_03'>90일 무제한 멤버십</p>
      <div className='md_box'>
        <p>90일 무제한 멤버쉽</p>
        <p>40% 할인</p>
        <p>멤버십가 49,800원</p>
        <p><Link to="/">구매하기</Link></p>
      </div>

    </section>
  )
}
