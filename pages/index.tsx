/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { allArticles } from '../data/articles';


const Article = ({ article }) => (
  <Link href={article.url}>
    <a className='underline hover:text-blue-800' target='_blank'>
      <div
        className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full '>

        <img className='rounded-t-lg'
             src={article.book.img} alt='' />

        <div className='p-5'>
          <h5
            className='hover:text-blue-800 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{article.title}</h5>
        </div>
      </div>
    </a>
  </Link>
);

const IndexPage = () => (
  <Layout>
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

    <div className='m-4'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Articles</h2>
      {allArticles.map(book =>
        <>
          <hr className='m-4' />
          <h2
            className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize mb-4'>{book.articles[0].book.title.toLocaleLowerCase()}</h2>
          <div className='flex flex-wrap gap-4'>
            {book.articles.map(article => (<Article key={article.url} article={article} />))}
          </div>
        </>,
      )}
    </div>


  </Layout>
);

export default IndexPage;
