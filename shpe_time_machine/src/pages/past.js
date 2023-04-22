import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
    return (
      <div className="font-alexandria">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria&display=swap" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p> Hello, world!</p>
        </main>
      </div>
    );
  }