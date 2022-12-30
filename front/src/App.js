
import { BrowserRouter, Routes, Route   } from 'react-router-dom';


import Error from './pages/Error';
import Formulario from './pages/Formulario';
import Home from './pages/Home';
import Productos from './pages/Productos';
// import Navbar from './componentes/Navbar';
import Layout from './componentes/Layout';
import HyperX from './pages/HyperX';
import Redragon from './pages/Redragon';
import Razer from './pages/RazerKraken'
import Footer from './componentes/Footer';

function App() {
  return (
    <body className='body'>
     <BrowserRouter>
      <Layout/>
      <Routes>
        
        <Route path='/' element={ <Home/> }/>

        <Route path='/HyperX' element={<HyperX/>}/>
        <Route path='/Redragon' element={<Redragon/>}/>
        <Route path='/Razer' element={<Razer/>}/>
   
        <Route path='/Productos' element={ <Productos/> }/>
        <Route path='/Formulario' element={ <Formulario/> }/>
        <Route path='**' errorelement={<Error/>} />
        
      

        
      </Routes>
     </BrowserRouter>
     <Footer />
     </body>
  );
}

export default App;
