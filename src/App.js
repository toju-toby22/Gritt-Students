import logo from './logo.svg';
import './App.css';
import {  Navigate, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import ArticlePage from './Pages/ArticlePage';
import PodcastPage from './Pages/PodcastPage';
import Article_CategoriesPage from './Pages/Article_CategoriesPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from 'framer-motion';


function App() {
  return (

    <ThemeProvider >
      <div className="App">
      <AnimatePresence mode='wait'>
      <Routes>
      <Route path="/"  element={ <HomePage />} />
      <Route path="Article_CategoriesPage"  element={ <Article_CategoriesPage />} />
      <Route path="ArticlePage/:id"  element={ <ArticlePage />} />
      <Route path="PodcastPage"  element={ <PodcastPage />} />
      </Routes>
      </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
