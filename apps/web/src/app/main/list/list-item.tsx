import React from 'react';
import { IDonasi } from '../../data-access/donasi.model';

export interface ListItemProps {
  index: number;
  donasi: IDonasi;
}

export function ListItem(props: ListItemProps) {
  const d = props.donasi;
  return (
    <li key={d.id}>
      <div className="listNo">{props.index + 1}</div>
      <div className="listName">
        <h3>
          {d.name} {d.id}
        </h3>
        <p>{d.phone}</p>
      </div>
      <div>{d.amount}</div>
    </li>
  );
}

export default ListItem;
