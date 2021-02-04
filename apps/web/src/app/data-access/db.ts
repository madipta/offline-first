import { createRxDatabase, addRxPlugin } from 'rxdb';
import { DonasiSchema } from './donasi.schema';
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

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: 'donasidb',
    adapter: 'idb',
  });
  await db.addCollections({
    donasi: {
      schema: DonasiSchema,
    },
  });
  return db;
};

let dbPromise = null;

export const GetDatabase = async () => {
  return (dbPromise = dbPromise ?? (await createDatabase()));
};

export const GetDonasi = async () => {
  return (await GetDatabase()).donasi;
};
