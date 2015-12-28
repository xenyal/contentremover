//===--------- background.js - implements user input ----------===//
//
//
//
//
//
//
//
//
//
//===----------------------------------------------------------===//

chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});

});

// for messaging between content script and background script, refer to 
// https://developer.chrome.com/extensions/messaging