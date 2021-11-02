import { addPouchPlugin, addRxPlugin, createRxDatabase, getRxStoragePouch } from 'rxdb';
import { RxDBNoValidatePlugin } from 'rxdb/plugins/no-validate';
import { DonasiSchema } from './donasi.schema';

addPouchPlugin(require('pouchdb-adapter-idb'));
addRxPlugin(RxDBNoValidatePlugin);

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: 'donasidb',
    storage: getRxStoragePouch('idb')
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
