import prepareColumn from './prepareColumn';
import prepareData from './prepareData';

function prepareRow(comparison, data1, data2) {
  const row = document.createElement('tr');
  const header = prepareColumn({ data: comparison.header, link: null });
  data1 = prepareData(comparison, data1);
  data2 = prepareData(comparison, data2);
  const column1 = prepareColumn(data1);
  const column2 = prepareColumn(data2);
  row.appendChild(header);
  row.appendChild(column1);
  row.appendChild(column2);
  return row;
}

export default prepareRow;