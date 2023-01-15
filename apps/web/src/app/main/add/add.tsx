import { Box, Button, Group, LoadingOverlay, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { InsertDonasi } from '../../data-access/local';

function Add() {
  const [isLoading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      amount: 10000,
    },
    validate: {
      name: (value) => {
        return value.trim().length < 3 ? 'Required, min: 3 chars' : null;
      },
      amount: (value) => {
        return isNaN(value) || value < 100
          ? 'Numeric Required, min: 100'
          : null;
      },
    },
  });

  return (
    <Box
      sx={(theme) => ({
        maxWidth: '300px',
        margin: '12px auto',
      })}
    >
      <form
        onSubmit={form.onSubmit(
          async (values, _event) => {
            try {
              setLoading(true);
              await InsertDonasi(values);
              form.reset();
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
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Phone"
          placeholder="080000000xx"
          {...form.getInputProps('phone')}
        />
        <TextInput
          withAsterisk
          label="Amount"
          placeholder="123"
          {...form.getInputProps('amount')}
        />
        <Group position="center" mt="24px">
          <Button type="submit" color="red.7">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default Add;
