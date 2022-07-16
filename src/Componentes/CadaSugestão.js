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
export default CadaSugestão;