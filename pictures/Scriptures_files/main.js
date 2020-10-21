var campaign;
if (ttMETA.length) {
  campaign = ttMETA.find(function (c) {
    return c.CampaignName.includes("GLO Audio Player Location and Style");
  });
}

if (!campaign) campaign = { CampaignName: "GLO Audio Player Location and Style", RecipeName: "Control" };

// mainTTools.loadScript("https://abn.churchofjesuschrist.org/public/usabilla_button.js");

mainTTools.loadScript("https://abn.churchofjesuschrist.org/public/wc/tracking.js", function () {
  var match = (campaign.RecipeName.match(/v[0-9]*|control/i) || ["Control"])[0].toUpperCase();

  var config183 = {
    id: "AB-183",
    title: campaign.CampaignName,
    name: "GLOAPLS",
    version: match === "CONTROL" ? "V00" : match,
  };

  console.log("Loading AB Test", config183);

  let theme = localStorage.getItem("theme") || "default";

  let presets = {
    default: {
      no: {
        background: "#ffffff",
        icons: "#3a3d40",
        progress: "#177c9c",
        input: "#d8d8d8"
      },
      slight: {
        background: "#eff0f0",
        icons: "#3a3d40",
        progress: "#177c9c",
        input: "#d8d8d8"
      },
      extreme: {
        background: "#53575b",
        icons: "#ffffff",
        progress: "#01b6d1",
        input: "#d8d8d8"
      }
    },
    night: {
      no: {
        background: "#3a3d40",
        icons: "#ffffff",
        progress: "#01b6d1",
        input: "#d8d8d8"
      },
      slight: {
        background: "#eff0f0",
        icons: "#3a3d40",
        progress: "#177c9c",
        input: "#d8d8d8"
      },
      extreme: {
        background: "#ffffff",
        icons: "#3a3d40",
        progress: "#01b6d1",
        input: "#d8d8d8"
      }
    },
    sepia: {
      no: {
        background: "#ebe4d7",
        icons: "#3a3d40",
        progress: "#177c9c",
        input: "#d8d8d8"
      },
      slight: {
        background: "#ffffff",
        icons: "#3a3d40",
        progress: "#177c9c",
        input: "#d8d8d8"
      },
      extreme: {
        background: "#53575b",
        icons: "#ffffff",
        progress: "#01b6d1",
        input: "#d8d8d8"
      }
    }
  }

  let top = config183.version === "V03" || config183.version === "V04" || config183.version === "V05";

  loaded("[class*='audioPlayer-']", function(container) {

    container.style = top ? "bottom: auto; position: absolute; right: inherit; top: 44px;" : "right: inherit;";
    if (top) container.firstElementChild.style.marginTop = "40px";

    loaded("audio[class*='player-']", function(audioPlayer) {

      abTrack(954, `open:${theme}`, config183);
  
      let wrapper = audioPlayer.parentElement;
      let playerInfo = audioPlayer.nextElementSibling;
  
      let content = document.querySelector("#content");
  
      container.style = top ? "bottom: auto; position: absolute; right: inherit; top: 44px;" : "right: inherit;";
      content.style = top ? "margin-top: 78px;" : "";
  
      let buttons = window.innerWidth >= 600 ? [
        wrapper.children[2].children[0].children[0].firstElementChild,
        wrapper.children[2].children[0].children[1],
        wrapper.children[2].children[0].children[2].firstElementChild,
        wrapper.children[2].children[1].children[0],
        wrapper.children[2].children[1].children[1],
        wrapper.children[2].children[1].children[2],
        wrapper.children[2].children[2].children[0]
      ] : [
        wrapper.children[2].children[0].children[0],
        wrapper.children[2].children[0].children[1].firstElementChild,
        wrapper.children[2].children[1].children[0],
        wrapper.children[2].children[1].children[1],
        wrapper.children[2].children[1].children[2],
        wrapper.children[2].children[2].children[0]
      ];
  
      let contrast = config183.version === "V00" || config183.version === "V03" ? "no" : config183.version === "V01" || config183.version === "V04" ? "slight" : config183.version === "V02" || config183.version === "V05" ? "extreme" : "no";
  
      preset = presets[theme][contrast];
  
      let inputRangeStyle = document.createElement("style");
      inputRangeStyle.textContent = `
        input[type='range']::-webkit-slider-thumb {
          background: ${preset.progress};
        }
        input[type='range']::-moz-range-thumb {
          background: ${preset.progress};
        }
        input[type='range']::-ms-thumb {
          background: ${preset.progress};
        }
        svg {
          color: ${preset.icons};
        }
      `;
      playerInfo.appendChild(inputRangeStyle);
  
      wrapper.style.background = preset.background;
  
      let playIndex = window.innerWidth >= 600 ? 4 : 3;
      let closeIndex = window.innerWidth >= 600 ? 6 : 5;
      buttons.forEach(function(button, i) {
        button.style.backgroundColor = preset.background;
        button.parentElement.style.backgroundColor = preset.background;
  
        if (i === playIndex) {
          button.addEventListener("click", function() {
            abTrack(954, `play:${theme}`, config183);
          });
        }
  
        if (i === closeIndex) {
          button.addEventListener("click", function() {
            abTrack(954, `close:${theme}`, config183);
            container.style = top ? "bottom: auto; position: absolute; right: inherit; top: 44px;" : "right: inherit;";
            if (top) {
              let interval = setInterval(() => {
                if (container.firstElementChild.type === "button") {
                  clearInterval(interval);
                  container.firstElementChild.style.marginTop = "40px";
                }
              }, 100);
            }
          });
        }
      });
      playerInfo.querySelectorAll("SPAN").forEach(function(span) {
        span.style.color = preset.icons;
      });
      let progressBar = playerInfo.children[1].children[2];
      progressBar.style.background = preset.progress;
      progressBar.style.zIndex = 10;
      let inputBar = playerInfo.querySelector("input[type='range']");
      inputBar.style.background = preset.input;
  
      if (top) {
        let flexContainer = document.querySelector("#flexContainer")
        function handleScroll() {
          let scrollPosition = flexContainer.scrollTop;
          if (scrollPosition > 200) container.style.position = 'fixed';
          else container.style.position = 'absolute';
        }
        handleScroll();
        flexContainer.addEventListener("scroll", handleScroll);
  
        let audioMenu = document.getElementById("audio-menu");
        audioMenu.style.bottom = "-275px";
        audioMenu.firstElementChild.firstElementChild.style.bottom = "auto";
        audioMenu.firstElementChild.firstElementChild.style.transform = "rotate(180deg)";
  
        if (window.innerWidth >= 600) {
          wrapper.children[2].children[0].children[0].children[1].style.bottom = "-167px";
          wrapper.children[2].children[0].children[0].children[1].children[0].children[0].style.bottom = "auto";
          wrapper.children[2].children[0].children[0].children[1].children[0].children[0].style.transform = "rotate(180deg)";
    
          let hoverDiv = document.createElement("DIV");
          hoverDiv.style = "position: absolute; width: 100%; height: 207px; top: 40px;";
          buttons[0].parentElement.prepend(hoverDiv);
          
          audioPlayer.nextElementSibling.style.zIndex = -100;
        }
        
      }
      
    });

  });

  

});
