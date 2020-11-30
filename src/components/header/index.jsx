import React, { useState } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {APIv1} from "../../helper/authorization";

function Header() {
    const history = useHistory();
    const [activeMenu, setActiveMenu] = useState('home');

    const handleClickMenu = (e, { name }) => setActiveMenu(name);


    const logout = () => {
        cookie.remove('publicKey');
        cookie.remove('timestamp');
        checkAuth();
    }

    async function checkAuth() {
        try {
            await axios.get(APIv1('comics', { limit: 5 }));
        } catch (e) {
            history.push('/login');
        }
    }
    return (
        <Menu secondary>
            <Menu.Item
                name="home"
                active={activeMenu === 'home'}
                onClick={handleClickMenu}
            />
            <Menu.Item
                name="comics"
                active={activeMenu === 'comics'}
                onClick={handleClickMenu}
            />
            <Menu.Item
                name="characters"
                active={activeMenu === 'characters'}
                onClick={handleClickMenu}
            />

            <Menu.Menu position="right">
                <Menu.Item>
                    <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={activeMenu === 'logout'}
                    onClick={logout}
                />
            </Menu.Menu>
        </Menu>
    );
}

export default Header;
