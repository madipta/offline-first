import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchProps {}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 100%;

  form {
    display: flex;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      justify-items: center;
      width: 90%;
      max-width: 28rem;
      margin: 0 auto;

      input {
        color: #222;
        flex-grow: 1;
        font-size: 1.02rem;
        line-height: 1.85rem;
        padding: 0.375rem 0.9rem;
        border: 1px solid #cfd8d4;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }

      button {
        cursor: pointer;
        background-color: #f74a38;
        color: #fff;
        font-size: 0.95rem;
        font-weight: 600;
        line-height: 1.85rem;
        padding: 0.375rem 1.2rem;
        border: 1px solid #f74a38;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .error {
      color: red;
      text-align: right;
      padding-right: 0.2rem;
      margin-top: 0.4rem;
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
            <div>
              <Field type="text" name="search" value="xxxx" />
              <button type="submit" disabled={isSubmitting}>
                Filter
              </button>
            </div>
            <ErrorMessage name="search" component="div" className="error" />
          </Form>
        )}
      </Formik>
    </StyledSearch>
  );
}

export default Search;
