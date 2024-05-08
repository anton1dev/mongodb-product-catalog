import { MongoClient } from 'mongodb';

let _db;
const mongoDbUrl = process.env.DB_URL;

export const initDb = async (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  try {
    const client = await MongoClient.connect(mongoDbUrl);
    _db = client;
    callback(null, _db);
  } catch (err) {
    callback(err);
  }
}

export const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized!');
  }
  return _db;
}