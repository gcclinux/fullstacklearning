import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';

const App = () =>{
   return (
      <div>
        <Header title="Images Galary"/>
        <Search />
      </div>
  )
}

export default App