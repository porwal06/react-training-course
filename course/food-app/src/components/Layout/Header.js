import React from "react";
import classes from './header.module.css';
//import mainImage from '../../assets/main-header.jpg';

const Header = props => {
    return (
    <React.Fragment>
    <Header className = {classes.Header}>
        <h1>ReactFood App</h1>
        <button>Cart</button>
    </Header>
    <div className={classes['main-image']}>
        {/* <img src = {mainImage} alt='Food a full of table'/> */}
    </div>
    </React.Fragment>
    );

}
export default Header;