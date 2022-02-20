//otherjob.js

import React from 'react'
import '../style/otherjob.scss'

export default function Otherjob() {
  return (
    <section id='otherbox'>
      <div className='tex_box'>
        <p>다른직무, 다른업계, 다른멘토도<br />
        궁금하다면 멤버십으로!
        </p>
        <p>
        모든직무, 모든멘토, 모든고민<br />
        자유롭게 만나볼 수있어요
        </p>
      </div>
      <ul className='price_box'>
        <li>
          <p>30days</p>
          <p>ozic</p>
          <p>25,000원</p>
        </li>
        <li>
          <p>90days</p>
          <p>ozic</p>
          <p>49,800원</p>
        </li>
        <li>
          <p>180days</p>
          <p>ozic</p>
          <p>72,000원</p>
        </li>
      </ul>

      <ul className='ex_box'>
        <li>
          <p>하고싶은 직무 확실하다면,</p>
          <p>오직 한 달 살기 무제한 멤버십</p>
        </li>
        <li>
          <p>여러직무 들러보며 취준!</p>
          <p>오직과 함께하는 한 계절 무제한 멤버십</p>
        </li>
        <li>
          <p>이번시즌 안에 취뽀하자</p>
          <p>오직 6개월 챌린지 무제한 멤버십</p>
        </li>
      </ul>
      

    </section>
  )
}
