import React from 'react';
import './contacs.scss';
import SectionLayout from '../common/SectionLayout';

const Contact = () => {
    return (
        <SectionLayout sectionTitle={'CONTACT'} id={'contact'}>
            <div className={'contact-content'}>
                <p>jconradarc@gmail.com</p>
                <p>949 233-8625</p>
                <p>1550 S. Coast Hwy. #201 Laguna Beach, CA 926yae51</p>
            </div>
        </SectionLayout>
    )
};

export default Contact;