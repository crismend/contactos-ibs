/* eslint-disable react/prop-types */

import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Contactos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Datos de Contactos</span>
          </p>

          {pacientes.map((paciente) =>
            <Paciente 
            key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente} 
            eliminarPaciente={eliminarPaciente}
            />
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Contactos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega tus Datos {''}
            <span className="text-indigo-600 font-bold">de Contactos</span>
          </p>
        </>
      )}



    </div>
  )
}

export default ListadoPacientes