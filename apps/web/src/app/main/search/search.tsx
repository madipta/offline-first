import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchProps {}

const StyledSearch = styled.div`
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
      }

      .error {
        color: red;
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
      border-radius: 0.125rem;
      margin-top: 1.5rem;
    }
  }
`;

export function Search(props: SearchProps) {
  return (
    <StyledSearch>
      <Formik
        initialValues={{ search: '' }}
        validate={(values) => {
          const errors = { search: null };
          if (!values.search) {
            errors.search = 'Required';
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
                <span className="caption">Search</span>
                <Field type="text" name="search" />
              </label>
              <ErrorMessage name="search" component="div" className="error" />
            </p>
            <button type="submit" disabled={isSubmitting}>
              Filter
            </button>
          </Form>
        )}
      </Formik>
    </StyledSearch>
  );
}

export default Search;
