export default function Sugestoes() {

    const sugestoes = [
        { img: "assets/img/bad.vibes.memes.svg", text: "bad.vibes.memes" },
        { img: "assets/img/chibirdart.svg", text: "chibirdart" },
        { img: "assets/img/razoesparaacreditar.svg", text: "razoesparaacreditar" },
        { img: "assets/img/adorable_animals.svg", text: "adorable_animals" },
        { img: "assets/img/smallcutecats.svg", text: "smallcutecats" }
    ]


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao img={s.img} text={s.text} />)}
        </div>
    )
}

function Sugestao(props) {
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