import Pages from "./pages/Pages";
import './index.css'
import Category from "./components/Category/index";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav />
      <Search />
      <Category />
      <Pages />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
