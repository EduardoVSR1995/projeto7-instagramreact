
import Storys from './Storys';
import Posts from './Posts';
import Usuario from './Usuario';
import Sugestao from './Sugestao';

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
export default Corpo;