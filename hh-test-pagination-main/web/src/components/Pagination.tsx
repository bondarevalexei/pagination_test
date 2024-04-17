import React from "react";

export default function Pagination({
  setPage,
  currentPage,
  maxPage,
}: {
  setPage: any;
  currentPage: number;
  maxPage: number;
}) {
  const pages = [];

  if (currentPage % 10 === 0) {
    for (let index = currentPage - 10 + 1; index < currentPage + 1; index++) {
      pages.push(index);
    }
  } else {
    for (let index = Math.floor(currentPage / 10) * 10 + 1; index < Math.ceil(currentPage / 10) * 10 + 1; index++) {
      pages.push(index);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="btn" onClick={() => setPage(1)}>
        {"⟪"}
      </div>
      <div className="btn" onClick={() => setPage(currentPage - 1 < 1 ? 1 : currentPage - 1)}>
        {"⟨"}
      </div>
      {pages.map((page) => (
        <div
          key={page}
          className={page === currentPage ? "currbtn" : "btn"}
          onClick={() => {
            setPage(page);
          }}
        >
          {page}
        </div>
      ))}
      <div className="btn" onClick={() => setPage(currentPage + 1 > maxPage ? maxPage : currentPage + 1)}>
        {"⟩"}
      </div>
      <div className="btn" onClick={() => setPage(maxPage)}>
        {"⟫"}
      </div>
    </div>
  );
}
