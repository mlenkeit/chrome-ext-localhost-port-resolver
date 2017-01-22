chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = details.url;
  const result = /google.*oq=(\d+)/.exec(url);
  if (result) {
    const port = result[1];
    chrome.tabs.update(details.tabId, {
      url: 'http://localhost:' + port
    });
  }
});