import { Tarea } from "./Components/Tarea";
import { Footer } from "./Components/Footer";
export function App() {
    return (
        <>
            <h1 className="text-center font-bold text-7xl text-violet-500 ">
                To <span className="text-lime-400">Do</span> web
            </h1>
            <div className="flex justify-center mt-10 sm:m-10 gap-2">
                <Tarea text="Tareas Diarias" />
            </div>
            <Footer />
        </>
    );
}
