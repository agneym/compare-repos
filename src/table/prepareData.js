function prepareData(comparison, data) {
  data.data = comparison.applyFn ? comparison.applyFn(data.data) : data.data;
  return data;
}

export default prepareData;