import React from 'react';
import {css} from 'styled-components';

export const commonPageSectionStyles = props => css`

      font-size: 0.64rem;
      line-height: 1.5625;
      display: flex;
      background: ${props.backgroundColor || "grey"};
      color: ${props.color || "white"};
      padding: ${props.padding || "1rem"};
      
      ${props => props.sticky && `
      padding: 0;
      `};
      
      
      ${props => props.responsiveGridElement && `
      grid-area: ${props.responsiveGridElement};
      
      `};
 
`;