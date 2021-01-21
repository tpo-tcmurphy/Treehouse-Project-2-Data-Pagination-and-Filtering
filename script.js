/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener( 'DOMContentLoaded', () => {

      const studentListUl = document.querySelectorAll('.student-list')[0];
      const studentListLi = studentListUl.children;
      const itemsPerPage = 10;
      /*
      For assistance:
         Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
         Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
      */
      /*
      Create the `showPage` function
      This function will create and insert/append the elements needed to display a "page" of nine students
      */
      const showPage = (list, page) => {
         const low = page * itemsPerPage;
         const high = (page + 1) * itemsPerPage;
         for (let i = 0; i < list.length; i++) {
            if (i >= low && i < high) {
               list[i].style.display = 'block';
            } else {
               list[i].style.display = 'none';
            }
         }
      };
      /*
      Create the `addPagination` function
      This function will create and insert/append the elements needed for the pagination buttons
      */
      const appendPageLinks = (list) => {
         const numberOfStudents = studentListLi.length;
         const amountOfPages = Math.ceil(numberOfStudents / itemsPerPage);
         const newDiv = document.createElement('div');
         newDiv.className = 'pagination';
         const mainPage = document.querySelectorAll('.page')[0];
         mainPage.appendChild(newDiv);
         const newDivUl = document.createElement('ul');
         newDiv.appendChild(newDivUl);
         const anchorList = document.getElementsByTagName('A');
         for (let i = 0; i < amountOfPages; i++) {
            const newDivLi = document.createElement('li');
            const anchor = document.createElement('a');
            newDivUl.appendChild(newDivLi);
            anchor.href = '#';
            anchor.textContent = i + 1;
            newDivLi.appendChild(anchor);
            anchor.addEventListener("click", (e) => {
               for (let i = 0; i < anchorList.length; i++) {
                  anchorList[i].className = '';
                  e.target.className = 'active';
               }
               showPage(studentListLi, i);
            });
         }
         anchorList[0].className = 'active';


      };

      // Call functions
      showPage(studentListLi, 0);

      appendPageLinks();

   });

