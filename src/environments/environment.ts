import bld from '../assets/build.json';
import pkg from '../../package.json';

export const environment = {
  production: false,
  package: {
    author: pkg.author,
    name: pkg.name,
    description: pkg.description,
    version: pkg.version
  },
  build: {
    id: bld.id,
    date: bld.date
  }
};
