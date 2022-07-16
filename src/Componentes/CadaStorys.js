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
export default CadaStorys;
