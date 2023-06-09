/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export const Article = ({ article }) => (
  <Link href={article.url}>
    <a className='underline hover:text-blue-800 text-gray-900' target='_blank'>
      <div
        className='max-w-xs bg-white border border-gray-200 rounded-lg shadow h-full '>

        <img className='rounded-t-lg'
             src={article.book.img} alt='' />

        <div className='p-5'>
          <h5
            className='hover:text-blue-800 mb-2 text-2xl font-bold tracking-tight'>{article.title}</h5>
        </div>
      </div>
    </a>
  </Link>
);
