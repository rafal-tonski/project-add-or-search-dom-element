const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();

  const element = document.createElement(node);
  if (txt) {
    const textElement = document.createTextNode(txt);
    element.appendChild(textElement);
  }

  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector(".content").appendChild(element);

  //   [...addForm.elements].forEach((el) => {
  //     addForm.elements[el.name].value = "";
  //   });
};

const searchElements = (e, nameElement) => {
  e.preventDefault();

  const infoElement = document.querySelector(".result");
  infoElement.textContent = "";

  const elementsList = document.querySelectorAll(nameElement);

  if (elementsList.length) {
    infoElement.innerHTML = `<p class="result__number-info"> Znalazłem na stronie ${elementsList.length} elementy html tego typu:  </p>`;
    showElements(elementsList, infoElement);
    searchForm.elements["searching-element"].value = "";
    console.log(nameElement);
  } else {
    infoElement.innerHTML = `<p class="result__number-info"> Nie znalazłem na tej stronie żadnego elementu html tego typu. </p>`;
  }
};

const showElements = (elementsList, infoElement) => {
  elementsList.forEach((element) => {
    const item = document.createElement("div");
    item.className = "result__element-description";
    item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>Klasy elementu: ${element.className}</div>
        <div>Wysokość elementu to: ${element.offsetHeight}</div>
        <div>Szerokość elementu to: ${element.offsetWidth}</div>
        <div>Odległość od górnej krawędzi to: ${element.offsetTop}</div>
        <div>Odległość od lewej krawędzi to: ${element.offsetLeft}</div>
        <div>Liczba elementów dzieci to: ${element.childElementCount}</div>
        `;
    infoElement.appendChild(item);
  });
};

const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) =>
  searchElements(e, searchForm.elements["searching-element"].value)
);
