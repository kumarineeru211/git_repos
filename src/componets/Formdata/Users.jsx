import * as React from 'react';

export default function Users({ users, onDelete, onEdit }) {
  return (
    <table>
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.lastname}</td>
          <td>{user.age}</td>
          
          <td>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </td>
          <td>
            <button onClick={() => onEdit(user.id)}>Edit</button>
          </td>
        </tr>
      ))}
    </table>
  );
}