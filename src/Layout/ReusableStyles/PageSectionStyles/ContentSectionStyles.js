import React from 'react';
import {css} from 'styled-components';
import { commonPageSectionStyles } from './CommonPageSectionStyles';


export const contentSectionStyles = props => css`

        ${commonPageSectionStyles};
       
         ${props => props.readingBlock && `       
          @media (min-width: 965px) {
            display: flex;
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
            
           p {
            max-width: 18rem;
            }

          }
          `}
          
`;