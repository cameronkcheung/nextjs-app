export const Tag = ({ tag, className }) => {
	return (
		<div
			key={tag.id}
			className={`${className} flex items-center px-3 py-1 text-xs text-primary-600 transition-colors transform bg-primary-100 rounded-lg tracking-wide cursor-default select-none`}>
			<span>{tag.name}</span>
		</div>
	);
};
