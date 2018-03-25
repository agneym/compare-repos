function prepareColumn(data) {
  const column = document.createElement('td');
  const linkText = document.createTextNode(data.data);
  if (data.link) {
    const anchor = document.createElement('a');
    anchor.href = data.link;
    anchor.appendChild(linkText);
    column.appendChild(anchor);
  } else {
    column.appendChild(linkText);
  }
  return column;
}

export default prepareColumn;