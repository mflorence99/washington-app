import BUILD from '../assets/build.json';
import PACKAGE from '../../package.json';

export const environment = {
  production: false,
  package: {
    author: PACKAGE.author,
    name: PACKAGE.name,
    description: PACKAGE.description,
    license: PACKAGE.license,
    repository: {
      type: PACKAGE.repository.type,
      url: PACKAGE.repository.url
    },
    version: PACKAGE.version
  },
  build: {
    id: BUILD.id,
    date: BUILD.date
  }
};
