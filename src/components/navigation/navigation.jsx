import React from 'react';
import {NavLink} from 'react-router-dom';

import {css} from 'aphrodite';
import styles from './styles';

export default function Navigation() {
  return <nav className={css(styles.navigation)}>
    <NavLink className={css(styles.link)} activeClassName={css(styles.active)} to="/">Home</NavLink>
    <NavLink className={css(styles.link)} activeClassName={css(styles.active)} to="/info">Info</NavLink>
  </nav>;
}
