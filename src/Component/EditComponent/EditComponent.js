import React, { useState } from "react";
import { EditIcon } from "Assets/SvgIcon";
const Modal = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className=" text-black 
      font-bold px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1"
				type="button"
				onClick={() => setShowModal(true)}
			>
				<EditIcon />
			</button>
			{showModal ? (
				<>
					<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
									<h3 className="text-xl text-teal-500 font-bold">Edit Info</h3>
									<button
										className="bg-transparent border-0 text-black float-right"
										onClick={() => setShowModal(false)}
									>
										<span className="text-gray-400 text-xl block py-0 rounded-full">
											x
										</span>
									</button>
								</div>
								<div className="relative p-6 flex-auto w-[444px]">
									<form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
										<label className="flex text-teal-500 text-md ml-3 mb-1">
											First Name
										</label>
										<input
											value={data.name}
											className="shadow appearance-none border w-full py-2 text-gray-500 rounded-full px-2"
										/>
										<label className="flex text-teal-500 text-md ml-3  mt-2 mb-1">
											Last Name
										</label>
										<input
											value={data.username}
											className="shadow appearance-none border w-full py-2 text-gray-500 rounded-full px-2"
										/>
										<label className="flex text-teal-500 text-md ml-3  mt-2 mb-1">
											Website
										</label>
										<input
											value={data.website}
											className="shadow appearance-none border w-full py-2 text-gray-500 rounded-full px-2"
										/>
										<label className="flex text-teal-500 text-md ml-3  mt-2 mb-1">
											Company
										</label>
										<input
											value={data.company.name}
											className="shadow appearance-none border w-full py-2 text-gray-500 rounded-full px-2"
										/>
									</form>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="rounded-full text-white bg-red-700 hover:bg-red-900 background-transparent font-bold px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Cancle
									</button>
									<button
										className="text-white bg-teal-500 font-bold text-sm px-6 py-3 rounded-full shadow hover:bg-teal-600 outline-none focus:outline-none mr-1 mb-1"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Edit
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default Modal;
