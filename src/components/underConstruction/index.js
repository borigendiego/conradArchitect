import React from 'react';
import Crane from '../../assets/icons/crane-color.svg';
import ConstructionIcon from '../../assets/icons/construction-icon.png';
//Style
import './underConstruction.scss'

const UnderConstructionPage = () => {
    return (
        <div className={'uc_container'}>
            <div className={'uc_content_wrapper'}>
                <img alt={'underConstruction'} src={ConstructionIcon} />
                <div className={'text-container'}>
                    <h1>404</h1>
                    <h4>Site under construction</h4>
                    <p>You can reach us here:</p>
                    <p>jconradarc@gmail.com</p>
                </div>
            </div>
        </div>
    )
};

export default UnderConstructionPage