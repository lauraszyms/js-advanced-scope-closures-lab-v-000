function produceDrivingRange (distance) {
  return function (startStreet, endStreet) {
    let street1 = parseInt(startStreet);
    let street2 = parseInt(endStreet)
    if (street1 >= street2) {
      let blocks = street1 - street2;
      if (blocks <= distance) {
        return `within range by ${distance - blocks}`
      } else {
        return `${blocks - distance} blocks out of range`
      }
    } else {
      let blocks = street2 - street1;
      if (blocks <= distance) {
        return `within range by ${distance - blocks}`
      } else {
        return `${blocks - distance} blocks out of range`
      }
    }
  }
}

function produceTipCalculator (percentage) {
  return function (amount) {
    return amount * percentage;
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
