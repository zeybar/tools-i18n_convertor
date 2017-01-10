import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import xlsx from 'node-xlsx'

import i18nOrm from '../orm/i18n'
import sheetOrm from '../orm/sheet'

class parseExcels {
  constructor(Configs) {
    this.Configs = Configs;
  }

  collect() {
    let me = this;
    let parseConfig = me.Configs.parse;
    let pathConfig = me.Configs.path;

    return new Promise((resolve) => {
      let Sheets = xlsx.parse(pathConfig.excel);

      let i18n = new i18nOrm();
      _.each(Sheets, (sheet) => {
          // sheet.name
          _.each(parseConfig, (lang, key) => {
            let langData = {};
            _.each(sheet.data, (value, line) => {
              if (line > 0) {
                parseColumn(langData, value[0], value[key + 1]);
              }
            });
            i18n.add(sheet.name, lang, langData)
          });
      });

      resolve(i18n.dump());
    })
  };

  dump(i18n) {
    let me = this;
    let pathConfig = me.Configs.path;

    _.each(i18n, function(fileData, fileName) {

      _.each(fileData, function(data, lang) {
        let jsConfig = "module.exports = " + JSON.stringify(data, null, 2) + ";";
        fs.writeFileSync(
          path.join(pathConfig.i18n, lang, fileName),
          jsConfig
        );
      });
    });
  };
}

function parseColumn(langData, column, value) {
  if (typeof value == 'undefined') {
    return langData
  }

  let tmp = column.split("|");
  if (tmp.length > 1) {
    addColumnValue(langData, tmp, value);
  } else {
    langData[column] = value;
  }

  return langData;
}

function addColumnValue(data, columnArray, value) {
  let column = columnArray.shift();

  if (columnArray.length >= 1) {
    if (!data.hasOwnProperty(column)) {
      data[column] = {}
    }

    data[column] = addColumnValue(data[column], columnArray, value);
  } else {
    if (!_.isNaN(parseInt(column))) {
      if (_.isEmpty(data)) {
        data = [];
      }
      data.push(value)
    } else {
      data[column] = value
    }
  }

  return data;
}

export default parseExcels;