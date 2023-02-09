export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestão img="assets/img/bad.vibes.memes.svg" text="bad.vibes.memes" />
                <Sugestão img="assets/img/chibirdart.svg" text="chibirdart" />
                <Sugestão img="assets/img/razoesparaacreditar.svg" text="razoesparaacreditar" />
                <Sugestão img="assets/img/adorable_animals.svg" text="adorable_animals" />
                <Sugestão img="assets/img/smallcutecats.svg" text="smallcutecats" />
            </div>

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


function Sugestão(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.text} />
                <div class="texto">
                    <div class="nome">{props.text}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}