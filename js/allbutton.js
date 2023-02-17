
let serial = 0;
document.getElementById('first-card-butt').addEventListener('click', function (event) {
  serial++;
  const pd = getProductElements(event);
  // console.log(pd.pName, pd.pPrice, pd.pQuantity);
  const productName = pd.pName;
  const productPrice = pd.pPrice;
  const productQuantity = pd.pQuantity;
  const productTotal = parseInt(productPrice) * parseInt(productQuantity);

  setProductIntoList('table-container', productName, productPrice, productQuantity, productTotal);
  totalAmount(productTotal);
  buttonDisable('first-card-butt');




})
document.getElementById('second-card-butt').addEventListener('click', function (event) {
  serial++;
  const pd = getProductElements(event);
  // console.log(pd.pName, pd.pPrice, pd.pQuantity);
  const productName = pd.pName;
  const productPrice = pd.pPrice;
  const productQuantity = pd.pQuantity;
  const productTotal = parseInt(productPrice) * parseInt(productQuantity);

  setProductIntoList('table-container', productName, productPrice, productQuantity, productTotal);
  totalAmount(productTotal);
  buttonDisable('second-card-butt');




})
document.getElementById('third-card-butt').addEventListener('click', function (event) {
  serial++;
  const pd = getProductElements(event);
  // console.log(pd.pName, pd.pPrice, pd.pQuantity);
  const productName = pd.pName;
  const productPrice = pd.pPrice;
  const productQuantity = pd.pQuantity;
  const productTotal = parseInt(productPrice) * parseInt(productQuantity);

  setProductIntoList('table-container', productName, productPrice, productQuantity, productTotal);
  totalAmount(productTotal);
  buttonDisable('third-card-butt');




})
document.getElementById('fourth-card-butt').addEventListener('click', function (event) {
  serial++;
  const pd = getProductElements(event);
  // console.log(pd.pName, pd.pPrice, pd.pQuantity);
  const productName = pd.pName;
  const productPrice = pd.pPrice;
  const productQuantity = pd.pQuantity;
  const productTotal = parseInt(productPrice) * parseInt(productQuantity);

  setProductIntoList('table-container', productName, productPrice, productQuantity, productTotal);
  totalAmount(productTotal);
  buttonDisable('fourth-card-butt');

})

document.getElementById('fifth-card-butt').addEventListener('click',function(event){
  serial++;
  const productName = event.target.parentNode.parentNode.children[0].innerText;
  const productPrice = event.target.parentNode.parentNode.children[2].value;
  const productQuantity = event.target.parentNode.parentNode.children[3].value;

  event.target.parentNode.parentNode.children[3].value = '';
  if(productPrice =='' || productQuantity== '' || productPrice <=0 || productQuantity <=0){
    return alert('Please Input Valid Number Value');
    
  }
  if(isNaN(productPrice) || isNaN(productQuantity)){
    return alert('Please Input Valid Number Value');
  }
  const productTotal = parseInt(productPrice) * parseInt(productQuantity);
  setProductIntoList('table-container', productName, productPrice, productQuantity, productTotal);
  totalAmount(productTotal);
  buttonDisable('fifth-card-butt');
  
})