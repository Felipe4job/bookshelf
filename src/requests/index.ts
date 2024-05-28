import { crudBookshelfs } from './bookShelfs';
import { crudBooks } from './books';
import { crudUsers } from './users';

export const requests = {
  books: crudBooks,
  bookshelfs: crudBookshelfs,
  user: crudUsers
};