
// import './App.css';
// import { Lifeecycle } from './component/Lifeecycle';
// import { Onewaybinding } from "./component/Onewaybinding";
// import { Example } from './component/AxiosExample'; 
// import { F1 } from './component/F1';


// import { F2 } from "./component/F2";
import { Header } from "./component_for_meesho/Header";
import { Main } from "./component_for_meesho/Main";
import { Footer } from "./component_for_meesho/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Navbar } from "./component_for_meesho/Navbar";
import {HashRouter,Routes,Route} from "react-router-dom"
import { ABOUT, CONTACT, HOME } from "./component_for_meesho/Chunk";




function App(){
  return(
    <>

    <HashRouter>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<HOME/>}/>
        <Route path="/about" element={< ABOUT/>}/>
        <Route path="/contact" element={< CONTACT/>}/>
      </Routes>
    </HashRouter>

   
    <Main/>
    <Footer/>
    {/* <bootstrap/>  */}
    
    
  
    </>
  );
}

export default App;
