'use client'

import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Hiking, Palette, People } from '@mui/icons-material';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #D2DEEC;
  
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 100px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled(Typography)`
  color: #165252;
  margin-bottom: 8px;
`;

const Description = styled(Typography)`
  color: #3C4556;
  margin-bottom: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #78882D;
  &:hover {
    transform: translateY(-5px);
    
  }
`;

interface Seccion {
  titulo: string;
  descripcion: string;
  imagen: string;
  icono: React.ReactNode;
}

const seccion1: React.FC = () => {
  const secciones: Seccion[] = [
    {
      titulo: 'Aventureros:',
      descripcion: 'Si disfrutas de actividades al aire libre como senderismo, ciclismo o deportes acuáticos.',
      imagen: '/img/aventureros.jpg',
      icono: <Hiking />
    },
    {
      titulo: 'Amantes del arte y la cultura:',
      descripcion: 'Para quienes desean asistir a talleres creativos, visitas a museos, o eventos culturales.',
      imagen: '/img/arte y cultura.jpg',
      icono: <Palette />
    },
    {
      titulo: 'Socializadores:',
      descripcion: 'Perfecto para aquellos que buscan ampliar su círculo social en un ambiente relajado y amistoso.',
      imagen: '/img/sociables.jpg',
      icono: <People />
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom style={{ color: '#013B58', textAlign: 'center', marginBottom: '30px' }}>
        ¿Para quién es ParchingApp?
      </Typography>
      {secciones.map((seccion, index) => (
        <StyledSection key={index}>
          <ImageContainer>
            <Image src={seccion.imagen} alt={seccion.titulo} />
          </ImageContainer>
          <ContentContainer>
            <Title variant="h6" fontWeight="bold">
              {seccion.titulo}
            </Title>
            <Description variant="body1">
              {seccion.descripcion}
            </Description>
            <IconContainer>
              {seccion.icono}
            </IconContainer>
          </ContentContainer>
        </StyledSection>
      ))}
    </Container>
  );
};

export default seccion1;