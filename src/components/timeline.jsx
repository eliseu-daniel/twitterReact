import React from "react";
import './timeline.css'

export function TimeLine() {
    return (
        <>
            <main className="central">
                <div>
                    <textarea name="writetw" id="writetw"></textarea>
                    <div className="btnTw">
                        <button type="submit">Tweet</button>
                    </div>
                </div>
                <div className="Feed">
                    <p>Aqui está seus novos tweets</p>
                </div>
                <div>
                    <button>Remover</button>
                </div>
            </main>
        </>
    )
}