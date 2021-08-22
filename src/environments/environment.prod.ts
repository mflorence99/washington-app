import BUILD from '../assets/build.json';
import PACKAGE from '../../package.json';

import { UAParser } from 'ua-parser-js';

export const environment = {
  production: true,
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
  },
  ua: UAParser()
};
