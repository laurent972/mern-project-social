import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

const Navbar = () => {

    const uid = useContext(UidContext);

    return (
        <nav>
            <div class="nav-container">
                <div class="logo">
                    <NavLink to='/'>
                            <div class="logo">
                                <img src="./img/icon.png" alt="" />
                                <h3>Racoont</h3>
                            </div>
                    </NavLink>
                </div>
           
                {uid ? (<ul>
                    <li></li>
                    <li className='welcome'>
                        <NavLink to='/profil'>
                            <h5>Bienvenue 'valeur dynamique'</h5>
                        </NavLink>
                    </li>
                    <Logout />
                </ul>
                ):(
                    <ul>
                        <li></li>
                        <li>
                            <NavLink to='/profil'>
                                <img src="./img/icons/login.svg" alt="login"/>
                            </NavLink>
                        </li>
                    </ul>
                
              )}
            </div>
        </nav>
    );
};

export default Navbar;