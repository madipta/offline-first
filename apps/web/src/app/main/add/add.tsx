import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AddProps {}

const StyledAdd = styled.div`
  margin-top: 1.9rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
      margin-bottom: 1rem;

      label {
        display: flex;
        align-items: center;
        width: 100%;
  
        .caption {
          color: #08423d;
          font-size: .95rem;
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
        color: red;
        text-align: right;
        padding-right: .2rem;
        margin-top: .4rem;
      }
    }

    button {
      cursor: pointer;
      background-color: #f74a38;
      color: #fff;
      font-size: .95rem;
      font-weight: 600;
      line-height: 1.85rem;
      padding: .375rem 1.2rem;
      border-radius: .125rem;
      margin-top: 1.5rem;
    }
  }
`;

export function Add(props: AddProps) {
  return (
    <StyledAdd>
      <Formik
        initialValues={{ name: '', phone: '', amount: 0 }}
        validate={(values) => {
          const errors = { name: null, amount: null };
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.amount || values.amount >= 100) {
            errors.amount = 'Required, minimum Rp.100';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>
              <label>
                <span className="caption">Name</span>
                <Field type="text" name="name" />
              </label>
              <ErrorMessage name="name" component="div" className="error" />
            </p>
            <p>
              <label>
                <span className="caption">Phone</span>
                <Field type="text" name="phone" />
              </label>
            </p>
            <p>
              <label>
                <span className="caption">Amount</span>
                <Field type="text" name="amount" className="number" />
              </label>
              <ErrorMessage name="amount" component="div" className="error" />
            </p>
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
