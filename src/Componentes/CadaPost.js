import React from 'react';
import objetosUsuarios from './objetosUsuarios';
import usuarioDaConta from './usuarioDaConta';


function CadaPost(props){    
    function colore(cor){
        if(cor.nomeClass === "normal"){
            setCont(0.001);
            setIcon('heart');
            setUsuarioLike(usuarioDaConta[0]);
            return "red" ;


        }
        else{
            setCont(0);
            setIcon('heart-outline');
            setUsuarioLike(objetosUsuarios[5]);
            return "normal";
            
        }
    };

    const [nomeClass, setNomeClass] = React.useState("normal");
    const [icon, setIcon] = React.useState('heart-outline');
    const [cont, setCont] = React.useState(0);
    const [usuarioLike, setUsuarioLike] = React.useState(objetosUsuarios[5]);


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
                    <img src={usuarioLike.fotoPerfil} />
                    <div class="texto">
                        Curtido por <strong>{usuarioLike.usuario}</strong> e <strong>outras {101.523+cont}  pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default CadaPost;

