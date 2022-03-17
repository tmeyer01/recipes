import {  useState  } from 'react';
import { FormStyle } from './SearchElements';
import {  FaSearch  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {

  const [input, setInput] = useState(' ');
  const navigate = useNavigate();

  const submitHandler = (event) =>{
    event.preventDefault(); 
    // console.log("bing bong")
    // console.log({input})
    navigate('/searched/' + input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
      <input 
        type='text' 
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {/* <h1>{input}</h1> */}
      </div>
    </FormStyle>
  )
}




export default Search