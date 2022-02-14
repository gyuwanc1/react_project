import React from 'react'
import { Link } from 'react-router-dom'
import '../style/footer.scss'

export default function Footer() {
  return (
    <footer id="footbox">
      <h2><span className='blind'>ozic</span></h2>
      <ul className='footarea'>

        <li className='foot_01'>
          <ul>
            <li><Link to="/">멤버십구매</Link></li>
            <li><Link to="/">멘토지원</Link></li>
            <li><Link to="/">개인정보관리방침</Link></li>
            <li><Link to="/">사업자정보확인</Link></li>
          </ul>
          <p>주식회사 디3 대표이사: 복성현 사업자등록번호:00-000-0000 통신판매: 제 0000-서울강남-00000</p>
          <p>주소:서울특별시 강남구 역삼로 16길 32, 1,2층</p>
          <p>제휴문의 tel.02-6401-3573 / fax 02-565-1011 / mail.help@ozic.com</p>
        </li>
        <li className='foot_02'>
          <p>고객센터</p>
          <p>카카오톡플러스친구ozic</p>
          <p>평일 11:00am ~ 19:00pm / 점심시간 13:00 ~ 14:00pm</p>
        </li>
      </ul>
    </footer>
  )
}
