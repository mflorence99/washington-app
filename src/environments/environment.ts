import bld from '../assets/build.json';
import pkg from '../../package.json';

export const environment = {
  production: false,
  package: {
    author: pkg.author,
    name: pkg.name,
    description: pkg.description,
    license: pkg.license,
    repository: {
      type: pkg.repository.type,
      url: pkg.repository.url
    },
    version: pkg.version
  },
  build: {
    id: bld.id,
    date: bld.date
  }
};
