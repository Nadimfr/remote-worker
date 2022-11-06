import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <div className="main">
      <div className="titles">
        {props.titles.map((t, i) => (
          <h5 key={i}>{t.name}</h5>
        ))}
      </div>

      <div className="data">
        {props.data.map((t, i) => (
          <div className="row" key={i}>
            <a style={{ color: "black" }} href={`/${t.id}`}>
              {t.employee}
            </a>
            <h4>{t.destination}</h4>
            <h4>{t.status}</h4>
            <h4>{t.start}</h4>
            <h4>{t.delivery}</h4>
            <a style={{ color: "black" }} href={`/${t.id}`}>
              {t.tracking}
            </a>
            <a style={{ color: "black" }} href={`/${t.id}`}>
              {t.details}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
