import React from "react";
import './timeline.css'

export function TimeLine({ tweet }) {
    return (
        <>
            <section className="Feed">
                <div >
                    <p>{tweet.publi}</p>
                </div>
                <div>
                    <button>Remover</button>
                </div>
            </section>
        </>
    )
}