function getProductElements(event) {
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const pd={
        pName: productName,
        pPrice: productPrice,
        pQuantity: productQuantity,
    };

    return pd;
}

function setProductIntoList(id, pName, pPrice, pQuantity, pTotal){
    const setProductIntoList = document.getElementById(id);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="border-solid border-b-2 border-indigo-300">${serial}</td>
      <td class="border-solid border-b-2 border-indigo-300">${pName}</td>
      <td class="border-solid border-b-2 border-indigo-300">${pPrice}</td>
      <td class="border-solid border-b-2 border-indigo-300">${pQuantity}</td>
      <td class="border-solid border-b-2 border-indigo-300">${pTotal}</td>
    `;
  
    setProductIntoList.appendChild(tr);
    const productList = document.getElementById('list');
    productList.innerText = serial;

    
}

function buttonDisable(id){
    document.getElementById(id).setAttribute('disabled',true);
}

function totalAmount(amount){
    const previousTotalString = document.getElementById('total').innerText;
    const previousTotal = parseInt(previousTotalString);
    const newTotal = previousTotal+ amount;
    document.getElementById('total').innerText = newTotal;
}