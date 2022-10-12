import React from 'react';

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    width: '100%',
    backgroundColor: '#183027',
    color: 'white'
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <small>© 2022 || Anika Jumana Khanam</small>
        </div>
    );
};

export default Footer;