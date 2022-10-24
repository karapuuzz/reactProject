import './App.css';

import {MovieInfo} from "./components/moviesPage/movieInfo/MovieInfo"
import {Container} from "./components/index"

import {
    Route,
    Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path={'/'} element={<Container/>}/>
            <Route path={'movie/:id'} element={<MovieInfo/>}/>
        </Routes>
    </div>

  );
}

export default App;
