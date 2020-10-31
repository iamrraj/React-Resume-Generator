import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const getPrint = (name) => {
  const input = document.getElementById("divToPrint");
  html2canvas(input).then((canvas) => {
    document.body.appendChild(canvas);
    var imgWidth = 210;
    var pageHeight = 295;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    const imgData = canvas.toDataURL("image/png");
    window.open(imgData);
    const pdf = new jsPDF("p", "mm");
    var position = -2;
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    /* add extra pages if the div size is larger than a a4 size */
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(`${name}.pdf`);
  });
};

export default getPrint;
