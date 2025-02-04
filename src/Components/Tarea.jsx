import { useState } from "react";
import { CampoTarea } from "./CampoTarea";
import { Button } from "./Button";
export function Tarea({ text }) {
	const [tareas, setTareas] = useState([]);
	const hayTareas = tareas.length;
	const claseParrafos = hayTareas
		? "text-center text-gray-400 font-bold hidden mt-5"
		: "text-center text-gray-400 font-bold block mt-5";
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
			<div className="text-center">
				<Button img="/add.svg" funcion={agregarNota} tipo="add" />
				<p className={claseParrafos}>Sin tareas</p>
				<div className="flex flex-col gap-5 mt-5 mb-5">
					{tareas.map((tarea) => (
						<CampoTarea key={tarea.id} id={tarea.id} remove={removeTarea} />
					))}
				</div>
			</div>
		</div>
	);
}
