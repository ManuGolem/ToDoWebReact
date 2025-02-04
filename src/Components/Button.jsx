export function Button({img,funcion,tipo,alt}) {
	const botonTipo= {
		"add": "hover:bg-violet-500 ml-auto",
		"remove" :"ml-auto hover:bg-red-500",
		"checkbox" :""
	}
    const clasesBase="hover:scale-125 hover:cursor-pointer hover:rounded-[8px] duration-200 active:scale-100"
	const clasesBoton=botonTipo[tipo].concat(" ",clasesBase)
    return (
		<button className={clasesBoton} onClick={funcion}>
			<img className="w-[40px]" src={img} alt={alt}/>
		</button>
	);
}
