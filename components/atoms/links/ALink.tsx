import React from 'react';
import Link from 'next/link';

type ALinkI = {
  href: string;
  children: React.ReactNode | string;
  isTargetBlank?: boolean;
}

export const ALink = ({ href = '', children = () => <></>, isTargetBlank = false }: ALinkI) => (
  <Link href={href}>
    <a className='underline hover:text-blue-800' target={isTargetBlank ? '_blank' : undefined}>{children}</a>
  </Link>);
