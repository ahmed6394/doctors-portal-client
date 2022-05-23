import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, speciality, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          for="delete-confirm-modal"
          class="btn  btn-xs btn-error modal-button"
          onClick={() => setDeletingDoctor(doctor)}
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
