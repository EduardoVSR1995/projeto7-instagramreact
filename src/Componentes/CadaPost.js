import React from 'react';

function CadaPost(props){
    function colore(cor){
        if(cor.nomeClass === "normal"){
            setIcon('heart');
            return "red" ;

        }
        else{
            setIcon('heart-outline');
            return "normal";
            
        }
    };

    const [nomeClass, setNomeClass] = React.useState("normal");
    const [icon, setIcon] = React.useState('heart-outline');

    return(
        <div className="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoPerfil} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="contadorLikeeudo">
                <img src={props.post} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={icon} class={nomeClass} onClick={() => {setNomeClass(colore({nomeClass}))}} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src="img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default CadaPost;

