import React from 'react';

function PatientRow({patient, onDeleteClick}) {

  return (
    <tr className={patient.deceased ? 'deceased' : null}>
      <td>
        <button onClick={() => onDeleteClick(patient)}>Delete</button>
      </td>
      <td>{patient.id}</td>
      <td>{patient.name}</td>
      <td>
        {
          typeof patient['side_effects'] === 'string' 
          ? patient['side_effects'] 
          : patient['side_effects'].join(', ')
        }
        </td>
    </tr>
  )
}

export default PatientRow;