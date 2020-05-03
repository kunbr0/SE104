import React from 'react';
import {useTranslation} from 'react-i18next';

const TextTranslation = ({textName}) => {
    const {t} = useTranslation(); 
    return(      
        <span>{t(textName)}</span>
    );
    
}

export default TextTranslation;
