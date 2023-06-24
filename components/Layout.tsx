import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Ilias El-Mhamdi' }: Props) => (
  <div className='m-4'>
    <Head>
      <link rel='icon' href='/hello.png' sizes='any' />
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {children}
  </div>
);

export default Layout;
