import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from "./data/theme";
import OurTech from './components/our-tech/OurTech';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <OurTech></OurTech>
    </ThemeProvider>
  );
}

export default App;
