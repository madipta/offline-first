import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Radio,
  Table,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useDonasiSearch } from '../../data-access/server';

export function Search() {
  const [isLoading, setLoading] = useState(false);
  const [getList, { data }] = useDonasiSearch();
  const form = useForm({
    initialValues: {
      search: '',
      source: 'server',
    },
    validate: {
      search: (value) => {
        return value.trim().length < 3 ? 'Required, min: 3 chars' : null;
      },
    },
  });
  return (
    <Box
      sx={(theme) => ({
        maxWidth: '800px',
        margin: '12px auto 0',
      })}
    >
      <Box
        sx={(theme) => ({
          maxWidth: '300px',
          margin: '0 auto',
        })}
      >
        <form
          onSubmit={form.onSubmit(
            async (values, _event) => {
              try {
                setLoading(true);
                getList({ variables: { filter: values.search } });
              } catch (error) {
                console.log(error);
              } finally {
                setTimeout(() => {
                  setLoading(false);
                }, 300);
              }
            },
            (validationErrors, _values, _event) => {
              console.log(validationErrors);
            }
          )}
        >
          <LoadingOverlay visible={isLoading} overlayBlur={2} />
          <TextInput
            withAsterisk
            label="Search"
            {...form.getInputProps('search')}
          />
          <Group position="center">
            <Radio.Group name="source" {...form.getInputProps('source')}>
              <Radio value="server" label="Server" />
              <Radio value="local" label="Draft" />
            </Radio.Group>
          </Group>
          <Group position="center" mt="md">
            <Button type="submit" color="red.7">
              Search
            </Button>
          </Group>
        </form>
      </Box>
      {data && (
        <Table striped highlightOnHover mt={48}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name+(Phone)</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.list.map((d, i) => (
              <tr key={d.id}>
                <td>{i + 1}</td>
                <td>
                  <p>{d.name}</p>
                  <em>{d.phone}</em>
                </td>
                <td>{d.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Box>
  );
}

export default Search;
