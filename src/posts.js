import { useState } from "react"

export default function Posts() {

    const post = [
        { img: "assets/img/meowed.svg", text: "meowed", postImg: "assets/img/gato-telefone.svg", likeImg: "assets/img/respondeai.svg", likePage: "respondeai", likes: 950 },
        { img: "assets/img/barked.svg", text: "barked", postImg: "assets/img/dog.svg", likeImg: "assets/img/adorable_animals.svg", likePage: "adorable_animals", likes: 584 },
        { img: "assets/img/meowed.svg", text: "test", postImg: "assets/img/gato-telefone.svg", likeImg: "assets/img/respondeai.svg", likePage: "respondeai", likes: 57 }
    ]

    return (
        <div class="posts">
            {post.map((p) => <Post img={p.img} text={p.text} postImg={p.postImg} likeImg={p.likeImg} likePage={p.likePage} likes={p.likes} />)}
        </div>
    )
}


function Post(props) {

    const [save, setSave] = useState(false)
    const [like, setLike] = useState(false)
    const [contador, setContador] = useState(props.likes)

    const likes = () => {
        setLike(!like)
        if (!like === true) {
            setContador(contador + 1)
        } else {
            setContador(contador - 1)
        }
    }

    return (
        <div data-test="post" class="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.img} alt={props.text} />
                    {props.text}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onClick={setLike} onDoubleClick={setLike} src={props.postImg} alt="gato-telefone" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likes} class={!like ? "normal" : "vermelho"} name={!like ? "heart-outline" : "heart"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => setSave(!save)} name={!save ? "bookmark-outline" : "bookmark"}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeImg} alt="respondeai" />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.likePage}</strong> e <strong>outras {contador} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}