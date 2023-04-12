import React from 'react';
import { v4 as uuid } from 'uuidv4';

import Form from './Form';
import Profile from './Profile';
import Users from './Users';

const InputForm = ({ addUser }) => {
    const [currentPerson, setCurrentPerson] = React.useState(createNewUser());
    const [users, setUsers] = React.useState([]);
  
    function addUserToTable() {
      setUsers((prev) => {
        const existingUser = prev.findIndex(
          (user) => user.id === currentPerson.id
        );
        if (existingUser > -1) {
          const newUsersArray = [...prev];
          newUsersArray[existingUser] = currentPerson;
          return newUsersArray;
        }
        return [...prev, currentPerson];
      });
      setCurrentPerson(createNewUser());
    }
  
    function onUserDelete(id) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  
    function onUserEdit(id) {
      const user = users.find((x) => x.id === id);
      setCurrentPerson(user);
    }
  
    console.log(currentPerson);

  return (
      <>
      <Form
        person={currentPerson}
        setPerson={setCurrentPerson}
        addPerson={addUserToTable}
      />
      <Profile person={currentPerson} />
      <Users users={users} onDelete={onUserDelete} onEdit={onUserEdit} />
      </>
  );
};

export default InputForm;
