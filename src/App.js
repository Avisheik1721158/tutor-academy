

// import './App.css';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';

// import { Route, Routes } from 'react-router-dom';

// import NotFound from './components/NotFound/NotFound';

// import About from './components/About/About';


// import Services from './components/Services/Services';
// import Login from './components/Login/Login';




// function App() {
//   return (
//     <div className="App">

//       <Header></Header>
//       <Routes>
//         <Route path='/' element={<Home />} ></Route>
//         <Route path='/home' element={<Home />} ></Route>

//         <Route path='/about' element={<About></About>} ></Route>
//         <Route path='/services' element={<Services></Services>} ></Route>
//         <Route path='/login' element={<Login></Login>} ></Route>
//         <Route path='*' element={<NotFound></NotFound>} ></Route>
//       </Routes>



//     </div>
//   );
// }

// export default App;

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { Route, Routes } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';

import About from './components/About/About';


import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Others from './components/Others/Others';
import Register from './components/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';












function App() {
  // const handleSignout = () => {
  //   signOut(auth)
  // }

  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>

        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/services/' element={<Services></Services>} ></Route>
        <Route path='/others/' element={<Others></Others>} ></Route>
        <Route path='/proceed/:proceedId' element={<RequireAuth><Checkout></Checkout></RequireAuth>} ></Route>


        <Route path='/login' element={<Login></Login>} ></Route>



        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>







    </div >
  );
}

export default App;

