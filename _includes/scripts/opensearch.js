document.addEventListener('DOMContentLoaded', () => {
  const searchPlugins = [
    { id: 'google', title: 'Google' },
    { id: 'yahoo', title: 'Yahoo!検索' },
    { id: 'bing', title: 'Bing' },
    { id: 'duckduckgo', title: 'DuckDuckGo' },
    { id: 'twitter', title: 'Twitter' },
    { id: 'wikipedia', title: 'Wikipedia' },
    { id: 'google-map', title: 'Google マップ' },
    { id: 'google-translate', title: 'Google 翻訳' },
    { id: 'bing-translator', title: 'Bing 翻訳' },
    { id: 'kotobank', title: 'コトバンク' },
    { id: 'goo-dictionary', title: 'goo辞書' },
    { id: 'eijiro', title: '英辞郎 on the WEB' },
    { id: '2ch', title: '2chスレタイ検索' },
  ];

  const makeLink = id => `/assets/searchplugins/${id}.xml`;

  const url = new URL(window.location.href);
  const target = url.searchParams.get('searchplugin');
  const targetPlugins = target
    ? searchPlugins.filter(plugin => plugin.id === target)
    : searchPlugins;

  for (const plugin of targetPlugins) {
    const link = document.createElement('link');
    link.rel = 'search';
    link.type = 'application/opensearchdescription+xml';
    link.title = plugin.title;
    link.href = makeLink(plugin.id);
    document.head.appendChild(link);
  }

  const listContainer = document.querySelector('#search-plugins');
  if (!listContainer) {
    return;
  }
  const ul = listContainer.appendChild(document.createElement('ul'));
  for (const plugin of targetPlugins) {
    const li = ul.appendChild(document.createElement('li'));
    const p = li.append(document.createElement('p'));
    const a = p.appendChild(document.createElement('a'));
    a.textContent = plugin.title;
    a.href = makeLink(plugin.id);
  }
});
