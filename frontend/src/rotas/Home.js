import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100VW;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`

function Home() {
  return (
    <AppContainer>      
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
