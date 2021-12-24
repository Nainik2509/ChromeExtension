chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == "run-complete") {
    document.querySelector("textarea").value = JSON.stringify(msg.data);
    document.querySelector("textarea").style.display = "block";
    alert("Command has been run");
  }
});

function createCommandObject() {
  var commandsArr = [];
  var commands = document.querySelectorAll(".commands-list .command-item");
  for (let i = 0; i < commands.length; i++) {
    var itemObj = {};
    itemObj.type = commands[i].querySelector("select").value;
    itemObj.one = commands[i].querySelector(".value-1").value;
    itemObj.two = commands[i].querySelector(".value-2").value;
    commandsArr.push(itemObj);
  }
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //   Take in array of all tabs
    // Check tab we're currently on (First tab)
    var activeTab = tabs[0];
    var obj = commandsArr;
    chrome.tabs.sendMessage(activeTab.id, {
      command: "runCommands",
      data: obj,
    });
  });
}

document.querySelector(".run-command").addEventListener("click", function () {
  createCommandObject();
});

document.querySelector(".new-command").addEventListener("click", function () {
  var newItem = `<div class="command-item">
        <select>
          <option value="wait">Wait</option>
          <option value="click">Click</option>
          <option value="enter">Enter</option>
          <option value="save">Save</option>
        </select>
        <input class="value-1" placeholder="200ms" />
        <!-- <- wait time or querySelector  -->
        <input class="value-2" placeholder="Optional" />
        <!--  <- E.g is entering data -->
      </div>`;

  document.querySelector(".commands-list").innerHTML += newItem;
});
