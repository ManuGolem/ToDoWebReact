export function Button({img,funcion,tipo,alt}) {
    const clasesBase="hover:scale-125 hover:cursor-pointer hover:rounded-[8px] duration-200 active:scale-100"
	const clasesBoton=tipo=="add"? "mt-6 hover:bg-violet-500".concat(" ",clasesBase) : "ml-auto hover:bg-red-500".concat(" ",clasesBase)
    return (
		<button className={clasesBoton} onClick={funcion}>
			<img className="w-[40px]" src={img} alt={alt}/>
		</button>
	);
}
