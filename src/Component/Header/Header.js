import React from "react";
import { User, DirectionDown } from "../../Assets/SvgIcon";
const Header = (data) => {
	return (
		<div>
			<div className="bg-gray-200 align-centerw-full justify-end h-20 flex">
				<div className="flex self-center">
					<div className=" self-center">
						<DirectionDown />
					</div>
					<div className="mr-4">
						<User />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
