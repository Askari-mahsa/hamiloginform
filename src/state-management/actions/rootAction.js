export const ProductEditAction = (id) => ({
	type: EditAction,
	payload: id,
});
export const ProductSearchAction = (name) => ({
	type: SearchAction,
	payload: name,
});
