document.addEventListener('DOMContentLoaded', function(){
  fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '';
    data.forEach(element => {
      output += `
      <div class="cardContainer">
      <div class="left-info">
      <img src="${element.logo}" alt="logo" class="job-img">
      <div class="job-info-container">
      <div class="job-tags">
          <p>${element.company}</p>
          <p>${element.new ? 'NEW': ''}</p>
          <p>${element.featured ? 'FEATURED' : ''}</p>
      </div>
      <h3>${element.position}</h3>
      <div class="bottom-tags">
          <p>${element.postedAt} .</p>
          <p>  ${element.contract} .</p>
          <p>  ${element.location}</p>
      </div>
    </div>
    </div>
     
    <div class="right-info">
        <p id="job-tag" class="role">${element.role}</p>
        <p id="job-tag" class="level">${element.level}</p>
         ${element.languages.map(lang => {
           return `<p id="job-tag" class="lang">${lang}</p>`;
         }).join("")}
    </div>
  </div>
      `;
    });
    document.querySelector('.wrapper').innerHTML = output;
     
  })

  // Filter array
let filterArray = [];
let top = document.querySelector('.top-filter');

 
document.addEventListener('click', function(e){
  targetFilter = e.target;
  if(targetFilter.id === 'job-tag'){
    top.style.display = 'flex';
    if(!filterArray.includes(targetFilter.textContent)){
      filterArray.push(targetFilter.textContent)
       
    }
  }

  if (filterArray === undefined || filterArray.length == 0) {
    // array empty or does not exist
    top.style.display = 'none';

      
}

    
// Add tags to top tag
tagOutput = '';
filterArray.forEach((tag) => {
  tagOutput += `
  <div class="remove-button">
  <p>${tag}</p>
      <span class="remove"><img src="./images/icon-remove.svg" alt="icon-remove"></span>
      </div>
`;
}); 

document.querySelector('.filters').innerHTML = tagOutput;
 

// remove tag
if(e.target.className === 'remove'){
    let removeValue = e.target.parentElement.firstElementChild.textContent;
     let index = filterArray.indexOf(removeValue);
     filterArray.splice(index, 1);
      
}

// Clear all tags
 if(e.target.className === 'clear'){
    filterArray = [];
 }

});



})

 
 
 

 

