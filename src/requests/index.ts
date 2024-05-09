import { crudBookshelfs } from './bookShelfs';
import { crudBooks } from './books';

export const requests = {
  books: crudBooks,
  bookshelfs: crudBookshelfs
};