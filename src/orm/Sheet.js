import _ from 'lodash'

class Sheet {
  constructor() {
    /**
     * [
     *     [cell1, cell2, ...], // row1
     *     [cell1, cell2, ...]  // row2
     * ]
     */
    this.sheet = [];
  }

  addRow(data) {
    if (_.isEmpty(data) || _.isUndefined(data)) {
      data = [];
    }

    this.sheet.push(data);
  };

  dump() {
    return this.sheet;
  };
}

export default Sheet;