import { MagnifyIcon } from "Assets/SvgIcon";
import React from "react";

const SearchComponent = ({ onChange }) => {
	return (
		<div className="mt-6 flex justify-center">
			<div className="relative">
				<input
					onChange={onChange}
					type="text"
					className="w-[500px] focus:outline-none focus-visible:none lock p-4 pl-10 rounded-full text-sm text-gray-500 bg-gray-50  border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
					placeholder="Search Name, UserName, ..."
					required
				/>
				<button className="flex justify-center gap-2 text-white absolute right-2.5 bottom-2.5 bg-teal-400 hover:bg-teal-500 focus:outline-none font-medium rounded-full text-sm px-4 py-2">
					<MagnifyIcon className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" />
				</button>
			</div>
		</div>
	);
};
export default SearchComponent;
