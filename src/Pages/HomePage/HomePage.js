import React, { Component } from 'react';
import '../../App.css';
import styled from 'styled-components';
import {css} from 'styled-components';
import { headerStyles } from '../../Layout/ReusableStyles/PageSectionStyles/HeaderStyles';
import { footerStyles } from '../../Layout/ReusableStyles/PageSectionStyles/FooterStyles';
import { navbarStyles } from '../../Layout/ReusableStyles/PageSectionStyles/NavbarStyles';
import { sidebarStyles } from '../../Layout/ReusableStyles/PageSectionStyles/SidebarStyles';
import { adSectionStyles } from '../../Layout/ReusableStyles/PageSectionStyles/AdSectionStyles';
import { contentSectionStyles } from '../../Layout/ReusableStyles/PageSectionStyles/ContentSectionStyles';
import { horizontalWrapperStyles } from '../../Layout/ReusableStyles/PageWrapperStyles/HorizontalWrapperStyles';
import { responsiveGridStyles } from '../../Layout/ReusableStyles/PageWrapperStyles/ResponsiveGridStyles/ResponsiveGridStyles';
import { stickyFooterStyles } from '../../Layout/ReusableStyles/PageWrapperStyles/StickyFooterStyles';
import { stickyHeaderStyles } from '../../Layout/ReusableStyles/PageWrapperStyles/StickyHeaderStyles';
import { homePageText } from '../../textBlocks/HomePage/HomePageText';


const MyWrapper = styled.section`
      ${horizontalWrapperStyles};
      ${stickyHeaderStyles};  
      ${stickyFooterStyles};
`;

const MyGrid = styled.section`
      ${responsiveGridStyles};
`;

const MyHeader = styled.header`
      ${headerStyles};
`;


const MyFooter = styled.footer`
       ${footerStyles};
`;


const MyNavbar = styled.nav`
        ${navbarStyles};
`;

const MyContent = styled.section`
       ${contentSectionStyles};
`;


const MyAside = styled.aside`
       ${sidebarStyles};       
`;

const MyAd = styled.section`
       ${adSectionStyles};
`;



export const HomePage = () => {
    return (
        <MyWrapper horizontalWrapper stickyHeader="200px" stickyFooter="200px">
            <MyHeader>This is my header</MyHeader>
            <MyGrid responsiveGridHolyGrailLayout>
                <MyNavbar backgroundColor="red" responsiveGridElement="nav">This is my navbar</MyNavbar>
                <MyContent backgroundColor="green" responsiveGridElement="content" readingBlock>
                    <p>{homePageText}</p>
                </MyContent>
                <MyAside backgroundColor="blue" responsiveGridElement="sidebar">This is my aside.</MyAside>
                <MyAd backgroundColor="purple" responsiveGridElement="ad">This is my ad</MyAd>
            </MyGrid>
            <MyFooter>This is my footer</MyFooter>
        </MyWrapper>

    )
};






