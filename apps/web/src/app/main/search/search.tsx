import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';

const StyledSearch = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2.5rem;
    overflow: hidden;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 24rem;
      margin: 0.4rem 0;

      > label {
        display: flex;
        justify-content: center;
        align-items: center;

        input[type='radio'] {
          margin-right: 0.2rem;
        }

        input[value='local'] {
          margin-left: 1.1rem;
        }
      }

      input[name='search'] {
        color: #222;
        flex-grow: 1;
        font-size: 1.02rem;
        line-height: 1.85rem;
        padding: 0.175rem 0.5rem;
        border: 1px solid #cfd8d4;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-right: none;
      }

      button {
        cursor: pointer;
        background-color: #f7402a;
        color: #fff;
        line-height: 1.85rem;
        padding: 0.2rem 1rem;
        border: 1px solid #f7402a;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .error {
      color: red;
      line-height: 1rem;
      margin-bottom: 1rem;
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
              <Field type="text" name="search" />
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </div>
            <ErrorMessage name="search" component="p" className="error" />
            <div>
              <label>
                <Field type="radio" name="source" value="server" />
                Saved
              </label>
              <label>
                <Field type="radio" name="source" value="local" />
                Draft
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </StyledSearch>
  );
}

export default Search;
