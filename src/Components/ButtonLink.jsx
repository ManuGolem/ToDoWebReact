export function ButtonLink({ img, name, href, className }) {
	if (img) {
		return (
			<a
				className="p-3 hover:cursor-pointer hover:scale-105 hover:rounded-2xl hover:bg-violet-500 transition-all ease-in"
				href={href}
				target="_blank"
			>
				<img className="w-[30px] invert" src={img} alt={name} />
			</a>
		);
	} else {
		return (
			<a
				className={`${className} p-3 hover:cursor-pointer hover:text-white hover:scale-105 hover:rounded-2xl hover:bg-violet-500 ease-in duration-200 text-[18px] `}
				href={href}
				target="_blank"
			>
				{name}
			</a>
		);
	}
}
