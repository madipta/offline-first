import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useDonasiSearch } from '../../data-access/server';

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

const StyledResult = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    width: 95%;
    padding: 0 0.8rem 0.5rem;
    border-style: solid;
    border-width: 0;
    border-color: #eaeaea;
    border-bottom-width: 1px;
    margin-bottom: 0.8rem;

    div:nth-child(1) {
      min-width: 1.5rem;
      padding-left: 0.3rem;
    }

    div:nth-child(2) {
      flex: 1;
      padding-left: 1rem;
      padding-right: 1rem;

      p {
        font-weight: 600;
      }
    }
  }
`;

export function Search() {
  const [getList, { loading, data }] = useDonasiSearch();
  return (
    <>
      <StyledSearch>
        <Formik
          initialValues={{ search: '', source: 'server' }}
          validate={(values) => {
            const errors: { search?: string } = {};
            if (!values.search) {
              errors.search = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            getList({ variables: { filter: values.search } });
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
      <StyledResult>
        {data?.list.map((d, i) => (
          <li key={d.id}>
            <div>{i + 1}</div>
            <div>
              <p>{d.name}</p>
              <em>{d.phone}</em>
            </div>
            <div>{d.amount.toLocaleString()}</div>
          </li>
        ))}
      </StyledResult>
    </>
  );
}

export default Search;
