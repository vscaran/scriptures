function loaded(selector, callback) {
  mainTTools.ready(selector, function() {
    var ele = document.querySelector(selector);
    callback(ele);
  });
}

function addTrackingToEle(ele, text, config, once) {
  ele.addEventListener("mousedown", function() {
    abTrack(954, text, config);
  }, {once});
}

function getATags(nodeList) {
  if (!nodeList.length) nodeList = [nodeList];
  var aTags = [];
  for (var i = 0; i < nodeList.length; i++) {
    aTags = aTags.concat(Array.from(nodeList[i].querySelectorAll("A")));
  }
  return aTags;
}

function addTrackingToATags(aTags, text, config, once) {
  for (var i = 0; i < aTags.length; i++) {
    function addListener() {
      var aTag = aTags[i];
      aTag.addEventListener("mousedown", function() {
        text = text.replace(/{{ innerText }}/, cleanInnerText(aTag.parentNode.innerText));
        abTrack(954, text, config);
      }, {once});
    }
    addListener();
  }
}

function cleanInnerText(innerText) {
  var text = innerText.replace(/\n/g, " ");
  text = text.trim();
  text = text.substring(0, 25);
  return text;
}

// Tracking Function

function abTrack(events, text, config) {
  var eVar = config.name + ":" + config.version + ":" + text;
  try {
    var s = s_gi("ldsall");
    s.linkTrackVars = "eVar100,events";
    s.linkTrackEvents = "event954";
    s.eVar100 = eVar;
    s.events = "event" + events;
    s.tl("o", "abconversionclick");
    s.eVar100 = "";
    s.events = "";
  } catch(err) {
    console.warn("Tracking event did not fire:", eVar);
    console.warn(err);
  }
}