export function Button({img, name, href}){
    if(img){
        return(
            <a className="p-3 hover:cursor-pointer hover:scale-105 hover:rounded-2xl hover:bg-violet-500 transition-all ease-in" href={href} target="_blank"><img className="w-[30px] invert" src={img} alt={name}/></a>
        )
    }else{
        return(
            <a className="p-3 hover:cursor-pointer hover:scale-105 text-white hover:rounded-2xl hover:bg-violet-500 ease-in duration-100 text-[18px]" href={href} target="_blank">{name}</a>
        )
    }
}