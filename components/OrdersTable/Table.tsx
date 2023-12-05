import React from 'react';
import TableRow from './TableRow';
import { TableProps} from '@/types/types';




const Table: React.FC<TableProps> = ({ headers, data }) => {

  
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} rowData={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;