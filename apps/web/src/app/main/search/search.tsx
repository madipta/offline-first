import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';

const StyledSearch = styled.div`

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;

    > div {
      display: flex;
      width: 90%;
      max-width: 28rem;
      margin: .4rem auto;

      input[type="radio"] {
        margin-left: .5rem;
      }

      > span {
        line-height: 1.15rem;
        margin-left: .3rem;
        margin-right: .5rem;
      }

      input[name="search"] {
        color: #222;
        flex-grow: 1;
        font-size: 1.02rem;
        line-height: 1.85rem;
        padding: 0.175rem 0.9rem;
        border: 1px solid #cfd8d4;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-right: none;
      }

      button {
        cursor: pointer;
        background-color: #f74a38;
        color: #fff;
        font-size: 1.02rem;
        line-height: 1.85rem;
        padding: 0.175rem 1.2rem;
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

export function Search() {
  return (
    <StyledSearch>
      <Formik
        initialValues={{ search: '', source: 'server' }}
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
            <Field type="text" name="search" value="" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </div>
            <div>
              <Field type="radio" name="source" value="server" />
              <span>Saved</span>
              <Field type="radio" name="source" value="local" />
              <span>Draft</span>
            </div>
            <ErrorMessage name="search" component="div" className="error" />
          </Form>
        )}
      </Formik>
    </StyledSearch>
  );
}

export default Search;
