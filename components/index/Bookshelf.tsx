/* eslint-disable @next/next/no-img-element */
import { bookShelf } from '../../data/articles';
import { Article } from './Article';

export function Bookshelf() {
  return <>
    <div className='m-4'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Articles</h2>
      <div className='relative'>
        <img
          src='https://static.thenounproject.com/png/424995-200.png'
          alt='' className='w-8 h-8  w-24 h-24 absolute top-1.5 left-2 ' />
        <input className='rounded-2xl p-2 border-2 w-full pl-9' />
      </div>
      {bookShelf.map(shelf => <>
        <hr className='m-4' />
        <h2
          className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize mb-4'>{shelf.book.title.toLocaleLowerCase()}</h2>
        <div className='flex flex-wrap gap-4'>
          {shelf.articles.map(article => (<Article key={article.url} article={article} />))}
        </div>
      </>)}
    </div>
  </>;
}
