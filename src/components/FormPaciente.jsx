/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Error from "./Error"


const FormPaciente = ({ pacientes, setPacientes, paciente, setPaciente }) => {



  const [alta, setAlta] = useState('')
  const [propietario, setPropietario] = useState('')
  const [nombre, setNombre] = useState('')

  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')

  const [email, setEmail] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setAlta(paciente.alta);
      setPropietario(paciente.propietario);
      setNombre(paciente.nombre);

      setDireccion(paciente.direccion);
      setTelefono(paciente.telefono)

      setEmail(paciente.email);
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const onChangePaciente = (e) => {
    if (e.target.name === 'nombre') {
      setNombre(e.target.value)
    } else if (e.target.name === 'Propietario') {
      setPropietario(e.target.value)
    } else if (e.target.name === 'Email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'alta') {
      setAlta(e.target.value)
    } else if (e.target.name === 'sintomas') {
      setSintomas(e.target.value)
    } else if (e.target.name === 'direccion') {
      setDireccion(e.target.value)
    } else if (e.target.name === 'telefono') {
      setTelefono(e.target.value)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if ([nombre, propietario, email, alta, sintomas, direccion, telefono].includes('')) {
      setError(true)
      return
    } else {
      setError(false)
    }

    const generarId = () => {
      const random = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36)
      return random + fecha
    }

    const arregloPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      direccion,
      telefono
    }

    if (paciente.id) {
      //editando
      arregloPacientes.id = paciente.id
      const pacientesActualizados = pacientes.map(statePaciente => statePaciente.id === paciente.id ? arregloPacientes : statePaciente)
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      // nuevo registro
      arregloPacientes.id = generarId()
      setPacientes([...pacientes, arregloPacientes])

    }

    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('')
    setDireccion('')
    setTelefono('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario de Contactos</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade un {''} <span className="text-indigo-600 font-bold ">Contacto</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleOnSubmit}
      >

        {error && <Error mensaje='todos los campos son obligatorios' />}

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Fecha de contacto
          </label>
          <input
            name="alta"
            id="alta"
            type="date"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del Evangelista
          </label>
          <input
            name="Propietario"
            id="Propietario"
            type="text"
            placeholder="Nombre Evangelista"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={onChangePaciente}
          />
        </div>



        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre del Contacto
          </label>
          <input
            name="nombre"
            id="mascota"
            type="text"
            placeholder=" Nombre del Contacto"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">
            Direccion de Contacto
          </label>
          <input
            name="direccion"
            id="direccion"
            type="text"
            placeholder=" direccion del Contacto"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={direccion}
            onChange={onChangePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">
            Telefono de Contacto
          </label>
          <input
            name="telefono"
            id="telefono"
            type="tel"
            placeholder=" Telefono del Contacto"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={onChangePaciente}
          />
        </div>



        <div className="mb-5">
          <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            name="Email"
            id="Email"
            type="Email"
            placeholder="Email"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={onChangePaciente}
          />
        </div>


        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            name="sintomas"
            className="border w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={onChangePaciente}
          />
        </div>

        <input
          type="submit"
          className="border bg-indigo-600 w-11/12 p-3 mt-3 text-white uppercase ml-2 hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}

        />
      </form>
    </div>
  )
}

export default FormPaciente



