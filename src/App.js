import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planets from './views/Planets';
import Starships from './views/Starships';
import Error from './views/Error';


function App() {

  return (
    <BrowserRouter>
      <h1>Luke APIwalker</h1>
      <HeaderForm />

      <Routes>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="*" element={<Error />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
