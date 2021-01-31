import { createRxDatabase, addRxPlugin } from 'rxdb';
// import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
// import { RxDBReplicationPlugin } from 'rxdb/plugins/replication';
// import { RxDBNoValidatePlugin } from 'rxdb/plugins/no-validate';

// eslint-disable-next-line @typescript-eslint/no-var-requires
addRxPlugin(require('pouchdb-adapter-idb'));
// eslint-disable-next-line @typescript-eslint/no-var-requires
// addRxPlugin(require('pouchdb-adapter-http')); // enable syncing over http
// addRxPlugin(RxDBLeaderElectionPlugin);
// addRxPlugin(RxDBReplicationPlugin);
// addRxPlugin(RxDBNoValidatePlugin);

const donasiSchema = {
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
    },
  },
  required: ['name', 'amount'],
  indexes: ['name']
};

// const syncURL = 'http://' + window.location.hostname + ':3333/';
// console.log('host: ' + syncURL);

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: 'donasidb',
    adapter: 'idb',
  });
  await db.addCollections({
    donasi: {
      schema: donasiSchema,
    },
  });
  return db;
};

let dbPromise = null;

export const get = async () => {
  if (!dbPromise) dbPromise = await createDatabase();
  return dbPromise;
};
