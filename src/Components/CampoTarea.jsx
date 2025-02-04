import { Button } from "./Button";
export function CampoTarea({ id, remove }) {
	function removeTarea() {
		remove(id);
	}
	return (
		<div className="flex justify-center">
			<input type="checkbox" className="w-[30px] border-none outline-none no-underline"></input>
			<input type="text" placeholder="Escribe aqui" className="no-underline outline-none ml-auto text-center rounded-2xl hover:bg-lime-200"></input>
			<Button img="/delete.svg" funcion={removeTarea} tipo="remove" alt="remove" />
		</div>
	);
}
