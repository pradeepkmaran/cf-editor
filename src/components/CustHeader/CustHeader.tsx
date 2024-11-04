import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import './CustHeader.css';

const CustHeader: React.FC = () => {
    return (
        <header className="header">
            <h1 className="title">CF-Editor</h1>
            <button className="reset-button" 
                onClick={() => {

            }}>
                <FontAwesomeIcon icon={faRedo} />
            </button>
        </header>
    );
};

export default CustHeader;
