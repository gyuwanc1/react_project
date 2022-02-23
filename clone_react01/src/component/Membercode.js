import React from 'react'
import '../style/membercode.scss'

export default function Membercode() {
  return (
    <article id='freecode'>
      <form action='#' method='post'>
        <fieldset>
          <legend><span className='blind'>코드영역</span></legend>
          <div className='freecode_area'>
            <label for='fcode'>멤버십 무료 체험 코드</label>
            <input type='text' id='fcode' name='f_code' placeholder='코드번호를 입력해주세요.' value='' />
            <button type='button'>등록</button>
          </div>
        </fieldset>
      </form>
    </article>
  )
}
