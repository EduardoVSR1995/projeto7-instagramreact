import objetosUsuarios from './objetosUsuarios'
import CadaStorys from './CadaStorys'

function Storys() {

    function proximoStoris(){
    
    }
   

    return (
        <div class="todos-storys">
            <div class="stories" >
                {objetosUsuarios.map((todosStorys) => <CadaStorys fotoPerfil={todosStorys.fotoPerfil} usuario={todosStorys.usuario} />)}
            </div>
            <div class="setinha">
                <ion-icon onClick={()=> proximoStoris()} name="chevron-forward-circle"></ion-icon>
            </div>
        </div>);
}
export default Storys;