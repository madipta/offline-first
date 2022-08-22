const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/web',
    '<rootDir>/libs/interfaces',
    '<rootDir>/apps/api',
    '<rootDir>/libs/services',
    '<rootDir>/libs/gql',
  ],
};
