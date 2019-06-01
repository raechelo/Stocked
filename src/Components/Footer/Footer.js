import React from 'react'
import cleaver from '../../assets/cleaver.svg';

export default function Footer() {
  return (
    <footer className="Footer">
      <h5>difficulty:
        <span>
        <img alt="cleaver" src={cleaver} />
        <img alt="cleaver" src={cleaver} />
        <img alt="cleaver" src={cleaver} />
        </span>
      </h5>
    </footer>
  )
}
