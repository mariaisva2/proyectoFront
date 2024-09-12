'use client'

import Image from "next/image";
import React from 'react';

import styled from "styled-components";

import Navbar from "../components/profile/Navbar"




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
      <Navbar
      />
     
    </div>
  );
}
