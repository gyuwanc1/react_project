import React from 'react'
import Main from './Main';
import Guide from './Guide';
import Today from './Today';
import Mview from './Mview';
import After from './After';
import Category from './Category';


export default function MainHome() {
  return (
    <>
      <Main />
      <Guide />       
      <Category />
      <Today />
      <Mview />
      <After />
    </>
  )
}
