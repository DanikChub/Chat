import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom'
import {routes, notAuthRoutes} from "../../routes";
import ErrorPage from './ErrorPage/ErrorPage';
import { Context } from '../../index';
import {observer} from "mobx-react-lite";
import { useEffect } from 'react';


const AppRouter = observer(() => {
    const {user} = useContext(Context)
    useEffect(() => {
        console.log(user.isAuth)
    })
    return (
        <Routes>
            {user.isAuth && routes.map(({path, Component}) => 
                
                <Route key={path} path={path} element={Component}/>
            )}

            {notAuthRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}

            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
            
            
        
    );
});

export default AppRouter;