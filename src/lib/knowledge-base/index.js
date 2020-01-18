const request = require('request-promise');

const { SERVER_HOST } = require('../settings/constants');

class KnowledgeBase {
  static async topics() {
    const result = await request(SERVER_HOST + 'api/knowledge-base/topics');
    return result;
  }

  static async categories(topic = '') {
    const result = await request(SERVER_HOST + 'api/knowledge-base/categories');
    return result;
  }

  static async subcategories(category) {
    const result = await request(SERVER_HOST + 'api/knowledge-base/categories/' + category + '/subcategories');
    return result;
  }

  static async items(category = '', subcategory = '') {
    const result = await request(SERVER_HOST + 
      'api/knowledge-base/categories/' + category + '/subcategories/' + subcategory + '/items');
    return result;
  }

}

module.exports = KnowledgeBase;
