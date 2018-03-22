import comparisons from './Comparisons';

function prepareColumn(text, link) {
  const column = document.createElement('td');
  const linkText = document.createTextNode(text);
  if(link) {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.appendChild(linkText);
    column.appendChild(anchor);
  } else {
    column.appendChild(linkText);
  }
  return column;
}

function prepareRow(comparison, data1, data2) {
  const row = document.createElement('tr');
  const header = prepareColumn(comparison.header);
  data1 = comparison.applyFn?comparison.applyFn(data1):data1;
  data2 = comparison.applyFn ? comparison.applyFn(data2) : data2;
  const column1 = prepareColumn(data1, comparison.link);
  const column2 = prepareColumn(data2, comparison.link);
  row.appendChild(header);
  row.appendChild(column1);
  row.appendChild(column2);
  return row;
}

function insertIntoTable(table, heading1, heading2, data1, data2, name1, name2) {
  comparisons.forEach(comparison=>{
    const row = prepareRow(comparison, data1[comparison.name], data2[comparison.name]);
    table.appendChild(row);
  });
}

export default insertIntoTable;