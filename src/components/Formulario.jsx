import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Error from "./Error";
import Paciente from "./Paciente";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const MySwal = withReactContent(Swal);
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      MySwal.fire({
        title: <p>Todos los datos son obligatorios</p>,
        confirmButtonText: "OK",
        icon: "error",
      });
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
      Swal.fire({
        title: "Editado",
        icon: "success",
      });
    } else {
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
      Swal.fire({
        title: "Agregado",
        icon: "success",
      });
    }

    setNombre("");
    setEmail("");
    setPropietario("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 rounded-lg px-5">
      <div className="bg-indigo-400 rounded-lg py-1 px-5 mb-5 text-center">
        <h2 className="font-black text-3 text-purple-200 text-3xl">
          Formulario
        </h2>
        <p className="mb-5">Añadir paciente</p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-gray-200 shadow-lg rounded-lg py-5 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligarotios 🥲" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-800 uppercase font-bold"
          >
            Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-indigo-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-800 uppercase font-bold"
          >
            Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Propitario..."
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-indigo-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-800 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-indigo-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-800 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 rounded-lg mt-2"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-800 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-indigo-400"
            placeholder="Sintomas..."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          value={paciente.id ? "Editar" : "Agregar"}
          className="bg-indigo-600 uppercase font-bold text-white rounded-lg py-2 px-10 w-full hover:bg-indigo-800 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
}

export default Formulario;
