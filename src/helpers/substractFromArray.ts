/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual'

const substractFromArray = <P extends any[] = []>(arr: any, value: any): P => {
  if (!Array.isArray(arr)) {
    return [] as any
  }

  const index = arr.findIndex((valueInOriginal) => isEqual(valueInOriginal, value))

  if (index === -1) {
    return arr as P
  }

  const newArray = [...arr]

  newArray.splice(index, 1)

  return newArray as P
}

export default substractFromArray
