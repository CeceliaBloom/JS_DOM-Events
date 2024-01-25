      //Exercise 1:
const nod1 = document.getElementById("node1");
nod1.textContent= `I used the getElementById(“node1”) method to access this`;

const nod2Elements = document.getElementsByClassName("node2");
for (const nod2Element of nod2Elements) {
  nod2Element.textContent = "I used the getElementByClassName('node2') method to access this";
}

const h3Elements = document.getElementsByTagName("h3");
for (const h3Element of h3Elements) {
  h3Element.textContent = "I used the getElementByTagName('h3') method to access all of these";
}

            // Exercise 2:
const newParagraph = document.createElement("p");

newParagraph.textContent = "This node was created using the createElement() method";

const parentNode = document.querySelector("#parent");
parentNode.appendChild(newParagraph);

const anchorElement = document.createElement('a');
anchorElement.textContent = "I am a <a> tag";
anchorElement.href = "https://yourlinkurl.com";

            // Exercise 3:
parentNode.insertBefore(anchorElement, newParagraph);

const exercise3contain = document.querySelector("#exercise-container3");
const oldPara = document.querySelector("#N1");

const newParagraphElement = document.createElement("p");
newParagraphElement.textContent = "New Child Node";

exercise3contain.replaceChild(newParagraphElement, oldPara);


      //Exercise 4: 
      //Use the following array of values to generate a list on the DOM
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let ul= document.createElement("ul");

list.forEach((item)=>{
  const li=document.createElement("li");
  li.textContent=item;

  ul.appendChild(li);
});
document.querySelector("#container").appendChild(ul);

      //Exercise 5:
function show() {
  const modalContainer = document.createElement("div");
  const modalCard = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const closeBtn = document.createElement("button");
          
  h2.textContent = "modal header";
  p.textContent = "modal content ....";
  closeBtn.textContent = "close";
          
  closeBtn.addEventListener("click", () => {
     document.body.removeChild(modalContainer);
  });
          
   modalCard.appendChild(h2);
   modalCard.appendChild(p);
   modalCard.appendChild(closeBtn);
   modalCard.classList.add("modal-card");modalContainer.id = "modal";
   modalContainer.appendChild(modalCard);document.body.appendChild(modalContainer);
}
          
const button = document.querySelector("#btn");
button.addEventListener("click", show);