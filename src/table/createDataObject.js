function createDataObject(comparison, data) {
  return {
    data: data[comparison.name],
    link: data[comparison.link]
  }
}

export default createDataObject;