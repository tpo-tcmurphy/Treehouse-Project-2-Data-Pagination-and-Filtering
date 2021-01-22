/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Speciy the numbers per page
const itemsPerPage = 9; 

      //Create the `showPage` function
      //This function will create and insert/append the elements needed to display a "page" of nine students
      function showPage(list, page) {
         //Start Index = (page parameter * items per page) - items per page
         let startIndex = (page * itemsPerPage) - itemsPerPage;
         //End Index = page parameter * items per page
         let endIndex = page * itemsPerPage;
            //Select the UL element with a class of student-list and assign its value to a variable.
         let studentList = document.querySelector('.student-list');
         //Use the innerHTML property set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
         studentList.innerHTML = '';
         //Loop over the list parameter.
         for ( let i = 0; i < list.length; i++ ) {
         //Inside the loop:
            //Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
            if ( i >= startIndex && i < endIndex) {
            //Inside that conditional:
            //Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. Here is an example of what the the final version of these elements should look like:
               //Pro Tip: Because you will need to create multiple elements to display the information for each student, you might consider using a template literal for this
            //Insert the elements you have created to the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
            let studentItem = list[i];
            
            studentList.insertAdjacentHTML( 'beforeend', `
            <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src=${studentItem.picture.thumbnail} alt="Profile Picture">
              <h3>${studentItem.name.first}</h3>
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
     
      let numOfPages = Math.ceil( list.length / itemsPerPage );  // create a variable to calculate the number of pages needed
      const linkList = document.querySelector('.link-list'); // select the element with a class of `link-list` and assign it to a variable
      linkList.innerHTML = '';  // set the innerHTML property of the variable you just created to an empty string 
     // loop over the number of pages needed
     let button = '';
      for (let i = 1; i <= numOfPages; i++) {
       // create the elements needed to display the pagination button
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
  


      

   
 

   



