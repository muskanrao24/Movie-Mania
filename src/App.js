import './App.css';
import './css/Footer.css'
import './css/MovieCard.css'
import './css/MovieDetails.css'
import './css/Search.css'
import './css/Navbar.css'
import './css/ContactUs.css'
import './css/AboutUs.css'
import './css/Gallery.css'


import { MovieDetails } from './components/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Welcome } from './components/Welcome';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { Gallery } from './components/Gallery';


function App() {
    // console.log(process.env.REACT_APP_API_KEY);
    return <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home" element={<><Welcome /><Search /></>}></Route>
                <Route path="/details/:movie_id" element={<MovieDetails />}></Route>
                <Route path="/contactus" element={<ContactUs />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>

            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
}

export default App;