import { customAlphabet } from "nanoid";
import { useState, useEffect } from "react";
import { GetDonasi } from "./db";

const nanoid = customAlphabet('1234567890abcdefhijklmnopqrstuvwxyz', 10);

export const FindDonasi = async (options) => {
  return (await GetDonasi()).find(options).exec();
};

export const InsertDonasi = async (values) => {
  values.id = values.id ?? nanoid();
  values.amount = +values.amount;
  values.createdAt = Date.now();
  values.sync = false;
  return (await GetDonasi()).insert(values);
};

export const UpdateDonasi = async (id, values) => {
  const donasi = await GetDonasi();
  donasi
    .findOne({ selector: { id: { $eq: id }, sync: { $eq: 0 } } })
    .exec()
    .then((doc) => {
      doc && doc.update({ $set: { ...values } });
    });
};

export const DeleteDonasi = async (id) => {
  const donasi = await GetDonasi();
  donasi
    .findOne({ selector: { id: { $eq: id }, sync: { $eq: 0 } } })
    .exec()
    .then((doc) => {
      doc && doc.remove();
    });
};

export function useLocalDonasiList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  useEffect(() => {
    setLoading(true);
    FindDonasi({
      selector: {},
      sort: [{ createdAt: 'desc' }],
    })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}