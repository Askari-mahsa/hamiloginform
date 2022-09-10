import React from "react";
import { EditAction } from "state-management/actions/EditAction";
import { SearchAction } from "state-management/actions/SearchAction";

export const ProductReducer = function (action) {
	switch (action.type) {
		case EditAction:
			return [...state];
		case SearchAction:
			return [...state];
		default:
			break;
	}
};
