function solve() {
   const input = document.querySelector('#searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll('tbody tr')).forEach((row) => {
         if (row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      input.value = '';
   }
}