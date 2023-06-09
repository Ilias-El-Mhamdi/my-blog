import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';


const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <div className='flex items-center gap-2'>
      <Image className={'rounded-full'} src='/me.jpg' width={100} height={100} alt={'me'}></Image>
      <h1 className=''>Hi 👋, I&apos;m Ilias El-Mhamdi <br /> This blog exists to organize my LinkedIn articles for easy
        access. <br /> (This is a first draft, still in progress) </h1>
    </div>
    <Link href='https://jet-afternoon-270.notion.site/Tech-Resources-b060a9b271024bb09aff222e9ccc7abc?pvs=4'>
      <a className='underline hover:text-blue-800' target='_blank'>My Tech Resources</a>
    </Link>
    <br />
    <Link
      href='https://www.linkedin.com/today/author/ilias-el-mhamdi-72a013146?trk=article-ssr-frontend-pulse_more-articles'>
      <a className='underline hover:text-blue-800' target='_blank'>My LinkedIn Articles</a>
    </Link>
    <br />
    <Link href={'/cv.pdf'}>
      <a className='underline hover:text-blue-800' target='_blank'>My CV</a>
    </Link>

  </Layout>
);

export default IndexPage;
