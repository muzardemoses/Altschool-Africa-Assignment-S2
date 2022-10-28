import React from "react";
import { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate";
import "../Assets/styles/users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=45")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
        //.then((json) => setUsers(json));
      });
  }, []);

  //console.log(users);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user" key={user.login.uuid}>
          <img src={user.picture.large} alt={user.name.first} />
          <div className="user-info">
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
            <p>{user.location.city}</p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="users-main">
      <div className="users">
        <h1 className="user-i">Users Profile Cards</h1>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="user-grid">{displayUsers}</div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </>
        )}
      </div>
      <div className="paginate">
        {/* pagination buttons for 1, 2, 3, 4, prev and next */}
      </div>
    </div>
  );
};

