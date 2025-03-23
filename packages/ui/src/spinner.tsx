export function Spinner() {
	return (
		<div className="shadow-base relative mx-auto flex size-11 items-center justify-center rounded-full bg-white">
			<img
				src="/images/icon.png"
				className="object-contain w-full h-full p-1.5"
			/>
			<div className="border-t-primary absolute inset-0 animate-spin rounded-full border-2 border-transparent" />
		</div>
	);
}

export default Spinner;
