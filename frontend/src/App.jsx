import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';

const App = () =>{
  const [word, setWord] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

   return (
      <div>
        <Header title="Images Galary"/>
        <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
      </div>
  )
}

export default App