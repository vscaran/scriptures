(function () {
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  var ready = (target, cb) => {
    let observer;
    const config = {
      attributes: true,
      childList: true,
      subtree: true,
    };
    function check() {
      return cb();
    }
    const _check = debounce(check, 250);
    if (!observer) {
      observer = new MutationObserver(_check);
      observer.observe(document.documentElement, config);
      check();
    }
  };

  ready("#app", () => {
    const cl = window.location.href;
    // console.log("url ", cl);
    if (
      cl.indexOf("ward-or-branch-callings/") !== -1 &&
      cl.indexOf("aaronic-priesthood-quorums") === -1 &&
      cl.indexOf("temple-and-family-history") === -1 &&
      cl.indexOf("bishopric") === -1
    ) {
      let org = "";
      const call = ["President", "Counselor", "Secretary"];
      // console.log("qualified")
      let tiles = Array.from(document.querySelectorAll("[class*='tile-']"));
      let filteredTiles = [];
      if (
        cl.indexOf(
          "handbooks-and-callings/ward-or-branch-callings/young-women"
        ) !== -1
      ) {
        filteredTiles = tiles.slice(3, 6);
      } else {
        filteredTiles = tiles;
      }
      // console.log("filteredTiles ", filteredTiles)
      filteredTiles.forEach((tile, i) => {
        if (tile.innerText.indexOf("Elder") > -1) {
          org = "EQ";
        } else if (tile.innerText.indexOf("Relief") > -1) {
          org = "RS";
        } else if (tile.innerText.indexOf("Young") > -1) {
          org = "YW";
        } else if (tile.innerText.indexOf("Primary") > -1) {
          org = "PR";
        } else if (tile.innerText.indexOf("Sunday") > -1) {
          org = "SS";
        }
        let url =
          "https://abn.churchofjesuschrist.org/callings/detail?calling=" +
          org +
          "-" +
          call[i];
        // console.log("redirect to ", url)
        tile.addEventListener("click", (e) => {
          // console.log("CLICK ")
          e.preventDefault();
          window.location.href = url;
        });
      });
    }
  });
})();
