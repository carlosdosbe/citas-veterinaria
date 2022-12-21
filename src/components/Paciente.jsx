import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const MySwal = withReactContent(Swal);

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    Swal.fire({
      title: "¿Segurx que deseas eliminar este paciente?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      showDenyButton: false,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire("Eliminado!", "", "success");
      }
    });
  };

  /*const handleEditar = () => {
    setPaciente(paciente);

    Swal.fire({
      title: "Editado",
      icon: "success",
    });
  };*/

  return (
    <div className="my-5 bg-indigo-200 shadow-md rounded-lg py-2 px-3">
      <p className="font-bold text-gray-700">
        Nombre: {""}
        <span>{nombre}</span>
      </p>

      <p className="font-bold text-gray-700">
        Propietario: {""}
        <span>{propietario}</span>
      </p>

      <p className="font-bold text-gray-700">
        Email: {""}
        <span>{email}</span>
      </p>

      <p className="font-bold text-gray-700">
        Fecha: {""}
        <span>{fecha}</span>
      </p>

      <p className="font-bold text-gray-700">
        Sintomas: {""}
        <span>{sintomas}</span>
      </p>

      <div className="flex justify-evenly py-3">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
