import { useState } from "react";
import { CampoTarea } from "./CampoTarea";
import { Button } from "./Button";
let id = 0;
export function Tarea({ text }) {
	const [tareas, setTareas] = useState([]);
	const [texto,setText]=useState("");
	const hayTareas = tareas.length;
	const claseHayTareas = hayTareas
		? "flex flex-col gap-5 mt-5 mb-5"
		: "hidden";
	function agregarNota() {
		if(texto.trim()==="") return;
		setTareas([...tareas, { id ,texto}]);
		id++;
		setText("");
	}
	function setTexto(e){
		setText(e.target.value)
	}
	function detectarEnter(e){
		if(e.key=="Enter"){
			agregarNota();
		}
	}
	function removeTarea(id) {
		setTareas(tareas.filter((tarea) => tarea.id !== id));
	}
	return (
		<div className="bg-lime-100 rounded-2xl p-5 justify-center items-center w-full sm:w-[50%] flex flex-col">
			<input type="text" className="text-2xl font-bold sm:text-5xl outline-none w-full text-center" defaultValue={text}></input>
			<div className="text-center">
				<div className="flex mt-5 justify-center gap-2">
					<input
						type="text"
						placeholder="Escriba aqui"
						className="outline-none text-center rounded-2xl hover:bg-lime-200 grow"
						value={texto}
						onChange={setTexto}
						onKeyDown={detectarEnter}
					></input>
					<Button img="add.svg" funcion={agregarNota} tipo="add" />
				</div>
				<div className={claseHayTareas}>
					{tareas.map((tarea) => (
						<CampoTarea key={tarea.id} id={tarea.id} remove={removeTarea} texto={tarea.texto} />
					))}
				</div>
			</div>
		</div>
	);
}
