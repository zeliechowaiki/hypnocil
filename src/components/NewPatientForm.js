import {React, useState} from "react";

function NewPatientForm({onPatientFormSubmit}) {

  const [newPatient, setNewPatient] = useState({
    name: '',
    deceased: false,
    side_effects: 'dizziness'
  })

  function handlePatientFormChange(e) {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value
    })
  }

  function handlePatientFormSubmit(e) {
    e.preventDefault();
    onPatientFormSubmit(newPatient);
    setNewPatient({
      name: '',
      deceased: false,
      side_effects: 'dizziness'
    })
  }

  return(
    <>
      <form id="new-patient-form" onSubmit={e => handlePatientFormSubmit(e)}>
        <input id="patient-name" type="text" placeholder="Patient Name" name="name"
        value={newPatient.name} onChange={e => handlePatientFormChange(e)} />
          <select name="side_effects" id="side_effects" form="new-patient-form"
          value={newPatient['side_effects']} onChange={e => handlePatientFormChange(e)} >
            <option value="Dizziness">Dizziness</option>
            <option value="Nausea">Nausea</option>
            <option value="Somnambulism">Somnambulism</option>
            <option value="Memory">Memory</option>
            <option value="Allergy">Severe Allergic Reaction</option>
            <option value="Headache">Headache</option>
          </select>
        <input type="submit" value="Add Patient" />
      </form>
    </>
  )
}

export default NewPatientForm;