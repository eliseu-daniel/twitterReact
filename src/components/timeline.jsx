import React from "react";
import './timeline.css'

export function TimeLine({ tweets }) {
    return (
        <>
            <main className="central">
                <div className="txtArea">
                    <textarea></textarea>
                    <div className="btnTw">
                        <button className="btnTw" type="submit">Tweet</button>
                    </div>
                </div>
                {
                    tweets.map((tweet) => (
                        < section key={tweet.id} className="Feed" >
                            <div>
                                <p>{tweet.nome}</p>
                            </div>
                            <div >
                                <p>{tweet.publi}</p>
                            </div>
                        </section>)
                    )
                }
            </main >
        </>
    )
}