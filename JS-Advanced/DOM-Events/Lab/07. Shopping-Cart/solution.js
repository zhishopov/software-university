function solve() {
   const buttons = Array.from(document.getElementsByClassName('add-product'));
   const textarea = document.getElementsByTagName('textarea')[0];
   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   const allBtns = Array.from(document.getElementsByTagName('button'));
   let finalPrice = 0;
   const list = new Set();
   
   for(let button of buttons) {
      button.addEventListener('click', addProduct);
   }

   function addProduct(event) {
      const parent = event.target.parentElement.parentElement;
      const product = parent.querySelector('.product-details');
      const price = parent.querySelector('.product-line-price').textContent;
      const title = product.children[0].textContent;

      textarea.value += `Added ${title} for ${price} to the cart.\n`;
      finalPrice += Number(price);
      list.add(title);
   }

   checkoutBtn.addEventListener('click', calculatePrice);

   function calculatePrice() {
      textarea.value += `You bought ${Array.from(list).join(', ')} for ${finalPrice.toFixed(2)}.`;
      allBtns.forEach(button => button.disabled = true);
   }
}