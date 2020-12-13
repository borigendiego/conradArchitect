import React from 'react';
import Crane from './assets/icons/crane-color.svg';

const containerStyles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto',
};

const imageStyle = {
    width: '50%',
    height: '50%',
};

const UnderConstructionPage = () => {
    return (
        <div style={containerStyles}>
            <img alt={'underConstruction'} src={Crane} style={imageStyle} />
            <h1 style={{fontSize: 'clamp(5em, 8vw, 9em)', fontFamily: 'Gotham light'}}>404</h1>
            <h4 style={{fontSize: 'clamp(1.5em, 4vw, 3em)', fontFamily: 'Gotham italic'}}>Site under construction</h4>
        </div>
    )
};

export default UnderConstructionPage