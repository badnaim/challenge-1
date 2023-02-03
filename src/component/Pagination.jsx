import PageBtn from "./subcomp/PageBtn";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const PageNumbers = 3456;
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="pag">
      <div className="buttons">

        {/* <link to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}> */}
          <PageBtn id="words" btnName={"Өмнөх"} btnClass={"inactive"} />
        {/* </link> */}

        {/* <Link
            to={`/page/${currentPage - 2}`}
            onClick={() => setCurrentPage(currentPage - 2)}
          >
            <PageBtn btnName={currentPage - 2} btnClass={"inactive"} />
          </Link> */}
        
        <div className="numbers">
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={currentPage - 1} btnClass={"inactive"} />
          </Link>

          <span>
            <PageBtn btnName={currentPage} btnClass={"active"} />
          </span>

          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={currentPage + 1} btnClass={"inactive"} />
          </Link>

          <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <PageBtn btnName={currentPage + 2} btnClass={"inactive"} />
          </Link>
          <span>
          <p>...</p>
          </span>
          

          <Link
            to={`/page/${currentPage + 3455}`}
            onClick={() => setCurrentPage(currentPage + 3455)}
          >
            <PageBtn btnName={PageNumbers} btnClass={"inactive"}/>
          </Link>
          
        </div>

        {/* <link to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}> */}
        <PageBtn id="words" btnName={"Дараах"} btnClass={"inactive"} />
        {/* </link> */}
        
      </div>
    </div>
  );
}
