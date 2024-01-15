import { jsPDF } from "jspdf";
import fs from 'fs';
import moment from "moment";

const doc : jsPDF | undefined = new jsPDF();

const dir: string  = './target';
const timestamp: string = moment().format('YYYYMMDD_HHmmss')

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

export const print = (text: string) => {
    doc.text(text, 10, 10);
    doc.save(`${dir}/result_${timestamp}.pdf`);
}

module.exports = {
    print: print
}


