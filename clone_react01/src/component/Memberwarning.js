import React from 'react'
import '../style/memberwarning.scss'

export default function Memberwarning() {
  return (
    <article id='memwar_area'>
      <div className='tex_area'>
        <h2>이용권 결제 유의사항</h2>
        <ul className='contents_area'>
          <li>이용권 첫 구매 시점을 기준으로 30/90/180일 만료시 서비스가 중지됩니다.</li>
          <li>이용권 가격은 부가세와 결제 수수료가 포함된 금액입니다.</li>
          <li>환불은 규정에 따라 진행됩니다.</li>
          <li>문의사항은 플러스친구 '오직' 을 이용해주세요.</li>
        </ul>
      </div>
    </article>
  )
}
