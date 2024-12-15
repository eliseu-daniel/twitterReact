import React from "react";
import './insertTweet.css'

export function InsertTweet() {
    return (
        <>
            <main className="central">
                <div>
                    <textarea name="writetw" id="writetw"></textarea>
                    <div className="btnTw">
                        <button type="submit">Tweet</button>
                    </div>
                </div>
            </main>
        </>
    )
}