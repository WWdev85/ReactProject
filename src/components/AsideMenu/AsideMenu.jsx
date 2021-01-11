import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';


import { default as AsideMenuStyles } from './AsideMenu.module.scss';
import { StoreContext } from '../../store/storeProvider';

const style = bemCssModules(AsideMenuStyles);

const AsideMenu = () => {
    const { user }  = useContext(StoreContext);

    const ADMIN_TYPE = 1;

    const adminMenuComponent = user && user.accessLevel === ADMIN_TYPE
    ?<AdminMenu/>
    :null;

    return (
        <section className={style()}>
            <UserMenu isUserLogged={Boolean(user)} />
            {adminMenuComponent}
        </section>
    );
};

export default AsideMenu;