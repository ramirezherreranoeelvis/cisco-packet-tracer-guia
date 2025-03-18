import "./consola.scss";
interface IConsola {
	title: string;
	width: string;
	children: React.ReactNode;
}
export default function Consola({ title, width, children }: IConsola) {
	return (
		<div
			className={`atom-consola ${width} min-h-20 max-h-64 rounded-sm flex flex-col overflow-hidden`}
		>
			<div className="bg-[#2e333f] flex items-center p-2 justify-between ">
				<h2 className="text-sm">{title}</h2>
				<div className="flex gap-2 items-center">
					<Point classPoint="green" />
					<Point classPoint="red" />
					<Point classPoint="yellow" />
				</div>
			</div>
			<div
				className="flex-1 bg-gray-900 p-4 box-content overflow-y-auto outline-none
                              text-[.80rem] font-light"
				contentEditable
			>
				{children}
			</div>
		</div>
	);
}
const Point = ({ classPoint }: { classPoint: string }) => (
	<div
		className={`point relative size-3 flex justify-center items-center ${classPoint}`}
	></div>
);
