/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export const Article = ({ article }) => (
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
