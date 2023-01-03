export const DonasiSchema = {
  title: 'donasi schema',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 10
    },
    createdAt: {
      type: 'number',
      minimum: 0,
      maximum: 10000000000000,
      multipleOf: 1
    },
    name: {
      type: 'string',
      maxLength: 100
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
