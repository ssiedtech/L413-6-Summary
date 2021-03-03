import './App.css';
import Slides from '../Slides/Slides';
import Header from '../Header/Header';
import 'react-slideshow-image/dist/styles.css';
import { AppProvider } from '../../context/AppContext';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Header />
        <Slides />
      </AppProvider>
    </div>
  );
}

export default App;
