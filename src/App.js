import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from "./data/theme";

import Intro from './components/intro/Intro';
import AboutTeam from './components/about-team/AboutTeam';
// import AboutMembers from './components/about-members/AboutMembers';
// import Ending from './components/ending/Ending'

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Intro/>
      {/* <AboutTeam/> */}
      {/* <AboutMembers/> */}
      {/* <Ending/> */}
    </ThemeProvider>
  );
}

export default App;
