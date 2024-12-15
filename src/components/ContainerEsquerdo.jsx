import React from "react";
import './ContainerEsquerdo.css';

export function ContainerEsquerdo({ tweets }) {

    function somaTweet() {
        return 3
    }

    return (
        <>
            <div className="container-esquerdo">
                <p>Tweets {somaTweet()}</p>
                <p>Seguindo</p>
                <p>Seguidores</p>
            </div>
        </>
    )
}