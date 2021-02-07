import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InsertDonasi } from '../../data-access/local';

const StyledAdd = styled.div`
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      margin-bottom: .7rem;

      label {
        display: flex;
        align-items: center;
        width: 100%;

        b {
          color: #08423d;
          line-height: 1.85rem;
          width: 5rem;
          margin-right: 0.3rem;
        }

        input {
          color: #222;
          flex-grow: 1;
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
      font-weight: 600;
      line-height: 1.85rem;
      padding: 0.2rem 1.1rem;
      border-radius: 0.15rem;
      margin-top: 1.2rem;
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
            InsertDonasi(values);
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
