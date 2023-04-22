import { useState, useEffect } from "react";
import Filter from "./includes/Filter";
import PersonForm from "./includes/PersonForm";
import Person from "./includes/Person";
import phoneService from "./services/phoneBook";

const PhoneBook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState([]);
  const [notifyMsg, setNotifyMsg] = useState({
    messageClass: null,
    message: null,
  });

  console.log("FilterPerson: ", filterPerson);

  const Notification = () => {
    if (notifyMsg.message === null) {
      return null;
    }
    return <div className={notifyMsg.messageClass}>{notifyMsg.message}</div>;
  };

  const updatedPersons = filterPerson.length > 0 ? filterPerson : persons;

  useEffect(() => {
    //console.log("effect");
    phoneService.getAll().then((initialPersons) => {
      //console.log("promise fulfilled");
      //console.log(response.data);
      setPersons(initialPersons);
      setFilterPerson(initialPersons);
    });
  }, []);
  //console.log(persons);
  const getNewName = (event) => setNewName(event.target.value);

  const getNewNumber = (event) => setNewNumber(event.target.value);

  const personAvailable = persons.filter((person) => person.name === newName);

  const addNewName = (event) => {
    event.preventDefault();
    const alertMsg = `${newName} is already added to phonebook, Replace old number with new number?`;
    const personObject = {
      name: newName,
      number: newNumber,
      created_at: new Date().toJSON(),
    };
    if (personAvailable.length > 0) {
      if (window.confirm(alertMsg)) {
        console.log(personAvailable[0].id);
        phoneService
          .update(personAvailable[0].id, personObject)
          .then((initialPerson) => {
            console.log("Updated: ", initialPerson);
            console.log("Ok here: ", persons);
            const updatedPerson = persons.map((p) => {
              if (p.id === initialPerson.id) {
                return { ...p, number: initialPerson.number };
              }
              return p;
            });
            setPersons(updatedPerson);
            setFilterPerson(updatedPerson);
          });
      }
    } else {
      phoneService.create(personObject).then((initialPersons) => {
        console.log("Create: ", initialPersons);
        setPersons(persons.concat(initialPersons));
        setFilterPerson(persons.concat(initialPersons));
        const n = {
          messageClass: "success",
          message: `The person '${newName}' added.`,
        };
        setNotifyMsg(n);
        setTimeout(() => {
          setNotifyMsg({});
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const filterByName = (event) => {
    console.log("Person: ", filterPerson);
    const filterValue = event.target.value;
    const filter = filterPerson.filter((person) => {
      return person.name.includes(event.target.value);
    });
    console.log("Filter: ", filter);
    filterValue ? setFilterPerson(filter) : setFilterPerson(persons);
  };

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService
        .remove(person.id)
        .then((res) => {
          //console.log(res);
          setPersons(persons.filter((p) => p.id !== person.id));
          setFilterPerson(persons.filter((p) => p.id !== person.id));
          if (res.statusText === "OK") {
            //alert(`${person.name} Deleted.`);
            const n = {
              messageClass: "error",
              message: `${person.name} Deleted.`,
            };
            setNotifyMsg(n);
            setTimeout(() => {
              setNotifyMsg({});
            }, 5000);
          }
        })
        .catch((error) => {
          const n = {
            messageClass: "error",
            message: `The person '${person.name}' was already deleted from server`,
          };
          setNotifyMsg(n);
          setTimeout(() => {
            setNotifyMsg({});
          }, 5000);
          setPersons(persons.filter((p) => p.id !== person.id));
          setFilterPerson(persons.filter((p) => p.id !== person.id));
        });
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification />
      <Filter filterByName={filterByName} />
      <h2>Add New</h2>
      <PersonForm
        addNewName={addNewName}
        getNewName={getNewName}
        newName={newName}
        getNewNumber={getNewNumber}
        newNumber={newNumber}
      />
      <h2>Persons</h2>
      {updatedPersons.map((person) => (
        <Person
          key={person.id}
          filterPerson={person}
          deletePerson={() => deletePerson(person)}
        />
      ))}
    </>
  );
};
export default PhoneBook;
