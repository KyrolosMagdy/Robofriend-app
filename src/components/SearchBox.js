import React from "react";
	const SearchBox = ({searchField, searchChange}) => {
		console.log('SearchBox');
		return (
			<div className="pa2">
				<input 
				className="tc pa3 ba b--green bg-lightest-blue" 
				type="search" 
				placeholder="Type robofriend's Name"
				onChange={searchChange} 
				/>
			</div>
		);
	}





export default SearchBox;