import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch} from 'react-redux'
import {lightMode, darkMode} from './features/colorSplice'

function App() {
  const dispatch = useDispatch()
  const color = useSelector((state) => state.color)

  return (
    <div style={{ color }} className="App">
      <Nav />
      <button onClick={() => dispatch(lightMode())}>Light Mode</button>
      <button onClick={() => dispatch(darkMode())}>Dark Mode</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
