export function addToArr(arr, v) {
  if (Array.isArray(v)) arr.push(...v);
  else arr.push(v);
}

export function faMoney(data) {
  return (data / 10)
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function removeDuplicatesFromArr(arr) {
  return [...new Set(arr)];
}

export function createObjWithDefaultValues(self, defaults, options) {
  const res = Object.assign({}, defaults, options);
  Object.keys(defaults).forEach((k) => {
    self[k] = res[k];
  });
}

export function deleteKeyFromObj(obj, ...keys) {
  keys.forEach((k) => {
    delete obj[k];
  });
}

export function faDate(date) {
  if (date && date !== '0001-01-01T00:00:00')
    return new Date(date).toLocaleDateString('fa-IR');
  return null;
}

export function generateQueryStringFromAnObject(obj) {
  if (!obj) return;
  let q = '';
  for (const [key, value] of Object.entries(obj)) {
    if (value && value !== null) q += `${key}=${value}&`;
  }
  return q;
}

export function divideWordsFromSentence(str = '', numOfWords = 5) {
  return str && numOfWords
    ? str.split(' ').splice(0, numOfWords).join('  ')
    : '';
}

export function howMuchTimeDoesItTakeToRead(text, wpm = 265) {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
