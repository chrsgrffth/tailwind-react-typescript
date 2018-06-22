import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Styled } from './components/styled';
import './css/styles.css';

ReactDOM.render(
  <Styled
    properties={{
      textColor: 'black',
      textSize: 5,
      fontFamily: 'sans',
      fontWeight: 'medium',
      padding: 5,
    }}
  >
    Test
  </Styled>,
  document.getElementById('root') as HTMLElement,
);
