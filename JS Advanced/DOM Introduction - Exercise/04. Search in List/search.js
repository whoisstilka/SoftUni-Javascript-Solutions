function search() {
   const itemList = Array.from(document.querySelectorAll('#towns li'));
   const resultDiv = document.querySelector('#result');
   const searchInput = document.querySelector('#searchText');

   let counter = 0;

   itemList.forEach(element => {
      if (element.textContent.includes(searchInput.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   })

   resultDiv.textContent = `${counter} matches found`;
}
