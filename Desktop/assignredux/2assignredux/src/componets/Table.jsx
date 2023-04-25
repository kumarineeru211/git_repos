import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const { buttonName, clickCount } = useSelector((state) => state);

  return (
    <table>
      <thead>
        <tr>
          <th>Button Name</th>
          <th>Click Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{buttonName}</td>
          <td>{clickCount}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
