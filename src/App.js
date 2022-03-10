import './App.css';
import {React, useState, useEffect} from 'react';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(patientData => setPatients(patientData))
  },[])

  function handlePatientFormSubmit(newPatient) {
    fetch('http://localhost:3000/patients', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPatient)
    })
    .then(response => response.json())
    .then(newPatientData => setPatients([...patients, newPatientData]));
  }

  function handlePatientSearch(searchedPatient) {
    setSearch(searchedPatient)
  }

  function handleDeletePatient(deletedPatient) {
    fetch(`http://localhost:3000/patients/${deletedPatient.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(setPatients(patients.filter(patient => patient.id !== deletedPatient.id)));
  }

  function searchEffects(patient) {
    if (typeof patient['side_effects'] === 'string') {
      return (patient['side_effects'].toLowerCase().includes(search.toLowerCase()));
    }
    else {
      return patient['side_effects'].join(', ').toLowerCase().includes(search.toLowerCase());
    }
  }

  const filteredPatients = patients.filter(patient => {
    return ((patient.name.toLowerCase().includes(search.toLowerCase())) || (searchEffects(patient) === true))
  })

  return (
    <div className="root">
      <Header onPatientSearch={handlePatientSearch} search={search}/>
      <div className="content">
        <NewPatientForm onPatientFormSubmit={handlePatientFormSubmit} />
        <PatientList patients={filteredPatients} onDeleteClick={handleDeletePatient}/>
      </div>
    </div>
  );
}

export default App;
