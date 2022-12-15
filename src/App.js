import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import { GlobalStyles } from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#1cb1cb',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
    <Header />
    <GlobalStyles />
    <Container>
     <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
