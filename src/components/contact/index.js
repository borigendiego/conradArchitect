import React from 'react';
import './contacs.scss';
import SectionLayout from '../common/SectionLayout';

const Contact = () => {
    return (
        <SectionLayout sectionTitle={'CONTACT'} id={'contact'}>
            <div className={'contact-content'}>
                <p className={'contact-item'}>jconradarc@gmail.com</p>
                <p className={'contact-item'}>(949) 233-8625</p>
                <p className={'contact-item'}>1550 S. Coast Hwy. #201<br/> Laguna Beach, CA 926yae51</p>
            </div>
        </SectionLayout>
    )
};

export default Contact;