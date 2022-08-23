// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Home from './home';
import Movie from './movie';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from './search';
import Login from './login';
import UpdateUserRating from './updateUserRating';
import UpdateRating from './updateRating';
import AvgRating from './avgRating';
import AddFav from './addFav';
import RemoveFav from './removeFav';
import FavMovie from './favMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:query" element={<Movie />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/userRating/*" element={<UpdateUserRating />} />
          <Route path="/avgRating/:query" element={<AvgRating />} />
          <Route path="/updateRating/*" element={<UpdateRating />} />
          <Route path="/addFav/*" element={<AddFav />} />
          <Route path="/removeFav/*" element={<RemoveFav />} />
          <Route path='/favMovie/:query' element={<FavMovie />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
