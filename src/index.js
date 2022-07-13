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

function objetosDosStorys(){
    const todosStorys = [
        {
            fotoPerfil: "img/9gag.svg",
            usuario: "9gag",
            post: "img/dog.svg",            
        }
        ,
        {
            fotoPerfil: "img/meowed.svg",
            usuario: "meowed",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/barked.svg",
            usuario: "barked",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet",
            post: "img/nathanwpylestrangeplanet.svg",
        }
        ,
        {
            fotoPerfil: "img/wawawicomics.svg",
            usuario: "wawawicomics",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/respondeai.svg",
            usuario: "respondeai",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/filomoderna.svg",
            usuario: "filomoderna",
            post: "img/gato-telefone.svg",
        }
        ,
        {
            fotoPerfil: "img/memeriagourmet.svg",
            usuario: "memeriagourmet",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/catanacomics.svg",
            usuario: "catanacomics",
            segundoNome:"Catana",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/chibirdart.svg",
            usuario: "chibirdart",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/razoesparaacreditar.svg",
            usuario: "razoesparaacreditar",
            post: "",
        }
        ,
        {
            fotoPerfil: "img/adorable_animals.svg",
            usuario: "adorable_animals",
            post: "",
        }
    ];
    return(todosStorys);
}

function Storys() {
    const todosStorys = objetosDosStorys();
    return ( 
    <div class="stories">
        {todosStorys.map(function(todosStorys){
            return( 
            <div class="story">
                <div class="imagem"> 
                    <img src= {todosStorys.fotoPerfil} /> 
                </div>
                <div class="usuario">
                    {todosStorys.usuario}
                </div>
            </div>)})}
    </div>);
}

function Posts() {
    const todosStorys = objetosDosStorys().filter(fotoPost => fotoPost.post !== "");
    return (
        <div class="posts">
            {todosStorys.map(function (todosStorys) {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={todosStorys.fotoPerfil} />
                                {todosStorys.usuario}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>
                        <div class="conteudo">
                            <img src={todosStorys.post} />
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
            })}
        </div>
    );
}

function Usuario(){
    const usuario = objetosDosStorys().filter(fotoPost => fotoPost.usuario === "catanacomics" );
    console.log(usuario[0].segundoNome);
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
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="img/bad.vibes.memes.svg" />
                            <div class="texto">
                                <div class="nome">bad.vibes.memes</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="img/chibirdart.svg" />
                            <div class="texto">
                                <div class="nome">chibirdart</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="img/razoesparaacreditar.svg" />
                            <div class="texto">
                                <div class="nome">razoesparaacreditar</div>
                                <div class="razao">Novo no Instagram</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="img/adorable_animals.svg" />
                            <div class="texto">
                                <div class="nome">adorable_animals</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    <div class="sugestao">
                        <div class="usuario">
                            <img src="img/smallcutecats.svg" />
                            <div class="texto">
                                <div class="nome">smallcutecats</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
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

function Root() {
    return (
        <div class="root">
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

ReactDOM.render(<Root />, document.querySelector("body"));