import React from 'react';

import {css} from 'aphrodite';
import styles from './styles';

export default function Header() {
  return <h1 className={css(styles.header)}>Hello World!</h1>;
}
