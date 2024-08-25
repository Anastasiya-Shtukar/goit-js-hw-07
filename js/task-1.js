const listItem = document.querySelectorAll(".item");
const listItemArray = Array.from(listItem);
const numberListItemArray = listItemArray.length;

console.log(`number of categories: ${numberListItemArray}`);

listItemArray.forEach(function (item) {
  const childHeader = item.children[0];
  const childUl = item.children[1].children;
  const childUlArray = Array.from(childUl);
  console.log(`Category: ${childHeader.textContent}
Elements: ${childUlArray.length}`);
});
