export function Tarea({ text }) {
	return (
		<div className="bg-lime-100 rounded-2xl p-5 grid justify-center items-center">
			<h1 className="text-5xl font-bold text-center">Tareas {text}</h1>
			<div className="mt-5 text-center">
				<p className="text-center text-gray-400 font-bold">Sin tareas</p>
				<button className="pt-6">
                    <img className="w-[40px] text-white hover:scale-125 hover:cursor-pointer"src="/add.svg"/>
                </button>
			</div>
		</div>
	);
}
