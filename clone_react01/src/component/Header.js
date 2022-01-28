
import React from 'react';
import GNB from './GNB';
import UNB from './UNB'; 
import '../style/header.scss'
export default function Header() {
  return (
    <header id="headBox">      
      <GNB />
      <UNB />
    </header>
    ) 
}
