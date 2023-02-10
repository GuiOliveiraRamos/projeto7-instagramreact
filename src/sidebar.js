import { useState } from "react";
import Sugestoes from "./sugestoes";

export default function Sidebar() {

    const initialName = "catanacomics"
    const [name, setName] = useState(initialName)

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong>{name}</strong>
                        <ion-icon onClick={changeName} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )

    function changeName() {

        const newName = prompt("Digite um novo nome de usuário abaixo: ")
        setName(newName)

    }

}

