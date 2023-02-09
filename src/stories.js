export default function Stories() {

    const story = [
        { img: "assets/img/9gag.svg", text: "9gag" },
        { img: "assets/img/meowed.svg", text: "meowed" },
        { img: "assets/img/barked.svg", text: "barked" },
        { img: "assets/img/nathanwpylestrangeplanet.svg", text: "nathanwpylestrangeplanet" },
        { img: "assets/img/wawawicomics.svg", text: "wawawicomics" },
        { img: "assets/img/respondeai.svg", text: "respondeai" },
        { img: "assets/img/filomoderna.svg", text: "filomoderna" },
        { img: "assets/img/memeriagourmet.svg", text: "memeriagourmet" }
    ]

    return (
        <div class="stories">
            {story.map((s) => <Story img={s.img} text={s.text} />)}
        </div>

    )
}


function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.text} />
            </div>
            <div class="usuario">
                {props.text}
            </div>
        </div>

    )
}