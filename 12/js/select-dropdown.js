let toggleDropdown=document.querySelector(".step__dropdown-button"),selectToggle=document.querySelector(".step__select-button"),contentDropdown=document.querySelector(".step__select-dropdown"),cornerDelete=document.querySelector(".selected-item__delete--choosing");cornerDelete.classList.add("js-closed--button"),toggleDropdown.addEventListener("click",(function(){contentDropdown.classList.toggle("js-closed--filter"),cornerDelete.classList.toggle("js-closed--button")})),selectToggle.addEventListener("click",(function(){contentDropdown.classList.toggle("js-closed--filter"),cornerDelete.classList.toggle("js-closed--button")}));