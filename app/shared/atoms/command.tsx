interface ICommand {
	from: string;
	command: string;
}
export default function Command({ from, command }: ICommand) {
	return (
		<p>
			<span className="text-[#beb8ff]">{from} </span>
			{command}
		</p>
	);
}
