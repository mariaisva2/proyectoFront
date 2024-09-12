'use client'
import React from 'react'; 
import styled from "styled-components";
import Navbar from "../../components/profile/Navbar"
import ProfileCard from "../../components/profile/ProfileCard"
import EventSlider from "../../components/profile/EventSlider"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
`;
export default function Home() {
  return (
    <div>
      <Navbar/>
     <ProfileCard/>
      <EventSlider/>
    </div>
  );
}
