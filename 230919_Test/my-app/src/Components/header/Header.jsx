import React from 'react'
import headerImg from "../../images/weniv-logo.png"
import './Header.css';


export default function Header() {
  return (
    <div>
        <header>
            <h1 className="title">
                <img src={headerImg} alt="weniv" className="img-tit" />
            </h1>
        </header>
    </div>
  )
}
