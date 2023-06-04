import React, { useContext, useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { login, registration } from '../../../http/userAPI';
import { Context } from '../../../index';
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../utils/consts';
import {observer} from 'mobx-react-lite'
import Input from '../../../UI/Input/Input';
import './LoginApp.css'
import Button from '../../../UI/Button/Button';
import { getUserById } from '../../../http/userAPI';

const Login = observer(() => {
    const {user} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const navigate = useNavigate();

    const click = async (e) => {
        e.preventDefault();
        
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, name);
            }

            await getUserById(data.id).then((data) => user.setUser(data))
            user.setIsAuth(true);
            navigate(CHAT_ROUTE + '/0')
        } catch (e) {
            alert(e.response.data.message);
        }
    }


    return (
        <form className='form__app'>
            {isLogin ?
                <div style={{color: '#fff'}}>
                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                </div>
                :
                <div  style={{color: '#fff'}}>
                    
                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
            }
            <form className='form'>
                <Input type='text' placeholder='E-MAIL' setInnerValue={setEmail}/>
                <Input type='text' placeholder='PASSWORD' setInnerValue={setPassword}/>
                {isLogin ? '' :
                    <Input type='text' placeholder='NAME' setInnerValue={setName}/>
                }
                <Button type='submit' onClick={click} className='form__button'>{isLogin? 'Войти' : 'Регистрация'}</Button>
                
                
            </form>
        </form>
        
    );
});

export default Login;