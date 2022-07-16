import objetosUsuarios from './objetosUsuarios'
import CadaPost from './CadaPost'

function Posts() {
    const todosStorys = objetosUsuarios.filter(fotoPost => fotoPost.post !== "");
    return (
        <div class="posts">
            {todosStorys.map((todosStorys) => <CadaPost fotoPerfil={todosStorys.fotoPerfil} usuario={todosStorys.usuario} post={todosStorys.post} />)}
        </div>
    );
}
export default Posts;