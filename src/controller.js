import _ from 'lodash'
import parseConfigs from './output/parseConfigs'
import parseExcels from './input/parseExcels'

const configs = require('../config/config.json');

class Controller {
  constructor() {
    
  }

  run(option) {
    if (_.keys(configs).indexOf(option) === -1) {
      throw new Error('Invalid params:type: ' + option + ', it shall be included in: ' + JSON.stringify(_.keys(configs)));
    }

    if (option == 'output') {
      // i18n configs => i18n excel
      handler.output();
    }
    
    if (option == 'input') {
      // i18n excel => i18n configs
      handler.input();
    }
    
  }

  output() {
    let parseConfigsHandler = new parseConfigs(configs.output);
    return parseConfigsHandler.collect()
      .then((datas) => parseConfigsHandler.dump(datas))
      .catch((err) => console.error(err))
  };

  input() {
    let parseExcelsHandler = new parseExcels(configs.output);
    return parseExcelsHandler.collect()
      .then((datas) => parseExcelsHandler.dump(datas))
      .catch((err) => console.error(err))
  };
}

let handler = new Controller();

export default handler;