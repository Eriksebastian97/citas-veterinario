import React from "react";
import Paciente from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  //.map te va iterar una ves por cada elemento que halla en el arreglo de pacientes
  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Administra tus {""}{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

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
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Comieza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
