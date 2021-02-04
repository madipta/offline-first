export const DonasiSchema = {
  title: 'donasi schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    createdAt: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    amount: {
      type: 'number',
    },
    syncedAt: {
      type: 'number',
    },
    sync: {
      type: 'number',
      default: 0
    },
  },
  required: ['name', 'amount'],
  indexes: ['name', 'createdAt'],
};
