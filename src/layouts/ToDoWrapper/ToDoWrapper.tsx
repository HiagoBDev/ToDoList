import add from '../../assets/add.svg'
import ToDoCard from '../../components/ToDoCard/ToDoCard'

export default function ToDoWrapper() {
  return (
    <main className=' bg-[#202225] w-[80%] flex flex-col gap-10 rounded-xl min-h-60 mt-10 border border-[#2f9e44] shadow-md shadow-[#458550]'>
      <div className=' flex justify-end items-center'>
        <button className=' pt-3 pr-3 flex gap-2'> 
          <p className=" text-white text-xl">Add</p>
          <img src={add} alt="add button" className=' w-8 h-8' />
        </button>
      </div>
      <div className=' flex flex-col gap-3'>
        <ToDoCard title='Limpar casa' date='07/19/2024' description='banheiro, cozinha, quarto'/>
        <ToDoCard title='Fazer comida' date='07/19/2024' description='asdasdaasdasdadasdasdadasaasdadaasdasdaasdasdadasdasdadasaasdada'/>
        <ToDoCard title='Title' date='07/19/2024' description='asdasdaasdasdadasdasdadasaasdadaasdasdaaasdasdasdasdasdasdasdasdsadasdasdasdadasdasdadasaasdada'/>
      </div>
    </main>
  )
}
