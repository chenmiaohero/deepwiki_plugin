// background.js - Implements the main logic of the extension

// Actions to execute when installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('GitHub to DeepWiki extension installed');
});

// Add message listener to respond to messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'checkGitHub') {
    // When receiving a check request, get the current tab URL
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentTab = tabs[0];
      const currentUrl = currentTab.url;
      
      // Check if URL starts with https://github.com/
      if (currentUrl.startsWith('https://github.com/')) {
        // If it's a GitHub URL, convert and redirect directly
        const newUrl = currentUrl.replace('https://github.com/', 'https://deepwiki.com/');
        chrome.tabs.update(currentTab.id, { url: newUrl });
        
        // Close the message sender (popup) after conversion
        if (sender.tab) {
          chrome.tabs.remove(sender.tab.id);
        }
        
        // Reply to the message, indicating it's a GitHub URL
        sendResponse({isGitHub: true});
      } else {
        // If it's not a GitHub URL, just notify the popup
        sendResponse({isGitHub: false});
      }
    });
    
    // Return true to indicate this message will be processed asynchronously
    return true;
  }
});
