# CSS-Complete-Guide

## Section 9 : Working with JavaScript & CSS

### Adding modal

* Now you already added this backdrop with Manuel, here this backdrop div which you added to your HTML files, this will be one piece of the modal, it will be the background of the modal so that we can click any other content on the page.

* Now we have to add modal html in index.html below backdrop code

```html
    <div class="modal">
        <h1 class="modal__title">Do you want to continue?</h1>
        <div class="modal__actions">
            <a href="start-hosting/index.html" class="modal__action">Yes!</a>
            <button class="modal__action modal__action--negative" type="button">No!</button>
        </div>
    </div>
```
* And corresponding CSS

```css
.modal {
  position: fixed;
  display: none;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.modal__title {
  text-align: center;
  margin: 0 0 1rem 0;
}

.modal__actions {
  text-align: center;
}

.modal__action {
  border: 1px solid #0e4f1f;
  background: #0e4f1f;
  text-decoration: none;
  color: white;
  font: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.modal__action:hover,
.modal__action:active {
  background: #2ddf5c;
  border-color: #2ddf5c;
}

.modal__action--negative {
  background: red;
  border-color: red;
}

.modal__action--negative:hover,
.modal__action--negative:active {
  background: #ff5454;
  border-color: #ff5454;
}
```
* So if we add all that and we save that, we can reload our page and we don't actually see anything regarding modal.

* The reason for that is that for the modal just as with the backdrop, we got a display style of none. Now we can comment this out,

```css
.modal {
  position: fixed;
  /* display: none; */
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
```

* so to essentially show our modal and let's also comment out the display style of the backdrop so that both are not none

```css
.backdrop {
    position: fixed;
    /* display: none; */
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
}
```

* If we reload we could see modal (Refer : modalCss1)

* Of course it shouldn't be always shown as it is now though, it should only show up once we did click a button and it should disappear once we click the backdrop or the no button or the yes button but there, we simply navigate to a different page which we haven't added yet anyways. So what I'll do is, I'll set this back to display none, both for the backdrop and the modal and in the next lecture, we'll start adding some Javascript to essentially change this display property whenever we want to show or hide the modal and the backdrop.

### Selecting & Manipulating Styles with JavaScript

* So our goal is to dynamically change the display property and for that, we need to understand how we can in general change the style of elements with Javascript, why with Javascript? Because Javascript is the only tool we got which allows us to run code after the page has been loaded and with this code, we can of course change the content or the styling of the page.

* So we need to add Javascript and we could add it inline in our index.html

* We can add them in the head section or in the body section and also at the end of the body section which typically is the wiser way of doing it because this way it will ensure that all the HTML code has been parsed already and we can safely access it at the point of time our script runs.

* but let us put it in a sepearate javascript file and then we will use that here..(shared.js) at the bottom of index.html before the body closing tag

```html
<script src="shared.js"></script>
```

* So now we imported shared.js ist time to focus on accessing the styles of HTML elements. it has 2 steps

* First of all, we need to get access to a so-called DOM element, the DOM is essentially what the browser makes of our HTML code, it parses the HTML code and then creates a virtual representation of it, the document object model or in short the DOM and we can essentially access the elements in the DOM via Javascript and then manipulate them.

* We can manipulate their attributes, we can execute certain actions, we can listen to events on them, we can access their styles, we can access their CSS classes, we can access their content, we can even add and remove elements, these are all things you learn in a Javascript focused course though, we'll focus on selecting the elements and working with their styles or CSS classes.

* So how do we select an element?

```js
var backdrop = document.getQuerySelector('.backdrop')

backdrop.style.display ='block'; /* this will override our css display none css */

```
* Therefore if I save this Javascript file and I reload again, we see the backdrop again, it's again there because if we inspect it, we can see in our styles that we set display block here as an inline style which overwrites our class display none style. This is how we can select elements in Javascript and how we can manipulate the styles.

### Adding an Event Listener

* For that, we need to manipulate the styles but not by default when this Javascript code first runs but when an event occurs and for that, we need to add a so-called event listener to the HTML element we want to listen to.

* So I actually want to select all the buttons and I already told you that for this, we can use querySelectorAll

* we could selecte with button see that we're interested in a button element but not necessarily in every button on our page but in a button which is inside of, let's say an element with the plan class.

* So therefore, we can use a combinator here

```js
var backdrop = document.getQuerySelector('.backdrop')
var modal = document.getQuerySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button');

for (var i=0; i < selectPlanButton.length; i++ ){
  selectPlanButton[i].addEventListener('click', function(){
    modal.style.display='block';
    backdrop.style.display='block';
  })
}

```
### Close modal

```js
var backdrop = document.getQuerySelector('.backdrop')
var modal = document.getQuerySelector('.modal')
var modalNoButton = document.getQuerySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');

for (var i=0; i < selectPlanButton.length; i++ ){
  selectPlanButton[i].addEventListener('click', function(){
    modal.style.display='block';
    backdrop.style.display='block';
  })
}

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal(){
  backdrop.style.display = "none";
  modal.style.display = "none";
}
```
* our project to become real responsive by adding a side navigation, essentially a side navigation bar that should open when we click a to be added button here in our main toolbar at the top that should open whenever we click this button to allow us to navigate to packages, customers and so on from there.

* We will see responsiveness of our websiter. Therefore having such a side navigation is already a great first step and that's why we'll add it now.

* for that add the below html between the closing of the header and the starting of the main header

```html
...
...
</header>

<nav class="mobile-nav">
    <ul class="mobile-nav__items">
        <li class="mobile-nav__item">
            <a href="packages/index.html">Packages</a>
        </li>
        <li class="mobile-nav__item">
            <a href="customers/index.html">Customers</a>
        </li>
        <li class="mobile-nav__item mobile-nav__item--cta">
            <a href="start-hosting/index.html">Start Hosting</a>
        </li>
    </ul>
</nav>

<main>
  ...
  ...
```
* Now here, you actually see we got a nav HTML element with a bunch of classes on the nested elements and then our links to packages, customers and start hosting.

* css regarding the side nav changes

```css

.mobile-nav {
  display: none;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  background: white;
  width: 80%;
  height: 100vh;
}

.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  text-align: center;
}

.mobile-nav__item {
  margin: 1rem 0;
}

.mobile-nav__item a {
  font-size: 1.5rem;
}

```

* Now what do we also need to do for that to work correctly is we need to add some selectors to our other class selectors we got in the shared.css file,

```css
.main-nav__item a, 
.mobile-nav__item a{
    text-decoration: none;
    color: #0e4f1f;
    font-weight: bold;
    padding: 0.2rem 0;
}

.main-nav__item--cta a,
.mobile-nav__item--cta a{
    color: white;
    background: #ff1b68;
    padding: 0.5rem 1rem;
    border-radius: 8px;
}

/* similarly */

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active,
.mobile-nav__item--cta a:hover,
.mobile-nav__item--cta a:active {
    color: #ff1b68;
    background: white;
    border: none;
}
```
* With that if we save all of that and we reload, we don't actually see anything because if we go back to the shared file, you will see that the mobile nav by default has a display of none.

*  Let's remove that temporarily and let's reload (Refer : modalCss2)

```css
.mobile-nav {
    /* display: none; */
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    background: white;
    width: 80%;
    height: 100vh;
}
```
* this is what it will look like, not super pretty because it's way too big, it will look good on smaller devices later.we want to ensure that on small devices, like maybe here this iPhone, it looks nice. 

* we can already work on showing this upon the click of a button though. So let's add display none again and let's add a button which allows us to show that side navigation.

* Now we need button html to enable this mobile view

```html
 <header class="main-header">
        <div>

            <!-- this is the button html starts -->
            <button class="toggle-button">
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
            </button>
            <!-- this is the button html ends -->

            <a href="index.html" class="main-header__brand">
                <img src="images/uhost-icon.png" alt="uHost - Your favorite hosting company">
            </a>
        </div>
```
* now it'll also need some styling to look good and that styling

```css
.toggle-button {
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  vertical-align: middle;
}

.toggle-button:focus {
  outline: none;
}

.toggle-button__bar {
  width: 100%;
  height: 0.2rem;
  background: black;
  display: block;
  margin: 0.6rem 0;
}
```
* If you inspect the HTML code again, you see we can get three spans inside of the button which have this toggle button bar class.

* Now this class is targeted with this selector and there, we give them the width of the button, a height, then a background color of black and then also a margin to the top and bottom, so that the bars are separated from each other, they also are display block. (Refer : modalCss3) we can see hanburger kind of menu.this anyways is code that definitely needs to improve and we will improve it.

* Menu not aligned properly we can improve that with 

```css
.main-nav {
    display: inline-block;
    text-align: right;
    width: calc(100% - 122px); /* Previously it was calc(100% - 48px)*/
    vertical-align: middle;
}
```
* With that if we reload we could see our menu aligned properly.

* icon and the hamburger menu is not aligned properly for that we will add 

```css
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    height: 1.5rem;
    /* width: 20px; */
    display: inline-block;
    vertical-align: middle; /* Here we added vertical-align: middle to middle icon and hamburger menu*/
}
```
* If you reload this in now centered (refer : modalCss4)

### Opening and Closing the Hamburger Menu

```js
var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none'; /* on click backdrop mobileNav should close */
    closeModal();
});

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block'; /* should enable mobileNav Menu and backdrop */
    backdrop.style.display = 'block';
});
```
* Now its working fine as expected

###  Manipulating Element Classes

* So we managed to open and close our modal, now let me show you another way of doing that. 

* So for the backdrop for example or the modal, display is none, the same for the backdrop, display is none by default. So we actually only need a second class, the open class which switches it to block when needed

```css
.open{
    display: block;
}
```
* now we will just need to add this class via Javascript whenever we need to change the style.

```js
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
```
* we reload our page, if we click choose plan, we still open the backdrop but the modal actually doesn't show up (Refer : modalCss5).

* The reason for this is that the open class is added but it's overwritten by the modal class and the reason for that is really that we defined the open class in the shared.css file whereas we have the modal class in the main.css file which is imported as a second file and therefore as you learned, this overwrites any styles with the same specificity that were defined earlier, 

* So what we can do and here this really is OK, we can add important here,

```css
.open{
    display: block !important;
}
```

* I told you that you shouldn't really use this to overwrite specificity but here it's ok because this really is a class that we only add when it should take absolute priority

* Another solution would be to simply reposition the modal class in front of the open class but I think this approach is really OK here too.

* So with that if we save that and reload, now we actually see the modal too (refer : modalCss6).

* We can't get rid of it though because we now got important on our display property, maybe one downside you could say but we want to get rid of it in another way anyways

```js
function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.remove('close'); 
    modal.classList.remove('close'); 
}
```
* Now with that if we save again and we reload, we can open our modal and close it, just like that

* but this time if you watch here on the right, you'll see that not the inline styles get edited but the class list gets edited automatically simply by running the add and remove commands on the class list.

* similarly we could use whereever we tried to apply none.

```js
backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});
```

### Understanding Property Notations

* let me console.dir any element eg backdrop and let me dive into style property.

```js
var backdrop = document.querySelector(".backdrop");

console.log(dir)
```

* If we reload and go to the console, here we see the backdrop.

* Now let's go down to style and you might have noticed it before, if you watch closely, we didn't recognize it for display because it's only one word but for other things like background image and a lot of other multi-word properties, they are written in a different way than you use it when writing CSS code in CSS files or in HTML files.(refer : modalCss7)

* You don't have a dash between background and image and image then starts with a capital I, the reason for this is that property names, you can call these variables and object so to say, are invalid if they contain a dash, that is why the notation differs slightly.

* Essentially, whenever you have a CSS property that consists of multiple words, like border radius and you want to change this directly from within Javascript, you would change it to one word where the dash is omitted and the word after the dash starts with a capital character, so borderRadius in this case here.


* share this backdrop and modal changes to packages and customer index

* So now with that, we can reload and now we're importing the Javascript code but now we get a new error, can't read property add event listener of null. Now what's the problem here?

* The problem here is that in our Javascript code, we're adding event listeners to our select plan buttons and these buttons simply don't exist on the packages page or on our customers page and therefore, this code just fails.We don't have these buttons there, so it can't succeed.

```js
if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}
```