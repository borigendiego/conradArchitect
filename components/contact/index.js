import React from 'react';
import Link from 'next/link';
//Styles
import styles from  './contacs.module.scss';
//Components
import SectionLayout from '../common/SectionLayout';

const Contact = () => {
    return (
        <SectionLayout sectionTitle={'CONTACT'} sectionId={'CONTACT'}>
            <div className={styles.container}>
                <Link href={'mailto:jconradarc@gmail.com'}><p className={`${styles.item} ${styles.link}`}>jconradarc@gmail.com</p></Link>
                <Link href={'tell:(949) 233-8625'}><p className={`${styles.item} ${styles.link}`}>(949) 233-8625</p></Link>
                <p className={styles.item}>1550 S. Coast Hwy. #201<br/> Laguna Beach, CA 92651</p>
            </div>
        </SectionLayout>
    )
};

export default Contact;