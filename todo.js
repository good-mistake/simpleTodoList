const inp = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");

const myList = [];
const createElements = (val) => {
  const ul = document.querySelector("ul");
  const item = document.createElement("li");
  item.textContent = val;
  container.appendChild(ul);
  ul.appendChild(item);
};
const save = () => {
  myList.push(inp.value);
  const list = JSON.stringify(myList);
  localStorage.setItem("List", list);
};
btn.addEventListener("click", () => {
  console.log(inp.value);
  if (inp.value === "") {
    inp.classList.add("red");
  } else {
    save();
    createElements(inp.value);
    inp.value = "";
    inp.classList.remove("red");
    console.log(myList);
  }
});

const allLists = JSON.parse(localStorage.getItem("List"));
for (let i = 0; i < allLists.length; i++) {
  const all = allLists[i];
  createElements(all);
}
