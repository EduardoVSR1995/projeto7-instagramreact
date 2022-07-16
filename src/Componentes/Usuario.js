import objetosUsuarios from './objetosUsuarios';

function Usuario(){
    const usuario = objetosUsuarios.filter(fotoPost => fotoPost.usuario === "catanacomics" );
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
export default Usuario;