import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.itemSettings}`}>
                <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.itemFriends}>
                {/*                <NavLink to={'/friends'} activeClassName ={s.active}>Friends</NavLink>*/}
                FRIENDS
                <div>
                    <div className={s.itemFriend}>
                        <img
                            src={'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}/>
                        <div>Dima</div>
                    </div>
                    <div className={s.itemFriend}>
                        <img
                            src={'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}/>
                        <div>Timur</div>
                    </div>
                    <div className={s.itemFriend}>
                    <img src={'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}/>
                    <div>Sveta</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar