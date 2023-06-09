import { bookShelf } from '../../data/articles';
import { Article } from './Article';

export function Bookshelf() {
  return <>
    <div className='m-4'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Articles</h2>
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
