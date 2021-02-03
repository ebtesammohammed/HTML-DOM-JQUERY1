let body = document.body;

let alertButton = document.createElement("button");
let alertButtonText = document.createTextNode("Nice Massage");
alertButton.appendChild(alertButtonText);
body.appendChild(alertButton);
alertButton.addEventListener("click", function () {
  alert("Good Morning");
});

let textButton = document.getElementById("text-button");

textButton.addEventListener("click", function () {
  let textButtonMessage = document.getElementById("text-box").value;
  alert(textButtonMessage);
});

let divBox = document.getElementById("box");
divBox.style.backgroundColor = "blue";
divBox.style.height = "100px";
divBox.style.width = "100px";

divBox.addEventListener("mouseenter", function () {
  divBox.style.backgroundColor = "black";
});
divBox.addEventListener("mouseleave", function () {
  divBox.style.backgroundColor = "purple";
});

let paragraphText = document.createElement("p");
let paragraphTextMessage = document.createTextNode("Hello World!!");
paragraphText.appendChild(paragraphTextMessage);
body.appendChild(paragraphText);

paragraphText.addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);
  let randomRGB = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  paragraphText.style.color = randomRGB;
});
/*5*/
let spanButton = document.createElement("button");
let spanButtonText = document.createTextNode("my name");
spanButton.appendChild(spanButtonText);
body.appendChild(spanButton);
let nameDiv = document.createElement("div");
body.appendChild(nameDiv);

/*5*/
spanButton.addEventListener("click", function () {
  let myNameSpan = document.createElement("span");
  let myName = document.createTextNode("Ebtesam Mohammed");
  myNameSpan.appendChild(myName);
  nameDiv.appendChild(myNameSpan);
});
/*6*/
let myFriendArray = [
  "Robert",
  "Jeremiah",
  "Brooke",
  "Iman",
  "Charles",
  "Sharp",
  "Fatima",
  "Rachell",
  "Naomi",
  "Niki",
];
let friendButton = document.getElementById("my-friend-button");
let myFriendList = document.getElementById("my-friend-list");

friendButton.addEventListener("click", function () {
  for (let i = 0; i < myFriendArray.length; i++) {
    let myFriendListItem = document.createElement("li");
    let currentFriend = document.createTextNode(myFriendArray[i]);
    myFriendListItem.appendChild(currentFriend);
    myFriendList.appendChild(myFriendListItem);
  }
});
