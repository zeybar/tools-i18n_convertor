import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import xlsx from 'node-xlsx'

import i18nOrm from '../orm/i18n'
import sheetOrm from '../orm/sheet'

class parseConfigs {
  constructor(Configs) {
    this.Configs = Configs;
    /**
     * [
     *     {
     *         name: "sheet name",
     *         data: [
     *             [cell1, cell2, ...], // row1
     *             [cell1, cell2, ...]  // row2
     *         ]
     *     },
     *     ...
     * ]
     */
    this.Sheets = [];
  }

  collect() {
    let me = this;
    let parseConfig = me.Configs.parse;
    let pathConfig = me.Configs.path;

    return new Promise((resolve) => {
      let i18n = new i18nOrm();

      _.each(parseConfig, (lang) => {
        let files = fs.readdirSync(pathConfig.i18n + '/' + lang);
        _.each(files, (filename) => {
          let data = require(pathConfig.i18n + '/' + lang + '/' + filename);
          i18n.add(filename, lang, data);
        });
      });

      resolve(i18n.dump());
    })
  };

  dump(i18n) {
    let me = this;
    let parseConfig = me.Configs.parse;
    let pathConfig = me.Configs.path;

    let schema = {};
    _.each(i18n, function(fileData, fileName) {
      schema[fileName] = {};
      _.each(fileData, function(data, lang) {
        _.each(data, function(value, column) {
          schema[fileName] = parseColumn(schema[fileName], column, lang, value);
        });
      });
    });

    // build sheets
    _.each(schema, function(fileData, fileName) {

      let sheet = new sheetOrm();
      sheet.addRow(['column', ...parseConfig]);

      _.each(fileData, function(columnValue, column) {
        let cells = [];
        cells.push(column);
        _.each(parseConfig, function(lang, key) {
          cells.push(columnValue[lang]);
        });
        sheet.addRow(cells);
      });
      me.addSheet(fileName, sheet);
    });

    fs.writeFileSync(
      path.join(pathConfig.excel),
      xlsx.build(this.Sheets),
      'binary'
    );
  };

  addSheet(name, sheet) {
    // 添加一个sheet页面到workbook
    if (!(sheet instanceof sheetOrm)) {
      throw new Error('Invalid sheet type: ' + (typeof sheet));
    }

    this.Sheets.push({
      "name": name,
      "data": sheet.dump()
    });
  };
}

function parseColumn(fileSchema, column, lang, value) {
  if (typeof value == "string") {
    if (!fileSchema.hasOwnProperty(column)) {
      fileSchema[column] = {}
    }
    fileSchema[column][lang] = value
  } else {
    _.each(value, (data, key) => {
      fileSchema = parseColumn(fileSchema, column + '|' + key, lang, data)
    });
  }

  return fileSchema;
}

export default parseConfigs;