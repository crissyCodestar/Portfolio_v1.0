import React, { Component } from 'react';
import classnames from 'classnames'
import '../Styles/button.css'

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
}

export const Button = ({type, onClick, text, buttonType}) => (
    <button
      type={type}
      onClick={onClick}
      className='btn'

    >
      {text}
    </button>
);

// export * from './Button'
