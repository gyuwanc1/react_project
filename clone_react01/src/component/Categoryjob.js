import React from 'react'
import { Link } from 'react-router-dom'
import '../style/jobwatching.scss'

export default function Categoryjob() {
  return (
    <section id='jobtegory'>    
      <h2>카테고리</h2>
      <p>오직 당신만을 위한 혜택과 정보가 한가득</p>
      <ul className='jobtegory_area'>
        <li><Link to="/">👍전체</Link></li>
        <li><Link to="/">👩‍⚕️실무편</Link></li>
        <li><Link to="/">⭐트렌드편</Link></li>
        <li><Link to="/">🚀커리어편</Link></li>
        <li><Link to="/">🔥취업편</Link></li>
        <li><Link to="/">⚡이슈리포트</Link></li>
        <li><Link to="/">💼영업</Link></li>
        <li><Link to="/">🥳마케팅/광고</Link></li>
        <li><Link to="/">🎭경영관리/지원</Link></li>
        <li><Link to="/">🛒생산/품질</Link></li>
        <li><Link to="/">🥼엔지니어링/설계</Link></li>
        <li><Link to="/">📟it</Link></li>
        <li><Link to="/">🎠md</Link></li>
        <li><Link to="/">🎍금융</Link></li>
        <li><Link to="/">🎞연구개발</Link></li>
        <li><Link to="/">🧵구매/물류</Link></li>
        <li><Link to="/">🎨디자인</Link></li>
        <li><Link to="/">🤹‍♀️의료/복지</Link></li>
        <li><Link to="/">🚤건설</Link></li>
        <li><Link to="/">🏔직무찾기</Link></li>
        <li><Link to="/">🚇미디어</Link></li>
        <li><Link to="/">🛴교육/교직원</Link></li>
        <li><Link to="/">🚚공무원</Link></li>
        <li><Link to="/">🏍서비스</Link></li>
      </ul> 
    </section>
  )
}
