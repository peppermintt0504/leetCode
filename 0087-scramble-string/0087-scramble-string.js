var isScramble = function (s1, s2) {
  const cache = new Map();
  function action(str, i) {
    if (str.length == 1) {
      return s2[i] == str;
    }
    const key = `${str},${i}`;
    if (cache.has(key)) {
        return cache.get(key);
    }
    let result = false;
    for (let j = 1; j < str.length; j++) {
      let left = str.slice(0, j);
      let right = str.slice(j);
      let leftRight = action(left, i) && action(right, i + left.length);
      if (leftRight) {
        result = true;
        break;
      }
      let rightLeft = action(right, i) && action(left, i + right.length);
      if (rightLeft) {
        result = true;
        break;
      }
    }
    cache.set(key, result);
    return result;
  }
  return action(s1, 0);
};