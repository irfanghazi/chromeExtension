console.log("Hello options")
const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
    const name = nameInput.value
    chrome.storage.sync.set({ name }).then(() => {
        console.log(`Name is set to ${name}`);
      });
})

chrome.storage.sync.get(["name"]).then((result) => {
    nameInput.value = result.name
    console.log(result)
  });
