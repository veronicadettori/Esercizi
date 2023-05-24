import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import BookDetails from './components/BookDetails'
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/book/:asin" element={<BookDetails/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
