import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdefhijklmnopqrstuvwxyz', 10);

const DonasiListGQL = gql`
  query DonasiListInput($filter: String, $sort: String, $order: String) {
    list(data: { filter: $filter, sort: $sort, order: $order }) {
      id
      createdAt
      name
      phone
      amount
      syncedAt
      sync
    }
  }
`;

export function useDonasiList() {
  return useLazyQuery(DonasiListGQL, {
    fetchPolicy: 'cache-and-network',
  });
}

export function useDonasiSearch() {
  return useLazyQuery(DonasiListGQL, {
    fetchPolicy: 'cache-and-network',
  });
}

const DonasiInsertGql = gql`
  mutation DonasiCreateInputs(
    $id: String!
    $createdAt: Float!
    $name: String!
    $phone: String
    $amount: Float!
  ) {
    create(
      data: {
        id: $id
        createdAt: $createdAt
        name: $name
        phone: $phone
        amount: $amount
      }
    ) {
      sync
      syncedAt
    }
  }
`;

const donasiMaper = (val) => {
  const { id, amount, cretedAt, ...rest } = val;
  return {
    ...rest,
    id: id ?? nanoid(),
    amount: +amount,
    createdAt: Date.now(),
  };
};

export function useDonasiInsert() {
  const [add, result] = useMutation(DonasiInsertGql);
  return [
    async (opt) => {
      opt.variables = donasiMaper(opt.variables);
      return await add(opt);
    },
    result,
  ];
}
