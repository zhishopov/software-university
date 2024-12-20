function create(words) {
   const result = document.getElementById('content');

   for(let word of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph);
      
      newDiv.addEventListener('click', () => {
         newParagraph.style.display = 'block';
      });
      result.appendChild(newDiv);
   }

}