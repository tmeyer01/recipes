import Pages from "./pages/Pages";
import './index.css'
import Category from "./components/Category/index";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      
      <Category />
      <Pages />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
