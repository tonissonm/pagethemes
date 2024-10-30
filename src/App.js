import Page from './components/Page'
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return(
    <ThemeProvider>
      <Page/>
    </ThemeProvider>
  ) 
}
export default App;
