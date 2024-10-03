export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override toString method
  toString() {
    return `[object ${this._code}]`;
  }

  // Optional: Custom string representation for console logging
  toStringRepresentation() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
