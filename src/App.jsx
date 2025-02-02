import { Tareas } from "./Tareas";
export function App() {
	return (
		<>
			<h1 className="text-center font-bold text-7xl text-violet-500 ">
				To <span className="text-lime-400">Do</span> web
			</h1>
            <div className="flex justify-center m-10 gap-2">
                {/* Tareas Diarias */}
                <Tareas text="Diarias"/>
                {/* Tareas Semanales */}
                <Tareas text="Semanales"/> 
            </div>
		</>
	);
}
