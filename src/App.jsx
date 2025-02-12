import { Tarea} from "./Components/Tarea";
import { Footer} from "./Components/Footer";
export function App() {
	const fecha=Date.parse();
	console.log(fecha)
	return (
		<>
			<h1 className="text-center font-bold text-7xl text-violet-500 ">
				To <span className="text-lime-400">Do</span> web
			</h1>
            <div className="flex justify-center mt-10 sm:m-10 gap-2">
                {/* Tareas Diarias */}
                <Tarea text="Tareas Diarias"/>
                {/* Tareas Semanales */}
                {/* <Tarea text="Semanales"/>  */}
            </div>
			<Footer/>
		</>
	);
}
