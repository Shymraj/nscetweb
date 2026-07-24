import React, { useEffect } from "react";
import governingPdf from "./governing.pdf";

function GoverningCouncil() {
  useEffect(() => {
    window.open(governingPdf, "_blank");
  }, []);

  return (
    <div style={{ padding: "140px 20px", textAlign: "center", minHeight: "60vh", fontFamily: "var(--font-body)" }}>
      <h2>Opening Governing Council Document...</h2>
      <p style={{ marginTop: "16px", fontSize: "1.05rem" }}>
        If the PDF does not open automatically,{" "}
        <a href={governingPdf} target="_blank" rel="noreferrer" style={{ color: "#0d3b8e", fontWeight: "bold", textDecoration: "underline" }}>
          click here to view Governing Council PDF
        </a>.
      </p>
    </div>
  );
}

export default GoverningCouncil;
