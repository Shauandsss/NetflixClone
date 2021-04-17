/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-3805-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZiSyrRci77umHuATdA0OCHdMx0Bb2mWhVc0ihermsQZehGuoO-ugrnHy8u8EoOh5NoAIDZTs4DzBgQKUJ8_GMvr3y4R.png" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}