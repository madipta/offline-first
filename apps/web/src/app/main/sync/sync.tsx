import { Box, Button, LoadingOverlay, Table, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useReducer, useState } from 'react';
import { DeleteDonasi, FindDonasi } from '../../data-access/local';
import { useDonasiInsert } from '../../data-access/server';

export function Sync() {
  const [count, setCount] = useReducer((c, cp) => (cp ? c + 1 : 0), 0);
  const [success, setSuccess] = useReducer(
    (old, val) => (val ? [...old, val] : []),
    []
  );
  const form = useForm({});
  const [isLoading, setLoading] = useState(false);
  const [add] = useDonasiInsert();
  return (
    <form
      onSubmit={form.onSubmit(async (values, _event) => {
        try {
          setLoading(true);
          const data = await FindDonasi({
            selector: {},
            sort: [{ createdAt: 'desc' }],
          });
          if (data && data.length) {
            data.forEach(async (val, i) => {
              const { id, name, phone, amount, createdAt } = val;
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              await add({
                variables: { id, name, phone, amount, createdAt },
              });
              await DeleteDonasi(id);
              setCount(1);
              setSuccess({ id, name, phone, amount });
            });
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })}
    >
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '24px',
        })}
      >
        <Text color="gray.7" mb={24}>
          Sinkronisasi data ke server
        </Text>
        <Button type="submit" color="red.7">
          Submit
        </Button>
        <Text color="gray.7" mt={24}>
          {count} data synced.
        </Text>
        {count > 0 && (
          <Table striped highlightOnHover mt={24}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name+(Phone)</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {success.map((d, i) => (
                <tr key={i + d.name}>
                  <td>{i + 1}</td>
                  <td>
                    {d.name} {d.phone ? ` (${d.phone})` : ''}
                  </td>
                  <td>{d.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Box>
    </form>
  );
}

export default Sync;
