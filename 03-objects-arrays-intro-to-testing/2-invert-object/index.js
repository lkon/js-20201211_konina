/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return;
  }

  let invertedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!value) {
      invertedObject = {};
      break;
    }
    invertedObject[value.toString()] = key;
  }

  return invertedObject;
}
