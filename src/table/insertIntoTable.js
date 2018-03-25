import comparisons from '../Comparisons';
import prepareRow from './prepareRow';
import createDataObject from './createDataObject';

function insertIntoTable(table, heading1, heading2, data1, data2, name1, name2) {
  comparisons.forEach(comparison => {
    const firstData = createDataObject(comparison, data1);
    const secondData = createDataObject(comparison, data2);
    const row = prepareRow(comparison, firstData, secondData);
    table.appendChild(row);
  });
}

export default insertIntoTable;