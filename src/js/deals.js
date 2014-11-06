var body,
    sites,
    populate,
    tabHtml;

sites = [
  'steepandcheap',
  'chainlove'
];

body = document.getElementsByTagName("body")[0];

function tabHtml(data) {
  return "<a href='" + data.productUrl() + "'><h2 style='text-align: center;'>" + data.title() + "</h2>" +
  "<img src='" + data.imageUrl() + "' />" +
  "<p style='text-align: center;'>" + data.title() + ", $" + data.price() + "</p>" +
  "</a>"
}

function populate(site) {
  retriever = new DEALS.Retreiver(site, function() {
    var data,
        html,
        tab;
  
    data = new DEALS.Data(site, this.responseText);
    tab = document.getElementById(site);
    html = tabHtml(data);

    tab.innerHTML = html;
  });
}

for (var i = 0; i < sites.length; i++) {
  populate(sites[i]);
}
