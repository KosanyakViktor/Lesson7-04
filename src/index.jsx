import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 1,
    name: 'Test',
    age: 100,
  },
  {
    id: 2,
    name: 'Ann',
    age: 50,
  },
  {
    id: 3,
    name: 'Jack',
    age: 30,
  },
  {
    id: 4,
    name: 'Tom',
    age: 10,
  },
  {
    id: 5,
    name: 'Bob',
    age: 25,
  },
  {
    id: 6,
    name: 'Dan',
    age: 29,
  },
  {
    id: 7,
    name: 'Sammi',
    age: 19,
  },
  {
    id: 8,
    name: 'Page',
    age: 19,
  },
  {
    id: 9,
    name: 'Gamer1',
    age: 19,
  },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);