import React from "react";

export function Cadastro()
{
    return (
        <div >
            <form className="formCadastro">
            <div>
                <img src="/public/imagens/twitter_logo.png" alt="Twitter Logo" />
            </div>
            <div>
                <h1>Cadastre-se</h1>
            </div>
                <div className="cadastro-inputs">
                    <input type="name" placeholder="Nome Completo"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <div>
                        <p>
                        Ao inscrever-se, você concorda com os Termos de Serviço e com as Políticas de Privacidade, 
                        incluindo o Uso de Cookies. 
                        Outras pessoas poderão encontrar você pelo e-mail ou número de telefone fornecido · 
                        Opções de Privacidade 
                        </p>
                    </div>
                    <button type="submit">Inscreva-se</button>
                </div>
            </form>
        </div>
    )
}