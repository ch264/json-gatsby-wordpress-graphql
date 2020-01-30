import React from "react"; 
import { Link } from "gatsby";

import BlogIndex from '../pages/index';

const Pagination = ({ pageNumber, hasNextPage }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div>
      <h3>Navigation</h3>
      <div>
        {
          pageNumber > 1 (
            <Link to={pageNumber > 2 ? `/${pageNumber - 1}` : `/${BlogIndex}`}>
              Previous Page
            </Link>
          )
        }
        <span>{pageNumber}</span>
      </div>
    </div>
  )
}

export default Pagination;