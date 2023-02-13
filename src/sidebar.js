import { useState } from "react";
import Sugestoes from "./sugestoes";

export default function Sidebar() {

    const initialName = "catanacomics"
    const [name, setName] = useState(initialName)

    const initialImage = "assets/img/catanacomics.svg"
    const [img, setImg] = useState(initialImage)

    function changeImg() {

        let newImg = prompt("Insira uma nova imagem: ")
        if (newImg !== null && newImg !== undefined && newImg !== "") {

            setImg(newImg)

        } else {

            setImg(initialImage)

        }

    }

    function changeName() {

        const newName = prompt("Digite um novo nome de usuário abaixo: ")
        if (newName !== null && newName !== undefined && newName !== "") {

            setName(newName)

        } else {

            setName(initialName)

        }

    }

    return (
        <div class="sidebar">
            <div class="usuario">
                <img data-test="profile-image" onClick={changeImg} src={img} alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong data-test="name">{name}</strong>
                        <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
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

}




