// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);

async function execScript() {
  const tabId = await getTabId();
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    files: ['execute.js']
  })
}

async function getTabId() {
  const allTabs = await chrome.tabs.query({});
  console.log(typeof(allTabs))
  const tabsArray = Object.values(allTabs);
  console.log(tabsArray);
  console.log(typeof(tabsArray))
  console.log(tabsArray[0])

  const workTab = tabsArray.find(t=>{
    return t.url.startsWith('https://www.a4');
  })
  console.log(workTab)
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}
