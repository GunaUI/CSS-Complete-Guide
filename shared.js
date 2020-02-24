var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; This will actually overide the complete class list
    modal.classList.add('open'); // this will add css class open to modal
    backdrop.classList.add('open');
});
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.add('close'); 
    modal.classList.add('close'); 
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open'); 
    backdrop.classList.add('open');
});
