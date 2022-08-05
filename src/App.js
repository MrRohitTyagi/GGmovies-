import './Global.css';
import Movie from './components/Movie';
import Banner from './components/Banner';
import MovieLandingPage from './components/MovieLandingPage';
import media from './media/my1.png'
import Serial from './components/Serial';
import SerialDetails from './components/SerialDetails';
import AllMightySearch from './components/AllMightySearch'

import React, { useState, createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let Data = createContext() 
let receivedID = createContext()

function App() {


  const [ReceivedData, setReceivedData] = useState([]);
  const [ID, setID] = useState();
  return (
    
    <>
  
      <div className="App" style={{ backgroundImage: `url(${media})` }}>

          <receivedID.Provider value={{ ID, setID }}>

            <Data.Provider value={{ ReceivedData, setReceivedData }}>
              <BrowserRouter forceRefresh >
                <Routes>


                  <Route key={1} path='/' element={<><Banner />  <Movie  /> </>} />
                  <Route key={Math.random()*10} path='/moviewatch' element={<> <Banner />< MovieLandingPage /> </>} />
                  <Route key={Math.random()*10} path='/AllSerial' element={<> <Banner />< Serial /> </>} />
                  <Route key={Math.random()*10} path='/AllMightysearch' element={<> <Banner />< AllMightySearch /> </>} />
                  <Route key={Math.random()*10} path='/Serial-details-page' element={<> <Banner />< SerialDetails /> </>} />



                </Routes>
              </BrowserRouter>
            </Data.Provider>
          </receivedID.Provider>
      </div>
    </>
  );
}

export default App;
export { Data, receivedID }
