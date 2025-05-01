import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const Opcoes = styled.ul`
  display: flex;
`

const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
]

/* formatação abaixo retirado daqui:
    https://stackoverflow.com/questions/55776809/seo-url-with-hyphen-nodejs
*/
const format = s => s.toLowerCase()
    .split(/\s|%20/)
    .filter(Boolean)
    .join('-');

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={
                    format(
                        `/${texto.toLowerCase()}`
                    )
                }><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader
