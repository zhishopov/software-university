function search() {
   const towns = Array.from(document.querySelectorAll('li'));
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let count = 0;

   for(let town of towns) {
      if(town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = "underline";
         count++;
      }
   }
   result.textContent = `${count} matches found`
}
