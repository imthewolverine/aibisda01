import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomeMain from '../components/home/HomeMain';

const Home: NextPage = () => {

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Head>
        <title>Ai Bisda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HomeMain />
    </div>
  )
}

export default Home
