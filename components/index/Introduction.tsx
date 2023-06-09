import Image from 'next/image';
import { ReferenceLinks } from './ReferenceLinks';

export function Introduction() {
  return <div className='flex items-center gap-2'>
    <Image className={'rounded-full'} src='/me.jpg' width={100} height={100} alt={'me'}></Image>
    <h1 className=''>Hi 👋, I&apos;m Ilias El-Mhamdi <br /> This blog exists to organize my LinkedIn articles for easy
      access. <br /> <ReferenceLinks />
    </h1>
  </div>;
}
