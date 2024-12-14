import React from "react";
import './Navbar.css'

export function NavTw() {
    return (
        <>
            <nav>
                <div>
                    <a href="./timeline.jsx">Home</a>
                </div>
                <div>
                    <img src="/imagens/twitter_logo.png" alt="Twitter Logo" />
                </div>
                <div>
                    <a href="./login.jsx">Sair</a>
                </div>
            </nav>
        </>
    )
}