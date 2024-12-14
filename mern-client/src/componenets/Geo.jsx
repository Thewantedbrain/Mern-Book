import React, { useEffect, useState } from 'react'
import axios from "axios";
import SingleBook from '../shop/SingleBook';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
export const Geo = () => {
  const factura = {
    numero: '123',
     producto:'1'
  }

  const generarPDF = () =>{
    const doc = new jsPDF();

    doc.text('factura',95,20)
    doc.text(`Numero: ${factura.numero}`,10,30)

    const column = ['numero', 'Factura'];
    const data = [
      [`${factura.numero}`,`${factura.producto}`]
    ];
    doc.autoTable({
      startY:30,
      head: [column],
      body: data
    })


    doc.save(`factura: ${factura.producto}.pdf`)
  }
  return(
    <div>
      <h4>Fecha</h4>
      <p>numero: {factura.numero}</p>
      <p>numero: {factura.producto}</p>
      <button onClick={generarPDF}>PDF</button>
    </div>
  )

}