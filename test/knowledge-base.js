const { KnowledgeBase } = require('../src/');

async function test() {
  const categories = await KnowledgeBase.categories();
  console.log(categories);

  const subcategories = await KnowledgeBase.subcategories('sports');
  console.log(subcategories);

  const items = await KnowledgeBase.items('sports', 'football');
  console.log(items);
}

test();
