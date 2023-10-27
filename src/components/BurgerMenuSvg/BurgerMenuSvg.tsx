const BurgerMenuSvg = ({ open }: { open: boolean }) => {
	return (
		<>
			{!open ? (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="3em">
					<g stroke="#fff" strokeLinecap="round" strokeWidth={2}>
						<path d="M4 18h16M4 12h16M4 6h16" />
					</g>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#fff"
					viewBox="0 0 24 24"
					width="3.5em"
				>
					<path
						fill="#fff"
						strokeWidth={0}
						d="M6.995 7.006a1 1 0 0 0 0 1.415l3.585 3.585-3.585 3.585a1 1 0 1 0 1.414 1.414l3.585-3.585 3.585 3.585a1 1 0 0 0 1.415-1.414l-3.586-3.585 3.586-3.585a1 1 0 0 0-1.415-1.415l-3.585 3.585L8.41 7.006a1 1 0 0 0-1.414 0Z"
					/>
				</svg>
			)}
		</>
	);
};

export { BurgerMenuSvg };
