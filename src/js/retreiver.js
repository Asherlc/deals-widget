var DEALS = DEALS || {};

DEALS.Retreiver = function(site, onloadCallback) {
  var self = this,
      request;

  self.site = site;

  self.siteUrl = function() {
    if (self.site === "steepandcheap") {
      return "http://www.steepandcheap.com/steepcheap/sac/jsdata.js";
    } else if (self.site === "chainlove") {
      return "http://www.steepandcheap.com/chainlove/cl/jsdata.js";
    }
  };

  request = new XMLHttpRequest();
  
  request.onload = onloadCallback;
  request.open("GET", self.siteUrl(), true);
  request.setRequestHeader("Cache-Control", "no-cache");
  request.send();
};
