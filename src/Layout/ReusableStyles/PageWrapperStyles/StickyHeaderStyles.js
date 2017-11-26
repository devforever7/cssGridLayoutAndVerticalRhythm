import React from 'react';
import {css} from 'styled-components';


export const stickyHeaderStyles = props => css`

        ${props => props.stickyHeader && `
  
          padding-top: ${props.stickyHeader};
          
          header {
           height: ${props.stickyHeader};
            position: fixed;
            top: 0;
            width: inherit;
            padding: 0;
          }
             
`};

`;