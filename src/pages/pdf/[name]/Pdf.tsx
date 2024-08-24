"use client";

import { useRouter } from "next/router";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./pdf.module.css";
import { useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const Pdf = () => {
  const router = useRouter();
  const { name } = router.query;
  const pdf = `/docs/${name}`;

  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div style={{ backgroundColor: "#525659", margin: "-8px" }}>
      <Document
        file={pdf}
        className={styles.pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1.5}
            className={styles.page}
          />
        ))}
      </Document>
    </div>
  );
};

export default Pdf;
