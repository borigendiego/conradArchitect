import React from 'react';
//Styles
import './contacs.scss';
//Components
import SectionLayout from '../common/SectionLayout';

const Contact = () => {
    return (
        <SectionLayout sectionTitle={'CONTACT'} sectionId={'CONTACT'}>
            <div className={'contact-content'}>
                <p className={'contact-item'}>jconradarc@gmail.com</p>
                <p className={'contact-item'}>(949) 233-8625</p>
                <p className={'contact-item'}>1550 S. Coast Hwy. #201<br/> Laguna Beach, CA 92651</p>
            </div>
        </SectionLayout>
    )
};

export default Contact;