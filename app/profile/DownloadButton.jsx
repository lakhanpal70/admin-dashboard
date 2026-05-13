"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const [mounted, setMounted] = useState(false);
  const [PDFDownloadLink, setPDFDownloadLink] = useState(null);
  const [TrainerPDFDocument, setTrainerPDFDocument] = useState(null);

  useEffect(() => {
    // Dynamically import both modules only on client side
    Promise.all([
      import("@react-pdf/renderer"),
      import("./TrainerProfilePdf"),
    ]).then(([pdfRenderer, pdfDoc]) => {
      setPDFDownloadLink(() => pdfRenderer.PDFDownloadLink);
      setTrainerPDFDocument(() => pdfDoc.TrainerPDFDocument);
      setMounted(true);
    });
  }, []);

  if (!mounted || !PDFDownloadLink || !TrainerPDFDocument) {
    return (
      <button
        disabled
        className="absolute top-3 right-3 mr-10 md:top-4 md:right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/50 text-white text-sm font-medium opacity-50 cursor-not-allowed"
      >
        <Download size={15} />
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<TrainerPDFDocument />}
      fileName="Karan_Malhotra_Profile.pdf"
      className="absolute top-3 right-3 mr-10 md:top-4 md:right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/50 hover:bg-blue-800 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
    >
      {({ loading }) =>
        loading ? (
          <span className="text-xs text-white">Preparing...</span>
        ) : (
          <>
            <Download size={15} />
            <span className="hidden sm:inline text-xs">Download PDF</span>
          </>
        )
      }
    </PDFDownloadLink>
  );
}