import { useState, useEffect } from "react";
import axios from "axios";
//import Note from "./Note";
const AppEffect = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  /* useEffect(() => {
    //console.log("effect");

    const eventHandler = (response) => {
      //console.log("promise fulfilled");
      setNotes(response.data);
      //console.log(notes);
    };

    const promise = axios.get("http://localhost:3001/notes");
    promise.then(eventHandler);
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3001/notes"
        );
        setNotes(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(notes);
  //console.log("render", notes.length, "notes");
};
export default AppEffect;
