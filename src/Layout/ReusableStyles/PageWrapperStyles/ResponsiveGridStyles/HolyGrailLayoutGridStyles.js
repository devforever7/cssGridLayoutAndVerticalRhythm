import React from 'react';
import {css} from 'styled-components';


export const holyGrailLayoutGridStyles = props => css`

   ${props => props.responsiveGridHolyGrailLayout && `
   
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-areas:
      "nav"
      "content"
      "sidebar"
      "ad"; 
      
       @media (min-width: 500px) {
       grid-template-columns: 1fr 3fr;
       grid-template-areas: 
       "nav     nav"
       "sidebar content"
       "ad      ad";
       }
                  
       @media (min-width: 700px) {
       grid-template-columns: 1fr 4fr 1fr;
       grid-template-areas: 
       "nav    content sidebar"
       "nav    content ad"
       } 
       
   `};
     
`;