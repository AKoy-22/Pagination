//creating a node list of all the contacts
const contactList=(document.querySelectorAll('.contact-item'));
console.log(contactList);
let pages=Math.ceil(contactList.length/10);
//getting the required page number and adding the html to display the page numbers
const getAndDisplayPageNumbers=()=>{
    
        let pageLinksDiv=document.querySelector('.pagination');

        for(i=0;i<pages;i++){
            let pageLinkA=document.createElement('li');
            pageLinkA.innerHTML=`<a class="pageNumber">${i+1}</a>`;
            pageLinksDiv.appendChild(pageLinkA);
        }
}
getAndDisplayPageNumbers();

let pageNumber = document.querySelectorAll('.pageNumber');

//initial load displays first 10 contacts

for(i=10;i<contactList.length;i++){
    contactList[i].style.display="none";
}
//click event
for (let i=0; i<pageNumber.length; i++){
    pageNumber[i].addEventListener('click', ()=>{
        console.log(pageNumber[i]);

        //display the correct contacts 
        let startIndex=i*10;//0
        let endIndex=startIndex+9; //9
  
        for(y=0;y<contactList.length;y++){
            if(y<startIndex || y>endIndex){
                    contactList[y].style.display="none";
            }else{
                    contactList[y].style.display="block";
            }
        }
     })    
};
  

