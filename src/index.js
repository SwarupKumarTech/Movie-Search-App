import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewDetails from './ViewDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter >
    <div className='container-fluid mt-3'>
      <div className='row justify-content-center align-items-center" style={{ minHeight: "100vh" }}'>
        <div className='col-10 col-md-8 text-center'>
        <h1 >🎬MovieFinder</h1>
        <p className='fw-bold'>Search & Explore movies from Telugu, Hindi, Tamil, and English Movies Online Free</p>
      </div>
      </div>
    </div>
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
    <div className='container-fluid p-0' style={{height: "500px"}}>
       <div className='position-relative w-100 h-100 overflow-hidden'>
        <img src='https://i.ontraport.com/90610.e18bd6bcf53237905174f2b8fe3a736d.PNG' alt='Movie background' className='position-absolute top-0 start-0 w-100 h-100 object-fit-cover '/>
       </div>
    </div>
    <div className='container-fluid mt-2 px-4'>
      <div className='row'>
        <div className='col-12 col-md-12 '>
        <p className='fw-bold fw-semibold text-start text-justify lg-lg'>Discover a vast collection of movies from across the world in one place. Explore detailed information about your favorite Telugu, Hindi, Tamil, and English films, including their storyline, cast, genre, and release year. Whether you’re looking for the latest blockbusters or timeless classics, this platform helps you easily find and learn more about any movie you love.
            Each movie profile offers an immersive overview that captures its essence — from gripping plots and memorable performances to the creative minds behind the scenes. You can uncover insights into the movie’s direction, production, and the stars who bring the story to life. The platform presents every detail in a clear and elegant format, ensuring that your movie discovery journey is both enjoyable and informative.
            Stay connected with cinema across languages and cultures. Whether it’s a regional gem, a pan-Indian phenomenon, or an international masterpiece, every film comes to you with accurate and engaging details. Designed for true movie enthusiasts, this space celebrates storytelling in all its forms — making it easier than ever to explore, compare, and appreciate movies from every corner of the entertainment world.</p>
      </div>
      </div>
    </div>
    <Routes>
      
      <Route path='/view/:imdbID' element={<ViewDetails />} />
    </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
