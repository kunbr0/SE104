import React from 'react';
import {useTranslation} from 'react-i18next';

const TextTranslation = ({textName, kClass}) => {
    const {t} = useTranslation(); 
    return(      
        <span className={kClass}>{t(textName)}</span>
    );
    
}

export default TextTranslation;
