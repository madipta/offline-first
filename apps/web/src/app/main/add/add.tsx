import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Database from '../../database/create';
import { IDonasi } from '../../database/donasi.model';

/* eslint-disable-next-line */
export interface AddProps {}

const StyledAdd = styled.div`
  margin-top: 1.9rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .p {
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

        input.number {
          text-align: right;
        }
      }

      .error {
        color: #d44a40;
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

    button[disabled] {
      background-color: #ddd;
    }
  }
`;
type formError = {
  name?: string;
  amount?: string;
};

// Database.GetDatabase().then((db) => {
//   if (db) {
//     serverData.pagelist.forEach((item) => {
//       console.log(item);
//       db.donasi
//         .findOne({
//           selector: {
//             id: item.id,
//           },
//         })
//         .exec()
//         .then((doc) => {
//           if (!doc) {
//             db.donasi.insert({
//               amount: item.amount,
//               createdAt: Date.parse(item.createdAt),
//               id: item.id,
//               name: item.name,
//               phone: item.phone || '',
//               sync: item.sync ? 1 : 0,
//               syncedAt: Date.parse(item.syncedAt),
//             });
//           }
//         });
//     });
//   }
// });
// add gql mutation

function Add() {
  const saveToLocal = (values) => {
    Database.GetDatabase().then((db) => {
      if (db) {
        db.donasi.insert(values);
      }
    });
  }
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
        onSubmit={async (values: IDonasi, { setSubmitting, resetForm }) => {
          const nanoid = customAlphabet(
            '1234567890abcdefhijklmnopqrstuvwxyz',
            10
          );
          values.id = nanoid();
          values.amount = +values.amount;
          values.createdAt = Date.now();
          try {
            saveToLocal(values);
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
            <div className="p">
              <label>
                <span className="caption">Name</span>
                <Field type="text" name="name" />
              </label>
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="p">
              <label>
                <span className="caption">Phone</span>
                <Field type="text" name="phone" />
              </label>
            </div>
            <div className="p">
              <label>
                <span className="caption">Amount</span>
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
