'use client'

import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

// Colores personalizados
const colors = {
  primary: '#165252',
  secondary: '#D2DEEC',
  accent: '#78882D',
  dark: '#3C4556',
  darker: '#013B58',
};

// Contenedor principal
const SectionContainer = styled(Box)`
  background-color: ${colors.secondary};
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  
  // Adaptación para pantallas más grandes
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

// Video al lado izquierdo
const VideoContainer = styled(Box)`
  flex: 1;
  max-width: 100%;
  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    outline: none;
  }
`;

// Texto al lado derecho
const TextContainer = styled(Box)`
  flex: 1;
  padding-left: 20px;
  color: ${colors.dark};
  
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

const Title = styled(Typography)`
  color: ${colors.darker};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled(Typography)`
  color: ${colors.accent};
  font-size: 20px;
  margin-bottom: 15px;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 1.6;
`;

const SeccionComponent = () => {
  return (
    <SectionContainer>
  
      <VideoContainer>
        <video controls>
          <source src="/img/Vi" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>

   
      <TextContainer>
        <Title>Why Choose Us</Title>
        <SubTitle>Tourism for good!</SubTitle>
        <Description>
          Yugen Earthside is a sustainable travel booking platform and agency. We connect mindful travelers to responsible trips designed and run by our local partners. Our company is a certified net-zero Social Purpose Corporation.
        </Description>
      </TextContainer>
    </SectionContainer>
  );
};

export default SeccionComponent;

