import CadaSugestão from './CadaSugestão'
import objetosUsuarios from './objetosUsuarios'

function Sugestao(){
    return (
        <div>
            {objetosUsuarios.map(function (todosStorys, indice) {
                if (indice > 3) {
                    return;
                }
                return (
                    <CadaSugestão fotoPerfil={todosStorys.fotoPerfil} usuario={todosStorys.usuario} seguidor={todosStorys.seguidor} />
                )
            }
            )
            }
        </div>
    )
}
export default Sugestao;