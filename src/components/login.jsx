import React from "react";

export function Login() {
    return (
        <>
            <div className="Divisor">

                <div className="Esquerdo">
                    <p>Siga o que lhe interessa.</p>
                    <p>Saiba sobre o que as pessoas estão falando.</p>
                    <p>Participe da conversa.</p>
                </div>
                <div className="Direito">
                    <div className="organizar">
                        <div className="login-inputs">
                            <input type="email" name="" id="" placeholder="E-mail" />
                            <input type="password" name="" id="" placeholder="Senha" />
                            <button type="submit">Entrar</button>
                        </div>
                        <div>
                            <img src="imagens/twitter_logo.png" alt="Twitter Logo" />
                            <p className="first-p">Veja o que está acontecendo no mundo agora.</p>
                            <p className="second-p">Participe do Twitter.</p>
                            <div className="Cadastro">
                                <a className="inscreva-se" href="./cadastro">Inscreva-se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

