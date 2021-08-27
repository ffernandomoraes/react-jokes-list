import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

import Jokes from './pages/public/Jokes';

function App() {
  return (
    <ThemeProvider>
      <Jokes />
    </ThemeProvider>
  );
}

export default App;
