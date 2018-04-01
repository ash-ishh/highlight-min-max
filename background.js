console.log('background running')
chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript(null,{file:"popup2.js"});
});
