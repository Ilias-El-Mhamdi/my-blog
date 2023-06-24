/* eslint-disable @next/next/no-img-element */
import { bookShelf } from './data/articles';
import { Article } from './Article';
import { useEffect, useState } from 'react';
import { BookSelect } from './BookSelect';


export function Bookshelf() {

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [filteredBookShelf, setFilteredBookShelf] = useState(bookShelf);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filtered = bookShelf;
    if (selectedBooks.length !== 0) {
      filtered = bookShelf.filter(shelf =>
        selectedBooks.includes(shelf.book.title),
      );
    }
    if (search) {
      filtered = filtered.map(shelf => {
        return {
          ...shelf,
          articles: shelf.articles.filter(article => article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        };
      });
    }
    setFilteredBookShelf(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBooks, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);

  };


  return <>
    <div className='m-4'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Articles</h2>
      <div className='relative'>
        <img
          src='https://static.thenounproject.com/png/424995-200.png'
          alt='' className='w-8 h-8  w-24 h-24 absolute top-1.5 left-2 ' />
        <input onInput={handleSearch} className='rounded-2xl p-2 border-2 w-full pl-9' />
        <BookSelect selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />
      </div>
      {filteredBookShelf.map(shelf => shelf.articles.length ? <>
          <hr className='m-4' />
          <h2
            className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize mb-4'>{shelf.book.title.toLocaleLowerCase()}</h2>
          <div className='flex flex-wrap gap-4'>
            {shelf.articles.map(article => (<Article key={article.url} article={article} />))}
          </div>
        </> :
        <></>)}
    </div>
  </>;
}
