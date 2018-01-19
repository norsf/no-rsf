function getElementsByXPath(xpath, parent)
{
  let results = [];
  let query = document.evaluate(xpath,
      parent || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  for (let i=0, length=query.snapshotLength; i<length; ++i) {
    results.push(query.snapshotItem(i));
  }
  return results;
}
// html/body/a/table/tbody/tr[1]/td[1]/font/p[8]/a[2]/table/tbody/tr/td/font/text()[2] - author
// html/body/a/table/tbody/tr[1]/td[1]/font/p[8]/a[2]/table/tbody/tr/td/font/text()[3] - body
// table/tbody/tr/td/font/text()[3]

var elements = getElementsByXPath("//tr/td/font");

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontFamily = "comic sans ms";
    if (i === 0 || i === 1) {
      continue;
    }

  if (element.innerText.indexOf("URBAN MEYER") !== -1) {
    element.innerText = "(RSF SPAM)";
  }
}
