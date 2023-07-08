import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Jari' : 'Jari Africa'}</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav>
            <div className='flex h-12 justify-between items-center px-4 shadow-md'>
              <Link href='/'>
                <button className='text-lg font-bold'>Jari Africa</button>
              </Link>
              <div className='flex space-x-4'>
                <button className='link-button' onClick={() => {}}>
                  Cart
                </button>
                <button className='link-button' onClick={() => {}}>
                  Log In
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className='container m-auto mt-4 px-4'>
          {children}
        </main>

        <footer className='flex h-10 justify-center items-center shadow-inner '>
          Copyright @ Jari-Africa
        </footer>
      </div>
    </>
  );
}
