/* eslint-disable @next/next/no-img-element */
import { ALink } from '../../atoms/links/ALink';

export const Article = ({ article }) => (
  <ALink isTargetBlank href={article.url}>
    <div
      className='max-w-xs bg-white border border-gray-200 rounded-lg shadow h-full '>

      <img className='rounded-t-lg'
           src={article.book.img} alt='' />

      <div className='p-5'>
        <h5
          className='hover:text-blue-800 mb-2 text-2xl font-bold tracking-tight'>{article.title}</h5>
      </div>
    </div>
  </ALink>
);
