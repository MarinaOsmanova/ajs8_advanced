export default function orderByProps(obj, props) {
  const result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }
  return result.sort((a, b) => {
    const indexa = props.indexOf(a.key); // индекс первого ключа в props
    const indexb = props.indexOf(b.key); // индекс второго ключа в props
    if (indexa < 0 && indexb < 0) {
      // оба ключа отсутствуют в props, нужен алфавитный порядок
      if (a.key > b.key) {
        return 1;
      }
      return a.key < b.key ? -1 : 0;
    }
    if (indexa >= 0 && indexb >= 0) {
      // оба ключа есть в props, сортируем по индексу в массиве props
      if (indexa > indexb) {
        return 1;
      }
      return indexa < indexb ? -1 : 0;
    }
    return indexa >= 0 ? -1 : 1;
  });
}
