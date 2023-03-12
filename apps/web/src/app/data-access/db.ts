import { addRxPlugin, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { DonasiSchema } from './donasi.schema';

addRxPlugin(RxDBDevModePlugin);

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: 'donasidb',
    storage: getRxStorageDexie(),
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
