import React from 'react';


const Search = ({handleInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      // value={this.state.value}
      onChange={(event) => { handleInputChange(event.target.value)} }
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
