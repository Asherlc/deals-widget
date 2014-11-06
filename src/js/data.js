var DEALS = DEALS || {};

DEALS.Data = function(site, rawData) {
  var self = this;

  self.site = site;
  self.rawData = rawData;

  self.parse = function(rawData) {
    self.parseJson(rawData);
  };

  self.parseJson = function(rawData) {
    self.json = JSON.parse(rawData);
  };

  self.imageUrl = function() {
    var firstKey;

    if (self.site === "steepandcheap" || self.site === "chainlove") {
      firstKey = Object.keys(self.json.currentItem.variants)[0];

      return self.json.currentItem.variants[firstKey].images.bigImage;
    }
  };

  self.productUrl = function() {
    if (self.site === "steepandcheap") {
      return "http://www.steepandcheap.com/current-steal";
    } else if (self.site === "chainlove") {
      return "http://www.chainlove.com";
    }
  };

  self.title = function() {
    if (self.site === "steepandcheap" || self.site === "chainlove") {
      return self.json.currentItem.productTitle;
    }
  };

  self.price = function() {
    if (self.site === "steepandcheap" || self.site === "chainlove") {
      return self.json.currentItem.price;
    }
  };

  self.parse(rawData);
  return self;
};
