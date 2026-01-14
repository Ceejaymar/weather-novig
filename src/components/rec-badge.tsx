type RecBadge = {
	color: string;
	icon: string;
	label: string;
};

export default function RecBadge({ color, icon, label }: RecBadge) {
	return (
		<div
			className={`flex items-center gap-2 px-3 py-1 rounded-md border text-sm font-semibold ${color}`}
		>
			<span>{icon}</span>
			<span>{label}</span>
		</div>
	);
}
