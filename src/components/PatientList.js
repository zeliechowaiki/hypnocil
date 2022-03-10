import {React} from "react"
import PatientRow from "./PatientRow"

function PatientList({patients, onDeleteClick}) {

    return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {
              patients.map((patient) => {
                return (
                  <PatientRow key={patient.id} patient={patient} onDeleteClick={onDeleteClick} />
                )
              })
            }
          </tbody>
      </table>  
    );
}

export default PatientList;