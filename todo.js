const inp = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");
let myList = [];
function clearInput() {
  inp.value = "";
}
const syncfunc = () => {
  const allLists = JSON.parse(localStorage.getItem("List")) || [];
  myList = allLists;
  for (let i = 0; i < allLists.length; i++) {
    const all = allLists[i].title;
    createElements(all);
  }
};
const createElements = (val) => {
  const removeBtn = document.createElement("button");
  const item = document.createElement("li");
  removeBtn.textContent = "Remove";
  val > "" ? ul.appendChild(item) : [];
  item.textContent = val;
  item.append(removeBtn);
  for (let i = 0; i < myList.length; i++) {
    const listItem = myList[i];
    if (listItem.title === val) {
      removeBtn.addEventListener("click", () => {
        const index = myList.indexOf(listItem);
        item.remove();
        myList.splice(index, 1);
        save();
      });
    }
  }
};

const save = (item) => {
  if (item) {
    const nextitem = {
      title: item.title,
    };
    myList.push(nextitem);
  }
  const list = JSON.stringify(myList);
  localStorage.setItem("List", list);
};
function setupTodo() {
  btn.addEventListener("click", () => {
    const val = input.value;
    if (val === "") {
      inp.classList.add("red");
    } else {
      save({
        title: val,
      });
      createElements(val);
      clearInput();
      inp.classList.remove("red");
      console.log(myList);
    }
  });
}

function init() {
  syncfunc();
  createElements();
  setupTodo();
  console.log(myList);
}

init();
