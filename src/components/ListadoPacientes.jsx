import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  /*const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (pacientes.length > 0) {
      console.log("Nuevo paciente 🤗");

      MySwal.fire({
        title: <p>Nuevo paciente agregado</p>,
        confirmButtonText: "OK",
        icon: "success",
      });
    }
  }, [pacientes]);*/

  return (
    <div className="md:w-1/2 lg:w-3/5 p-5 bg-indigo-400 rounded-lg md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-white text-center">
            Pacientes
          </h2>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-white text-center">
            Por el momento no hay pacientes registrados 🤗
          </h2>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
