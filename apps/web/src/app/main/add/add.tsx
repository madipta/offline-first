import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDonasiInsertFromServer } from '../../data-access/server';

const StyledAdd = styled.div`
  margin-top: 1.9rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      margin-bottom: 1rem;

      label {
        display: flex;
        align-items: center;
        width: 100%;

        b {
          color: #08423d;
          font-size: 0.95rem;
          line-height: 1.85rem;
          width: 5rem;
          margin-right: 0.3rem;
        }

        input {
          color: #222;
          flex-grow: 1;
          font-size: 1.02rem;
          line-height: 1.85rem;
          padding: 3px 6px;
          border: 1px solid #cfd8d4;
        }

        input.number {
          text-align: right;
        }
      }

      .error {
        color: #d23d2a;
        text-align: right;
        padding-right: 0.2rem;
        margin-top: 0.4rem;
      }
    }

    button {
      cursor: pointer;
      background-color: #f74a38;
      color: #fff;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.85rem;
      padding: 0.375rem 1.2rem;
      border-radius: 0.15rem;
      margin-top: 1.5rem;
    }

    button[disabled] {
      background-color: #ddd;
    }
  }
`;

type formError = {
  name?: string;
  amount?: string;
};

function Add() {
  const [addDonasi] = useDonasiInsertFromServer();
  return (
    <StyledAdd>
      <Formik
        initialValues={{ name: '', phone: '', amount: 10000 }}
        validate={(values) => {
          const errors: formError = {};
          const { name, amount } = values;
          if (!name || name.trim().length < 3) {
            errors.name = 'Required, min: 3 chars';
          }
          if (!+amount || amount <= 100) {
            errors.amount = 'Required, minimum Rp.100';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            addDonasi({ variables: { ...values }});
          } catch (error) {
            console.log(error);
          } finally {
            setSubmitting(false);
            resetForm();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>
                <b>Name</b>
                <Field type="text" name="name" />
              </label>
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>
                <b>Phone</b>
                <Field type="text" name="phone" />
              </label>
            </div>
            <div>
              <label>
                <b>Amount</b>
                <Field type="text" name="amount" className="number" />
              </label>
              <ErrorMessage name="amount" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </StyledAdd>
  );
}

export default Add;
