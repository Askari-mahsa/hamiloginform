import Header from "Component/Header/Header";
import React from "react";
import { useState, useEffect } from "react";
import { useApi } from "lib/hooks";
import Modal from "Component/EditComponent/EditComponent";
import SearchComponent from "Component/SearchComponent/SearchComponent";
import { Loading } from "Component/utils/Loading";
import ReactPaginate from "react-paginate";
import "./Home.css";
const Home = () => {
	const { data, isLoading, error } = useApi(
		"https://jsonplaceholder.typicode.com/users"
	);
	let itemsPerPage = 5;
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const items = [1, 2];
	const [searchResults, setSearchResults] = useState([]);
	const [user, setUser] = useState("");

	function handleSearch(e) {
		setSearchResults(
			data.filter(
				(item) =>
					item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
					item.username.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	}
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(searchResults.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(searchResults.length / itemsPerPage));
	}, [searchResults, itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % searchResults.length;
		setItemOffset(newOffset);
	};

	useEffect(() => {
		setSearchResults(data);
	}, [data]);
	function editInfo(id) {
		setUser(data.find((user) => user.id === id));
	}
	const DataHeader = [
		{ title: "#" },
		{ title: "Name" },
		{ title: "username" },
		{ title: "Email" },
		{ title: "Address" },
		{ title: "Phone" },
		{ title: "company" },
		{ title: "Edit" },
	];
	if (isLoading) {
		return (
			<div className=" flex justify-center mt-[200px]">
				Loading...
				<Loading />
			</div>
		);
	}
	if (error) {
		return (
			<div className="flex justify-center mt-64 text-red-900 text-[50px]">
				404.Data Not Found
			</div>
		);
	}

	return (
		<div>
			<div>
				<Header />
				<div>
					<div className="py-2 min-w-full sm:px-6 flex justify-center ">
						<div className="overflow-hidden ">
							<SearchComponent onChange={handleSearch} />
							<table className="w-[1200px] mt-7">
								<thead className="bg-teal-400 text-white rounded-full">
									<tr className="">
										{DataHeader.map((item, index) => {
											return (
												<React.Fragment key={index}>
													<th className="text-md font-bold text-white-900  py-4 text-center">
														{item.title}
													</th>
												</React.Fragment>
											);
										})}
									</tr>
								</thead>
								<tbody className="bg-gray-100 ">
									{!searchResults && isLoading ? (
										<Loading />
									) : (
										currentItems &&
										currentItems.map((item) => {
											return (
												<tr key={item.id}>
													<td className=" py-4 whitespace-nowrap  text-center text-sm text-gray-500">
														{item.id}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.name}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.username}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.email}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.address.street}
													</td>
													<td className="py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.phone}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														{item.company.name}
													</td>
													<td className=" py-4 whitespace-nowrap text-sm text-center text-gray-500">
														<button onClick={() => editInfo(item.id)}>
															<Modal data={user} />
														</button>
													</td>
												</tr>
											);
										})
									)}
								</tbody>
							</table>
						</div>
					</div>

					<div className=" w-full h-10 bg-white">
						<ReactPaginate
							nextLabel={">>"}
							onPageChange={handlePageClick}
							pageCount={pageCount}
							previousLabel={"<<"}
							renderOnZeroPageCount={null}
							breakClassName="page-item"
							breakLinkClassName="page-link"
							containerClassName="pagination"
							activeClassName="active"
							pageClassName="page-item"
							pageLinkClassName="page-link"
							previousClassName="page-item"
							previousLinkClassName="page-link"
							nextClassName="page-item"
							nextLinkClassName="page-link"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
