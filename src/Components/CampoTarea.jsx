import { useState } from "react";
import { Button } from "./Button";
export function CampoTarea({ id, remove }) {
	const [check,setCheck]=useState(false)
	const clasesInputBase="outline-none ml-auto text-center rounded-2xl hover:bg-lime-200 "
	function removeTarea() {
		remove(id);
	}
	function completarTarea(){
		setCheck(!check)
	}
	return (
		<div className="flex justify-center">
			<Button img={check?"checkbox-check.svg":"/checkbox-unchecked.svg"} funcion={completarTarea} tipo="checkbox" alt="checkbox"/>
			<input type="text" placeholder="Escribe aqui" className={(check?"line-through text-lime-500 hover:text-black" : "").concat(" ",clasesInputBase)}></input>
			<Button img="/delete.svg" funcion={removeTarea} tipo="remove" alt="remove" />
		</div>
	);
}