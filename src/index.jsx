import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Outlined = styled.button`
    font-size: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom:0.75rem
    padding-left:6rem
    padding-right:6rem
    border: 2px solid  #0ACCF1;
    outline: none;
    box-shadow: none;
    background-color: white;
    color:  #0ACCF1;
    text-decoration: none;
    transition: border 0.25s, background 0.25s, color 0.25s;
    &:hover {
        cursor: pointer;
        color: #ffffff;
        border-color: #0ACCF1;
        background-color: #0ACCF1;
    }
`;

const Contained = styled.button`
    font-size: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom:0.75rem
    padding-left:6rem
    padding-right:6rem
    border: 0;
    outline: none;
    box-shadow: none;
    background-color: #0ACCF1;
    color: white;
    text-decoration: none;
    transition: border 0.25s, background 0.25s, color 0.25s;
    &:hover {
        cursor: pointer;
        background-color: #0ACCF1;
        color:white;
    }
`;


const Text = styled.button`
    font-size: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom:0.75rem
    padding-left:6rem
    padding-right:6rem
    border: 0;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    color: #0ACCF1;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const AventriButton = ({label, type, variant, onClick, ...props}) => {

    let ButtonStyled = Outlined;
    if(variant === 'contained'){
        ButtonStyled = Contained;
    }
    else 
    if(variant === 'text'){
        ButtonStyled = Text;
    }

    return <ButtonStyled {...props} type={type} onClick={onClick}>{label}</ButtonStyled>;
}

AventriButton.defaultProps = {
    type: 'button',
    variant: 'outlined'
}

AventriButton.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['outlined', 'contained', 'text']),
    onClick: PropTypes.func.isRequired
}

export {AventriButton};