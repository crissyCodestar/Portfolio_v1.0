import React, { Component } from 'react';
import classNames from 'classnames';
import styles from '../Styles/button.css';

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  PRIMARY_GRADIENT: 'primary_gradient',
};

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const Button = ({type, onClick, text, colorValue, size}) => (
    <button
      type={type}
      onClick={onClick}
      onClick={onClick}
       className={classNames(
         styles.btn,
         styles[ colorValue || TYPES.PRIMARY ],
         styles[ size || SIZES.MEDIUM ],
       )}
    >
      {text}
    </button>
);
