import PageBtn from "./subcomp/PageBtn";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const PageNumbers = 3456;
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(10);
  return (
    <div className="pag">
      <div className="buttons">
        <PageBtn id="words" btnName={"Өмнөх"} btnClass={"page-btn"} />
        <div className="numbers">
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
          </Link>

          <PageBtn btnName={currentPage} btnClass={"page-btn-active"} />

          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={currentPage + 1} btnClass={"page-btn"} />
          </Link>

          {/* <p>...</p>
          <PageBtn btnName={PageNumbers} /> */}
        </div>
        <PageBtn id="words" btnName={"Дараах"} btnClass={"page-btn"} />
      </div>
    </div>
  );
}
