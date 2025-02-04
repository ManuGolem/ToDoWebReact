import { useState } from "react";
import { CampoTarea } from "./CampoTarea";
export function Tarea({ text }) {
	const [tareas, setTareas] = useState([]);
	const hayTareas = tareas.length;
	const claseParrafos = hayTareas
		? "text-center text-gray-400 font-bold hidden"
		: "text-center text-gray-400 font-bold block";
	function agregarNota() {
		const id = tareas.length;
		setTareas([...tareas, { id }]);
	}
	function removeTarea(id) {
		setTareas(tareas.filter((tarea) => tarea.id !== id));
	}
	return (
		<div className="bg-lime-100 rounded-2xl p-5 grid justify-center items-center">
			<h1 className="text-5xl font-bold text-center">Tareas {text}</h1>
			<div className="mt-5 text-center">
				<p className={claseParrafos}>Sin tareas</p>
				<div>
					{tareas.map((tarea) => (
						<CampoTarea key={tarea.id} id={tarea.id} remove={removeTarea} />
					))}
				</div>
				<button className="pt-6" onClick={agregarNota}>
					<img className="w-[40px] text-white hover:scale-125 hover:cursor-pointer" src="/add.svg" />
				</button>
			</div>
		</div>
	);
}
