export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object' && stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) {
    return true
  } 

  return false
}
