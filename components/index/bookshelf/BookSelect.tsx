/* eslint-disable @next/next/no-img-element */

import { bookReferences } from './data/articles';

export const BookSelect = ({ selectedBooks, setSelectedBooks }) => {


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
