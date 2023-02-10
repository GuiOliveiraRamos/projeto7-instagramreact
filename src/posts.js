export default function Posts() {

    const post = [
        { img: "assets/img/meowed.svg", text: "meowed", postImg: "assets/img/gato-telefone.svg", likeImg: "assets/img/respondeai.svg", likePage: "respondeai" },
        { img: "assets/img/barked.svg", text: "barked", postImg: "assets/img/dog.svg", likeImg: "assets/img/adorable_animals.svg", likePage: "adorable_animals" },
        { img: "assets/img/meowed.svg", text: "test", postImg: "assets/img/gato-telefone.svg", likeImg: "assets/img/respondeai.svg", likePage: "respondeai" }
    ]

    return (
        <div class="posts">
            {post.map((p) => <Post img={p.img} text={p.text} postImg={p.postImg} likeImg={p.likeImg} likePage={p.likePage} />)}
        </div>
    )
}


function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img} alt={props.text} />
                    {props.text}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImg} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImg} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.likePage}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}