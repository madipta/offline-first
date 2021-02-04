import { gql, useMutation, useQuery } from '@apollo/client';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdefhijklmnopqrstuvwxyz', 10);

const DonasiListGQL = gql`
  query {
    pagelist(take: 20, skip: 0) {
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

export function useServeDonasiList() {
  return useQuery(DonasiListGQL, {
    fetchPolicy: 'cache-first',
  });
}


const DonasiInsertGql = gql`
  mutation DonasiCreateInput(
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

export function useDonasiInsertFromServer() {
  const [add, result] = useMutation(DonasiInsertGql);
  return [
    (opt) => {
      opt.variables.id = nanoid();
      opt.variables.amount = +opt.variables.amount;
      opt.variables.createdAt = Date.now();
      return add(opt);
    },
    result,
  ];
}
