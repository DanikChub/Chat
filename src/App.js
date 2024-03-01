import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavPanel from "./modules/NavPanel/NavPanel";
import AppRouter from './modules/AppRouter/AppRouter'
import {Context} from './index'
import { check, getUserById } from "./http/userAPI";

import './App.css'
import { useContext, useEffect } from "react";


function App() {
  const {user} = useContext(Context);

  useEffect(() => {
    
    check().then(data => {
      
      getUserById(data.id).then(data => user.setUser(data)).catch(e => console.log(e))
			user.setIsAuth(true);
    })
  }, [])

  return (
    
      <Router>
        
        <div className="app">
          
          
          <AppRouter/>

        </div>

      </Router>
  );
}

export default App;
