import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen'>

      { pacientes && pacientes.length ? 
        (
            <>
                <h2 className='text-black text-3xl text-center'>Listado de Pacientes</h2>

                <p className='text-lg mt-5 text-center mb-7'>
                Administra tus <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                </p>

                <div className="md:h-screen overflow-y-scroll">
                { pacientes.map( (paciente) => {

                    return(
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )
                })}
                </div>
            </> 
        )
        :
        (
            <>
                <h2 className='text-black text-3xl text-center'>No Hay Pacientes</h2>

                <p className='text-lg mt-5 text-center mb-7'>
                Comienza agregando pacientes <span className='text-indigo-600 font-bold'>y aparecerán Acá</span>
                </p>
            </>
        )
      }  

    </div>
  )
}

export default ListadoPacientes
