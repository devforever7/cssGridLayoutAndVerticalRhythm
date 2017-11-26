import React from 'react';
import {css} from 'styled-components';
import styled from 'styled-components';

export const horizontalWrapperStyles = props => css`
       
  ${props => props.horizontalWrapper && `

     width: calc(100% - 2rem);
     margin-left: 1rem;
     margin-right: 1rem;
     
     @media (min-width: 1200px) {
       width: calc(100% - 10rem);
       margin-left: 5rem;
       margin-right: 5rem;
       
     }
                   
     `};
`;