import _ from 'lodash'

class i18n {
  constructor() {
    /**
     * {
     *    filename1: {
     *      "en_US": {
     *        columnName1: columnValue1,
     *        columnName2: columnValue2
     *        ...
     *      }
     *    },
     *    filename2: {
     *      "en_US": {
     *        columnName1: columnValue1,
     *        columnName2: columnValue2
     *        ...
     *      }
     *    },
     *    ...
     * }
     */
    this.schema = {};
  }

  add(filename, lang, data) {
    if (_.isEmpty(data) || _.isUndefined(data)) {
      data = [];
    }

    if (!this.schema.hasOwnProperty(filename)) {
      this.schema[filename] = {}
    }

    this.schema[filename][lang] = data;
  };

  dump() {
    return this.schema;
  };
}

export default i18n;