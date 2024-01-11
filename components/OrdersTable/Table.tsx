import React from 'react';
import TableRow from './TableRow';
import { TableProps} from '@/types/types';




const Table: React.FC<TableProps> = ({ headers, data }) => {

  const renderHeaderTable = () => (
      <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
    )
  
  const renderTableRow = () =>(
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} rowData={row} />
        ))}
      </tbody>
    )
  
  return (
    <table>
      <thead>

       {renderHeaderTable()}

      </thead>

      {renderTableRow()}
      
    </table>
  );
};

export default Table;