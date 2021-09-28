import React from "react";
import "./Table.scss";
import PropTypes from "prop-types";

const Table = ({ data }) => {
    function renderDataCells() {
        return (
            <>
                {!data
                    ? null
                    : data.map((post, idx) => (
                          <tr key={idx}>
                              <th scope="row">{post.id}</th>
                              <td>{post.title}</td>
                              <td>{post.author}</td>
                              <td>
                                  <button className="btn btn-info">
                                      <i class="fas fa-edit tableIcon" />
                                  </button>
                              </td>
                              <td>
                                  <button className="btn btn-danger">
                                      <i class="fas fa-trash tableIcon" />
                                  </button>
                              </td>
                          </tr>
                      ))}
            </>
        );
    }

    return (
        <table className="dkTable table table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Post Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{renderDataCells()}</tbody>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Table;
