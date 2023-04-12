import  React from 'react';

export default function Form({ person, setPerson, addPerson }) {
  function submitForm(event) {
    event.preventDefault();
    addPerson();
  }
  return (
    <form>
      <label>
        Name:
      <input
        name="name"
        type="text"
        value={person.name}
        onChange={(e) =>
          setPerson((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      </label>

      <label>
        lastname:
        <input
        name="lastname"
        type="text"
        value={person.lastname}
        onChange={(e) =>
          setPerson((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      </label>
      <label>
      Age:
      <input
        name="age"
        type="text"
        value={person.age}
        onChange={(e) =>
          setPerson((prev) => ({
            ...prev,
            age: e.target.value,
          }))
        }
      />
      </label> <br/><br/>
      <label>
      Age:
      <input
        name="age"
        type="text"
        value={person.age}
        onChange={(e) =>
          setPerson((prev) => ({
            ...prev,
            age: e.target.value,
          }))
        }
      />
      </label>
      <button onClick={submitForm}>Add</button>
    </form>
  );
}