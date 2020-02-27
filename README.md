# CSS-Complete-Guide

## Section 11 :  Adding & Styling Forms

###  Adding the Unstyled Form

* Create start-hoisting/index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>uHost Signup</title>
    <link rel="shortcut icon" href="../favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Anton|Montserrat:400,700" rel="stylesheet">
    <link rel="stylesheet" href="../shared.css">
    <link rel="stylesheet" href="start-hosting.css">
</head>

<body>
    <div class="backdrop"></div>
    <header class="main-header">
        <div>
            <button class="toggle-button">
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
            </button>
            <a href="../index.html" class="main-header__brand">
                <img src="../images/uhost-icon.png" alt="uHost - Your favorite hosting company">
            </a>
        </div>
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item">
                    <a href="../packages/index.html">Packages</a>
                </li>
                <li class="main-nav__item">
                    <a href="../customers/index.html">Customers</a>
                </li>
                <li class="main-nav__item main-nav__item--cta">
                    <a href="index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
    <nav class="mobile-nav">
        <ul class="mobile-nav__items">
            <li class="mobile-nav__item">
                <a href="../packages/index.html">Packages</a>
            </li>
            <li class="mobile-nav__item">
                <a href="../customers/index.html">Customers</a>
            </li>
            <li class="mobile-nav__item mobile-nav__item--cta">
                <a href="index.html">Start Hosting</a>
            </li>
        </ul>
    </nav>
    <main class="signup-page">
        <h1 class="signup-title">Awesome! Let's dive right in!</h1>
        <form action="index.html" class="signup-form">
            <label for="title">Title</label>
            <select id="title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
            </select>
            <label for="first-name">First name</label>
            <input type="text" id="first-name">
            <label for="last-name">Last name</label>
            <input type="text" id="last-name">
            <label for="email">E-Mail</label>
            <input type="email" id="email">
            <label for="password">Password</label>
            <input type="password" id="password">
            <input type="checkbox" id="agree-terms">
            <label for="agree-terms">Agree to
                <a href="#">Terms &amp; Conditions</a>
            </label>
            <button type="submit" class="button">Sign Up</button>
        </form>
    </main>
    <footer class="main-footer">
        <nav>
            <ul>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
    <script src="../shared.js"></script>
</body>

</html>
```

* (Refer : form1)

###  Page Initialization

```css
main {
    padding-top: 1rem;
}

.signup-title {
    text-align: center;
    font-size: 1.8rem;
    color: #ff5454;
}

.signup-form label,
.signup-form input,
.signup-form select {
    display: block; /*to appear one element in one row*/
    margin-top: 1rem;
    width: 100%;
}
```
* Now clearly, this is not looking super beautiful here but we'll work on that and we'll change the width of the overall form soon enough.(Refer : form2)

* Now this is the first step I wanted to take, now one problem we have is the styling of the checkbox. This actually, if we inspect our HTML code, is also a normal input element, here but in this case, I don't want to set it to block, it should stay an inline element because I actually want to ensure that this checkbox is positioned next to its label and therefore, this current approach of just setting it to be a block level element does not work, we'll have to change that.

### Understanding Advanced Attribute Selectors

* * !!!!! Refer image form3 for all below explaination

*  I want to work on my checkbox and to select it correctly, I'll actually use an advanced attribute selector.

* Now what do I mean with that?

* We can select elements by attributes like this, for example with that, we would select any element which has a type attribute, that would normally be true for any input element and we could also select by disabled or something like that.

* Now we can do more than just select with just the attribute, we can also restrict the set of found elements that have this attribute,

* for example we could say we only want to select an element or elements with a specific attribute value. So the type attribute for example should not just be set, it should all be equal to email. So this would for example select all inputs which are of type e-mail but not the ones which are of type password or text.

* We could also say that we want to select an element with a specific attribute value in a list. Now what do I mean with that?

* Here's an example, please notice this tilde sign in front of the equals sign, this is an important part of the syntax and this would for example match a paragraph that has a lang attribute which actually has more than one value. So in the lang attribute value, we got en-us and en-gb and even though it's a bit hard to see here, these two values are separated with a whitespace, with a blank and therefore, this is just a list of values for the lang attribute and with this attribute selector at the top here, we're saying 'Please select any element that has en-us in its list', it might have more values than that but it has to have en-us. Now we won't use this in this module but this is also nice to know.

* Another way of restricting the set of found elements is that we say we want to have an element with a specific attribute value or this attribute value as a prefix.

* Now here's another example, the syntax uses the pipe symbol in front of the equals sign and here, we would for example match this paragraph element. The interesting part here is that in our selector, we're saying lang should be equal to en or actually start with en and the important part is that start means that it has to be followed immediately after the part we have in the selector, so after the en by a dash but after the dash, you may have any combination of characters you want. Therefore, this would match this paragraph tag here which has a lang attribute with the en-us value because our selector matches both just en, as well as en-something.

* these are some special cases mostly useful if you're working with these lang attributes but nice to know.

* We also can select an element with a specific attribute value prefix,

* Here we are selecting, with that special character here in front of the equal sign, we're selecting any element which starts with a hash, so where the value of the ref attribute starts with the hash to be precise, that would match an internal link for example. So here we have an anchor tag linking to some ID on our page, the all ID to be precise and with that selector, we would target this element, we would get this element because we are selecting all elements here which do have this href attribute and where the value of that attribute starts with the hash and thereafter, you may have any characters you want, so it's more flexible than the one you see in the top right corner with the pipe symbol.

* We also can target a suffix instead of a prefix, then we use a dollar sign in front of the equal sign and here we are targeting all elements that have the href attribute and that start with .de, so for example we would match this element which has ab.de as an anchor tag reference and again, this can be really useful because we don't care about the characters in front of that ending part, in front of that suffix and therefore, we get a lot of flexibility here.

* We can also target elements with at least one attribute value, for that we would use the star in front of the equal sign and here we would target all elements that have the source attribute and where the source attribute then holds some content which contains cdn, doesn't have to be at the beginning, doesn't have to be at the end, just somewhere in the value, for example we would target this image where cdn is right in the middle, it could be at the beginning too though, that's important.

* And last but not least, we can also turn on case sensitivity or turn it off, depending on what we want. If we add that i character here, at the end of our square brackets, so before the closing square bracket, then we would also target this element, where we have cdn in all uppercase characters. Note that in our selectors, we wrote it in lowercase characters and with the i, we're just saying we should be case insensitive, if you don't add the i, you are case sensitive, that's the default but with the i, you can turn that off and you can ensure that now you select elements no matter if the value you're looking for is lowercase, uppercase or mixed uppercase and lowercase characters.

* !!!!! Refer image form3 for all above explaination

###  Working on the General Layout

* Now that we learned about the different types of selectors, attribute selectors we can use, how can we select this input of type checkbox?

* Well, there is one obvious way of doing that I'd say but there also are other ways, so let's try different ways. 

```css
/* .signup-form input[type="checkbox"] */
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label /* this select (all) lable which directly following this input selector*/
{
    display: inline-block;
}
```

* With that, if we save all of that and we go back to our project and reload, we actually see that the label and our checkbox are back in one line and we also see that the button is in the same line, we'll take care about this later,(Refer form4)

* Now let's also take care about the button immediately and I'll do that by using another selector, I'll use my signup-form and select the button which has the type submit.

```css
.signup-form button[type="submit"]{
    display: block;
    margin-top: 1rem;
}
```
* Now submit button in new line (Refer : form5).

* Why is the button now not spanning over the full width you might wonder? Well it is a block level element but just like inputs, it by default doesn't take all the width for its content, we would have to manually set width 100% and I'm not interested in doing this here.

* Now with these first steps taken, before we dive into the actual styling of the single elements, let's switch into mobile mode because Manuel explained that we would develop everything mobile first from now on and we will.

* Now, this doesn't look too bad on mobile right now, it also doesn't look great.(Refer :form6)

* Now the general structure of having all these elements beneath each other will be the same but now we should work on centering that correctly, maybe adding some padding, stuff like that.

```css
.signup-form{
    padding: 1rem;
}

.signup-form label{
    font-weight: bold;
}
```

* I'd say, so this also, is in my opinion, quite a nice style (Refer : form7)

* Now for bigger screens, if we're not in the mobile mode, this is way too big though. So we should add a media query

```css
@media(min-width: 40rem){
    .signup-form{
        margin: auto;
        width: 25rem;
    }
}
```
* If we save that and reload, now our form is narrower, it's centered in the middle too (Refer : form8), and only if we shrink the size to smaller devices, it also snaps to the edges and takes the full available width and it doesn't grow on bigger screens because it shouldn't.

### Restyling the Form Elements

* So let's work on the form elements styling; on the dropdown, the inputs here and the checkbox. Now how does that work?

* Let's start with the dropdown and the normal inputs.

```css
.signup-form input,
.signup-form select {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem; /*top-bottom and left-right*/
    font: inherit; /*We want to use the same font used in rest of the page*/
}
```
* On focus we could see some blue border what is that ?? in developer tool we could see for focus "outline :webkit-focus-ring-color-auto 5px".

* Now what is an outline, is this the same as a border? An outline is kind of comparable to a border but there are some crucial differences,

* for example the outline always comes after the border, so you can have both, it's added outside of the border.It's not counting towards the box size and it also is not doing anything on the box shadow, so if you have a big outline, this won't affect your box shadow for example.

* So outline is a great tool to mark that this has been focused but I want to change the way we do that actually still.

```css
.signup-form input:focus, /*focus pseudoclass*/
.signup-form select:focus {
    outline: none;
    background-color: #d8f3df;
    border-color: #2ddf3c
}
```

*  With that if we save that and reload it, if I click in there, now we get a different look (Refer : form9)

* Now I also want to restyle the checkbox though and for that,

* we already target it with our signup-form input styles and we're setting a border padding and font, it's just not doing anything because that clickable text box is something special in our browser in the end.

### Styling the Checkbox

* First let exclude our checkbox styles from input select style.

```css
.signup-form input:not([type="checkbox"]), /* All in inputs which are not of type checkbox will receive these styles */
.signup-form select {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    font: inherit;
}
```

* Now we could apply style to our checkbox

```css
.signup-form input[type="checkbox"] {
    border: 1px solid #ccc;
    background: white;
    width: 1rem;
    height: 1rem;
}
```

* If we do that and we save that and we reload, it increased in size but I don't see a white background, I don't see my border, we still got that default style. However it clearly does receive our styles as we can confirm if we select it, here all the styles are applied. Now the thing is, just as the select, the checkbox is a special type of input. If we scroll down to its browser default styles, we see that it gets this webkit appearance style which sets it to checkbox. For the select by the way, we can also see webkit appearance menu list. These are important default styles that defined that the select has these errors and works like this and that the checkbox works like this. If you want to change that, you have to overwrite it.

```css
.signup-form input[type="checkbox"] {
    border: 1px solid #ccc;
    background: white;
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none; /* chrome specific*/
    -moz-appearance: none; /* mozilla specific*/
    appearance: none; /* general specific - which is understood by all browsers*/
}
```
* Now our style replaced the default checkbox style of the browser (Refer : form10). but our checkbox is not aligned properly with the text, it should aligned middle.

```css
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label /* this select (all) lable which directly following this input selector */
{
    display: inline-block;
    vertical-align: middle /* here we aligned checkbox with the text as middle */
}
```
* because now they're aligning at the bottom and I believe this looks better here (Refer : form11).

* Now one thing that's missing of course is our ability to check this and to see a difference. It's important to understand that technically, this still can be checked.

* So if I click in there, this actually behind the scenes is switching between being checked and not being checked, we just don't see that here (Refer : form12)

* The reason for this is that no style is set for this being checked, previously, the webkit appearance did this for us,the default value is set by the browser but since we overwrote this to be none, we have to do it manually.

```css
.signup-form input[type="checkbox"]:checked { /*checked pseudoclass*/
    background: #2ddf5c;
    border: #0e4f1f;
}
```

* with that we could able to check our checkbox (Refer: form13) and also checking this on mobile screen its looking cool!!(Refer: form14)

### Providing Validation Feedback

* Now there are tons of ways of implementing validation and this is not really about the implementation logic, you normally always have to do validation on the server as a side note, so validate the inputs on your server side code because the client can always be tricked, here it's only about providing nice user feedback.

* Now which typical approaches do you have for validation? Typically as I said, you use server side validation.

* So you click that button, a HTTP request is sent to the server and once it reaches the server, it there is validated and maybe if it's invalid, the form page is returned to the client and you present it to the user again and you want to mark the inputs which are invalid as invalid.

* So you click that button, a HTTP request is sent to the server and once it reaches the server, it there is validated and maybe if it's invalid, the form page is returned to the client and you present it to the user again and you want to mark the inputs which are invalid as invalid and it is attached to that input on the server side when this page is re-rendered or also on the client-side through Javascript. 

* The idea now is take the invalid class and apply some special style to it.

```html
<input type="email" id="email" class="invalid">
```

```css
.signup-form input.invalid,
.signup-form select.invalid{
    border-color: red !important;
    background: #faacac;
}
```
* If we reload we could see all the invalid class receives this style (Refer : form15);

*  Now this is the manual approach, HTML and CSS actually offer you a more elegant way of doing that though, there is a special pseudo selector, the invalid pseudo selector. So let's add another rule here, let remove the manual invalid class

```css
.signup-form input.invalid,
.signup-form select.invalid,
.signup-form :invalid /*invalid pseudo class - let's target any element inside of that form.*/
{
    border-color: red !important;
    background: #faacac;
}
```
* I reload, nothing happens here but in the e-mail, you actually see as soon as I click out of there, this now has the invalid style.

* The reason for this is that HTML so to say or the browser automatically validates this because our e-mail input is of type email and it detects that 'XYZ' here is no valid email address and hence, it marks this as invalid and adds this special invalid pseudo selector.

* but I'd say this is a nice automatic way of validating this. Now if you want to validate the other inputs too, this is now just HTML, you can add things like the required attribute,  a HTML and browser feature which tells the browser that this is invalid if it's empty.

```html
<form action="index.html" class="signup-form">
    <label for="title">Title</label>
    <select id="title">
        <option value="mr">Mr.</option>
        <option value="ms">Ms.</option>
    </select>
    <label for="first-name">First name</label>
    <input type="text" id="first-name" required>
    <label for="last-name">Last name</label>
    <input type="text" id="last-name" required>
    <label for="email">E-Mail</label>
    <input type="email" id="email" required>
    <label for="password">Password</label>
    <input type="password" id="password" required>
    <input type="checkbox" id="agree-terms" required>
    <label for="agree-terms">Agree to
        <a href="#">Terms &amp; Conditions</a>
    </label>
    <button type="submit" class="button">Sign Up</button>
</form>
```
* if we reload, everything is ready right from the start because it's all empty and only if we enter something there, we get out of that invalid state.

* Now it's up to you if you want that, obviously you're greeting your user with an all red form here. You could find some combinations, for example you could change your selector to not select any invalid elements inside the signup-form here(Refer : form16).

###  Styling the Signup Button

* In shared.css we already inheriting our button font style.

* Now one thing I want to show here too is how you can style the disabled state of the button. In a real web project, it's not that uncommon for the button to be disabled, until the form as a whole is treated as valid.So here, we'll again hardcode it in there so that we can see these different styles.

```css
.button[disabled]{
  cursor: not-allowed;
  border: #a1a1a1;
  background-color: #ccc;
  color: #a1a1a1;
}
```

* Now this syntax here simply means target any element with the button class that also has a disabled attribute. this would target all elements with disabled that are nested inside of a button,

* If i reload this clearly show its not clickable(Refer : form17).

### 

