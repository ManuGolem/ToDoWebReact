export function CampoTarea({ id, remove }) {
	function removeTarea() {
		remove(id);
	}
	return (
		<div className="flex justify-center">
			<p contentEditable="true" className="no-underline outline-none border-none ml-auto">
				Escribe aqui
			</p>
			<button onClick={removeTarea} className="ml-auto hover:scale-125 hover:cursor-pointer">
				<img className="w-[30px]" src="/delete.svg" alt="remove" />
			</button>
		</div>
	);
}
