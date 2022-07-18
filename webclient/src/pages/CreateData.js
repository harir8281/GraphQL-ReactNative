import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import "./style/createData.css";
import { CREATE_USER_MUTATIONS } from "../graphql/graphql";
function CreateData() {
  //create- user states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState();
  const [nationality, setNationality] = useState("");


  const [CreateUser] = useMutation(CREATE_USER_MUTATIONS);

  return (
    <div className="main-container">
      <div className="create-data-input-container">
        Createuser
        <input
          className="create-data-input"
          type="text"
          placeholder="Name.."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="create-data-input"
          type="text"
          placeholder="username.."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="create-data-input"
          type="text"
          placeholder="age.."
          onChange={(e) => {
            setAge(parseInt(e.target.value));
          }}
        />

        <select onChange={(e)=>setNationality(e.target.value)} className="country-select">
        <option value="" selected disabled hidden>Select your country</option>
          <option value="CANADA"> CANADA</option>
          <option value="ENGLAND">ENGLAND</option>
          <option value="GERMANY">GERMANY</option>
          <option value="FRANCE">FRANCE</option>
          <option value="UKRINE">UKRINE</option>
          <option value="INDIA">INDIA</option>
        </select>

        <button
          onClick={() => {
            CreateUser({
              variables: { input: { name, username, age, nationality } },
            });
            window.location.reload(false);
          }}
        >
          Add user
        </button>
      </div>
    </div>
  );
}

export default CreateData;
