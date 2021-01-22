/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//Specifying the items per page
const itemsPerPage = 9; 

      //Create the `showPage` function
      //This function will create and insert/append the elements needed to display a "page" of nine students
      function showPage(list, page) {
         let startIndex = (page * itemsPerPage) - itemsPerPage;
         let endIndex = page * itemsPerPage;
         let studentList = document.querySelector('.student-list'); //Selects the UL element with a class of student-list and assigns its value to a variable.
         studentList.innerHTML = ''; // sets the innerHTML property of the variable you just created to an empty string 
         for ( let i = 0; i < list.length; i++ ) {
            if ( i >= startIndex && i < endIndex) {
               let studentItem = list[i];
                  studentList.insertAdjacentHTML( 'beforeend', `
                  <li class="student-item cf">
                     <div class="student-details">
                           <img class="avatar" src=${studentItem.picture.thumbnail} alt="Profile Picture">
                        <h3>${studentItem.name.title} ${studentItem.name.first} ${studentItem.name.last}</h3>
                        <span class="email">${studentItem.email}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">${studentItem.registered.date}</span>
                     </div>
                  </li>
               `)
            }
         }
      };
      
      showPage(data, 1);

 
      /*
      Create the `addPagination` function
      This function will create and insert/append the elements needed for the pagination buttons
      */

     function addPagination(list) {
     
      let numOfPages = Math.ceil( list.length / itemsPerPage );  // creates a variable to calculate the number of pages needed
      const linkList = document.querySelector('.link-list'); // selects the element with a class of `link-list` and will assign it to a variable
      linkList.innerHTML = '';  // sets the innerHTML property of the variable you just created to an empty string 
     // loop over the number of pages needed
     let button = '';
      for (let i = 1; i <= numOfPages; i++) {
       // creates the elements needed to display the pagination button
       button = `
         <li>
            <button type="button">${i}</button>
         </li>
         `;
       // insert the above elements
       linkList.insertAdjacentHTML('beforeend', button);
      };
      
      let activeButton = linkList.querySelector('button');   
     // give the first pagination button a class of "active"
      activeButton.className = 'active';
     // create an event listener on the `link-list` element
      linkList.addEventListener('click', (e) => {
      // if the click target is a button:
         if ( e.target.tagName === 'BUTTON') {
            // remove the "active" class from the previous button
            linkList.querySelector('.active').className = '';
            // add the active class to the clicked button
            e.target.className = 'active';
          // call the showPage function passing the `list` parameter and page to display as arguments
         showPage(list, e.target.textContent)
          };
       });
     }; 
   
    addPagination(data); //call function
  


      

   
 

   



