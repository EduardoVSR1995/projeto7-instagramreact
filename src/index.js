import ReactDOM from 'react-dom';

function FundoMobile() {
    return (
        <div class="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );

}

function objetosUsuarios(){
    const todosStorys = [
        {
            fotoPerfil: "img/9gag.svg",
            usuario: "9gag",
            seguidor:"Segue você",
            post: "img/dog.svg",            
        }
        ,
        {
            fotoPerfil: "img/meowed.svg",
            usuario: "meowed",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/barked.svg",
            usuario: "barked",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet",
            seguidor:"Segue você",
            post: "img/nathanwpylestrangeplanet.svg",
        }
        ,
        {
            fotoPerfil: "img/wawawicomics.svg",
            usuario: "wawawicomics",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/respondeai.svg",
            usuario: "respondeai",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/filomoderna.svg",
            usuario: "filomoderna",
            seguidor:"Segue você",
            post: "img/gato-telefone.svg",
        }
        ,
        {
            fotoPerfil: "img/memeriagourmet.svg",
            usuario: "memeriagourmet",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/catanacomics.svg",
            usuario: "catanacomics",
            segundoNome:"Catana",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/chibirdart.svg",
            usuario: "chibirdart",
            seguidor:"Segue você",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/razoesparaacreditar.svg",
            usuario: "razoesparaacreditar",
            seguidor:"Novo no Instagran",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/adorable_animals.svg",
            usuario: "adorable_animals",
            seguidor:"Segue você",
            post: "",
        }
    ];
    return(todosStorys);

}

function CadaStorys(props){
    return(
        <div class="story">
            <div class="imagem"> 
                <img src= {props.fotoPerfil} /> 
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}

function Storys() {
    const todosStorys = objetosUsuarios();
    return ( 
    <div class="todos-storys">
        <div class="stories">
            {todosStorys.map((todosStorys)=> <CadaStorys fotoPerfil= {todosStorys.fotoPerfil} usuario={todosStorys.usuario} />)}
        </div>
    <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
    </div>);
}

function CadaPost(props){
    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.fotoPerfil} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div class="conteudo">
            <img src={props.post} />
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
                <img src="img/respondeai.svg" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    );

}

function Posts() {
    const todosStorys = objetosUsuarios().filter(fotoPost => fotoPost.post !== "");
    return (
        <div class="posts">
            {todosStorys.map((todosStorys) => <CadaPost fotoPerfil={todosStorys.fotoPerfil} usuario={todosStorys.usuario} post={todosStorys.post} />)}
        </div>
    );
}

function Usuario(){
    const usuario = objetosUsuarios().filter(fotoPost => fotoPost.usuario === "catanacomics" );
    return(   
    <div class="usuario">
        <img src={usuario[0].fotoPerfil} />
        <div class="texto">
            <strong>{usuario[0].usuario}</strong>
            {usuario[0].segundoNome}
        </div>
    </div>
    );
}

function CadaSugestão(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.fotoPerfil} />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">{props.seguidor}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}

function Sugestao(){
    const todosStorys = objetosUsuarios();
    return(
        <div>
    {todosStorys.map(function(todosStorys, indice ){   
        if (indice >3) {
            return;
        }
        return(
            <CadaSugestão fotoPerfil={todosStorys.fotoPerfil}  usuario= {todosStorys.usuario} seguidor={todosStorys.seguidor} />
            )
})}
</div>

)
}

function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Storys />
                <Posts />
            </div>
            <div class="sidebar">
                <Usuario />
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                   <Sugestao />
                </div>
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>
                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}

function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="img/logo.png" />
                </div>
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div class="root">
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("body"));