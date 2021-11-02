export const DonasiSchema = {
  title: 'donasi schema',
  version: 0,
  type: 'object',
  primaryKey: 'id',
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
      type: 'boolean',
      default: false
    },
  },
  required: ['name', 'amount'],
  indexes: ['name', 'createdAt'],
};
