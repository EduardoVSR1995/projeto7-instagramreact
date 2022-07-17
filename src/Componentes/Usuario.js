import usuarioDaConta from './usuarioDaConta';

function Usuario(){
    const usuario = usuarioDaConta[0]; 
    console.log(usuario);
    return(   
    <div class="usuario">
        <img src={usuario.fotoPerfil} />
        <div class="texto">
            <strong>{usuario.usuario}</strong>
            {usuario.segundoNome}
        </div>
    </div>
    );
}
export default Usuario;