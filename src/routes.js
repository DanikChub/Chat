
import ChatPage from './pages/ChatPage/ChatPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './modules/AppRouter/ErrorPage/ErrorPage';


import {  ERRORPAGE_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';


export const routes = [
    {
        path: ERRORPAGE_ROUTE,
        Component: <ErrorPage/>
    },

    {
        path: CHAT_ROUTE + '/:id',
        Component: <ChatPage/>
    },

    


    
]

export const notAuthRoutes = [
    
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>
    },

    {
        path: REGISTRATION_ROUTE,
        Component: <LoginPage/>
    },


    
]