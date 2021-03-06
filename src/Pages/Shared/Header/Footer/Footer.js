import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='d-flex justify-content-center text-secondary'>
            copyright ¬©programming.heroine.com {year}
        </footer>
    );
};

export default Footer;