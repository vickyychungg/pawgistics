/*
  A development only scrip to populate the database with some sample data in each
  of the tables.
*/

import { createUser } from './user';
import { createDog } from './dog';

export default () => {
  createDog({
    chipId: 123456789,
    name: 'Goku',
    litter: 'DBZ',
    fid: null,
    color: 'blue',
    shape: 'circle',
    gender: 'M',
    uri: 's3://canineassistants/assests/dogs/*',
  }).then((dog) => {
    // eslint-disable-next-line no-console
    console.log(`New dog created with name: ${dog.name}`);
  }).catch(() => {
    // console.log(err);
  });
  createUser({
    email: 'admin@pawgistics.com',
    password: 'password',
    admin: true,
    fname: 'John',
    lname: 'Doe',
    phone: '123-456-7890',
    address: {
      line1: '123 FooBar Rd',
      line2: 'Suite 34',
      city: 'Atlanta',
      state: 'GA',
      zip: '30327',
    },
    uri: 's3://canineassistants/assets/profilepics/*',
  }).then((user) => {
    // eslint-disable-next-line no-console
    console.log(`New user created with email: ${user.email}`);
  }).catch(() => {
    // console.log(err);
  });
  createUser({
    email: 'volunteer@pawgistics.com',
    password: 'password',
    admin: false,
    fname: 'Jane',
    lname: 'Doe',
    phone: '123-456-7890',
    address: {
      line1: '123 FooBar Rd',
      line2: 'Suite 34',
      city: 'Atlanta',
      state: 'GA',
      zip: '30327',
    },
    uri: 's3://canineassistants/assets/profilepics/*',
  }).then((user) => {
    // eslint-disable-next-line no-console
    console.log(`New user created with email: ${user.email}`);
  }).catch(() => {
    // console.log(err);
  });
};