import { Injectable } from '@angular/core';

import { jsPDF } from 'jspdf';

import domtoimage from 'dom-to-image';

@Injectable({ providedIn: 'root' })
export class PDFService {
  create(page: HTMLElement, fileName: string): Promise<void> {
    const doc = new jsPDF({ orientation: 'l', format: 'letter', unit: 'in' });
    return new Promise((resolve, reject) => {
      domtoimage
        .toPng(page)
        .then((dataURL) => {
          // 👇 half-inch margin on 8.5 x 11 landscaoe
          doc.addImage(dataURL, 0.5, 0.5, 10, 7.5);
          doc.save(fileName);
          resolve();
        })
        .catch((error) => reject(error));
    });
  }
}
