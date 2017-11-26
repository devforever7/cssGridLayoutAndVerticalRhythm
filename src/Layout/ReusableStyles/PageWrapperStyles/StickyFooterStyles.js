import React from 'react';
import {css} from 'styled-components';


export const stickyFooterStyles = props => css`
       
  ${props => props.stickyFooter && `


       padding-bottom: ${props.stickyFooter};
       
       footer {
        height: ${props.stickyFooter};
        position: fixed;
        bottom: 0;
        width: inherit;
        padding: 0;
       }
       
     `};
`;