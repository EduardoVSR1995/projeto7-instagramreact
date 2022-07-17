import objetosUsuarios from "./objetosUsuarios";

function usuarioDaConta(){
    const usuariodaconta = objetosUsuarios.filter((usuarioconta) => usuarioconta.usuario === "catanacomics" );
    return usuariodaconta;
}
export default usuarioDaConta();