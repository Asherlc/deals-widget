DEALS.data = function(site) {
  var self = this

  self.site = site

  self.load = function() {
    var request

    request = new XMLHttpRequest()

    request.setRequestHeader("Cache-Control", "no-cache")
    request.open("GET", self.siteUrl(), false)
    request.send(null)

    if (request.status === 200) {
      self.parse(request.responseText)
    }
  }

  self.parse = function(rawData) {
    self.parseJson(rawData)
  }

  self.parseJson = function(rawData) {
    self.json = JSON.parse(rawData)
  }

  self.siteUrl = function() {
    if (self.site === "steepandcheap") {
      return "http://www.steepandcheap.com/steepcheap/sac/jsdata.js"
    } else if (self.site === "chainlove") {
      return "http://www.steepandcheap.com/chainlove/cl/jsdata.js"
    }
  }

  self.imageUrl = function() {
    if (self.site === "steepandcheap" || self.site === "chainlove") {
      return self.json['currentItem']['variants'][0]['images']['bigImage']
    }
  }

  self.title = function() {
    if (self.site === "steepandcheap" || self.site === "chainlove") {
      return self.json['currentItem']['productTitle']
    }
  }

  self.price = function() {
    if (self.site === "steepandcheap" || self.site === "chainlove") {
      return self.json['currentItem']['price']
    }
  }

  self.parse()
  return self
}
