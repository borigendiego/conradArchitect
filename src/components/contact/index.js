import React from 'react';
import './contacs.scss';

const Contact = () => {
    return (
        <>
            <h1 className={'section-title'}>CONTACT</h1>
            <div className={'contact-container'}>
                <div className={'large-section-container contact-black-border'} />
                <div className={'contact-content'}>
                    <p>mail@mail.com</p>
                    <p>(000) 123456789</p>
                    <p>Test test test test</p>
                    <p>Test test test test</p>
                </div>
            </div>
        </>
    )
};

export default Contact;