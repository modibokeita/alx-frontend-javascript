export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf to cast to Number
  valueOf() {
    return this._size;
  }

  // Override toString to cast to String
  toString() {
    return this._location;
  }
}
