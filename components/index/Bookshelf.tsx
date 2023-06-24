/* eslint-disable @next/next/no-img-element */
import { bookReferences, bookShelf } from './data/articles';
import { Article } from './Article';
import { useEffect, useState } from 'react';


const BookSelect = ({ selectedBooks, setSelectedBooks }) => {


  const handleSelectChange = (event) => {
    if (event.target.value && !selectedBooks.includes(bookReferences[event.target.value].title)) {
      setSelectedBooks([...selectedBooks, bookReferences[event.target.value].title]);
    }
  };

  return (
    <>
      <select placeholder='Choose book' onChange={handleSelectChange}
              className='p-2 rounded-xl capitalize multiple mt-2'>
        <option value=''>Select a book</option>
        {Object.keys(bookReferences).map((key) => (
          <option

            className='rounded-xl p-2' key={key} value={key}>
            {bookReferences[key].title.toLocaleLowerCase()}
          </option>
        ))}
      </select>
      <div className='flex gap-2 relative mt-2 flex-wrap'>
        {selectedBooks.map((book) => <div onClick={() => setSelectedBooks(selectedBooks.filter(b => book !== b))}
                                          key={book}
                                          className='hover:cursor-pointer hover:bg-cyan-200 p-2 capitalize rounded-xl bg-cyan-300 flex justify-center gap-2'> {book.toLocaleLowerCase()}
          <img alt={book} className='w-6 h-6'
               src='https://cdn.icon-icons.com/icons2/3470/PNG/512/close_cancel_remove_delete_cross_icon_219840.png' />
        </div>)}
      </div>
    </>
  );
};


export function Bookshelf() {

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [filteredBookShelf, setFilteredBookShelf] = useState(bookShelf);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filtered = bookShelf;
    console.log('selectedBooks', selectedBooks);
    console.log('filteredBookShelf', filteredBookShelf);
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
