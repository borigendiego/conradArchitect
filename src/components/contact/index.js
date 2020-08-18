import React from 'react';
import './contacs.scss';
import SectionLayout from '../common/SectionLayout';

const Contact = () => {
    return (
        <SectionLayout sectionTitle={'CONTACT'}>
            <div className={'contact-content'}>
                <p>mail@mail.com</p>
                <p>(000) 123456789</p>
                <p>Test test test test</p>
                <p>Test test test test</p>
            </div>
        </SectionLayout>
    )
};

export default Contact;