# CSS-Complete-Guide

## Section 3: Diving Deeper into CSS

### Introducing the CSS Box Model

*  Every element in HTML is interpreted as a box by CSS

*  Every element has a content and then we can add a padding and the next part, the border.Now finally, we sometimes also want to have some spacing around an element and that would be the margin.It's not part of the core element, that ends with the border including the border but it comes after that.

### Understanding the Box Model

*  Padding - if you add a padding, then the content of the element is to be considered the content plus any margins it might have because padding and margins shouldn't overlap hence the padding is added.after the margin of child elements.

* border

* Margin

```css
#product-overview {
    background-color: #ff1b68;
    padding: 20px;
    border: 5px black solid;
    margin: 20px;
}
```

### Understanding Margin Collapsing and Removing Default Margins

* There is some whitespace to the left and to the right, so after the orange margin, this is coming from the body actually. If you hover over the body, you can see the body also has a default margin .that is simply coming from the browser defaults here.

* So what we can do to help prevent this and to make sure that our elements go directly into the edges of our page, We can set that margin to zero.

```css
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
```
* Now the interesting thing is if we also inspect the section above it, so the product overview section, do you see that orange margin at the bottom of it?
Keep in mind where it was.If I go back to the h1 tag, it overlaps with that section from the product overview container. This behavior is called margin collapsing,

* Refer box folder image

* if you got two elements block element with its box model, the margin is the orange part here,if you got two elements next to each other, then margins between them are actually collapsed to one margin,the bigger margin wins. This is not a bug, this is on purpose.

* This is there or this is enforced by CSS to ensure that you don't get two big distances between the elements.

* Either we can use margin-top or margin-bottom to check adjust as per our need.

### Deep Dive on "Margin Collapsing"

* When working with margins, you can get unexpected results. 

* Why are two adjacent elements sharing one margin even though each element has its own one? Why does a parent element (e.g. <section> ) suddenly take on the margin of the child element (e.g. <h1> )? It's always related to margin collapsing.

* You can dive deeply into it with the help of the following awesome article: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

* There, three base cases are described:

    * Adjacent siblings which both have margins
    * A parent which holds one or more child elements where the first and/ or last (or the only) child has margins
    * An element without content, padding, border and height
    Let's explore these cases:

* 1. Adjacent Siblings

    * In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter).

    * CSS will collapse the margins and only add the bigger one between the elements. So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements?

* 2. A parent with children that have a margin

    * To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.

    * If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.

* 3. An empty element with margins

    * This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.

### Theory Time - Working with Shorthand Properties

* Shorthand properties are simply normal properties that combine the values of multiple other properties in a single property

* Refer image in box folder

### Diving Into the Height & Width Properties

* we can set a width and a height. So on that product overview, we can set the width to 100% for example, to tell it to take the full entire width of this page. Now if we reload, we don't really see a change because that was its default behavior anyways

* because sections like divs or like h1 elements are block level elements. Now this is some HTML feature not related to CSS but it's important to keep in mind,block level elements unlike inline elements like anchor tags for example, block level elements always take the full available width by default.
So width 100% actually doesn't do anything, but if we reduced to 50% we will see the changes.

* we can also set the height of course. Now for the height,it's tricky, if you set height 100% and you expect it to now get the height of the full page, well
you're going to be sad, as you can see, it now only got a little bit bigger,

* the only thing it now does is it includes the height of the margin, of the h1 element. The reason for that is that 100% refers to the available height given by the parent container.not the total body/html element.

* that height of the main element is calculated dynamically by the content it holds, so it's only as big as its content requires it to be.

### Understanding Box Sizing

* what exactly did we change? When we set the height and the width, did we set the height and width of the content, of the content plus the padding, of the content, the padding and the border or of the content the padding, the border and the margin, well let's take a look

* If we hover the elemwnt we could see the width and height increased according the margin, padding and border we added to that element.

* So we set the height and width of the content and padding and border is not included into our calculation or is not part of what width and height target, it is what the browser in the end adds up to it though which leads to our element being positioned incorrectly.

* This happens because all elements by default happen to have a certain way of calculating width and height which is called content box,

```css 
box-sizing: content-box;
```

* we can set this behavior by adding the box-sizing property to the element where we want to change it and as I said, the default here is content box.

* This means if we set a width and height, we set width and height of the content, not of the entire box including padding and border. We can set it to border box

```css 
box-sizing: border-box;
```
*  We can set it to border box though,now width and height include padding and border, they don't include the margin and we can't make it to include that.

* It's actually so common that you often overwrite the styling for all your elements to always use box sizing border box because it's more convenient to think of the height and width referring to the entire box without margin than to just the content.Now as I said, margin is never included,

*  If you want your element to sit right on the edge, don't add a margin after your element, it makes sense that this is not part of the width and height.
So box sizing border box, really really useful

### Adding the Header to our Project

```html
    <header class="main-header">
        <div>
            <a href="index.html">
                uHost
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="packages/index.html">Packages</a>
                </li>
                <li>
                    <a href="customers/index.html">Customers</a>
                </li>
                <li>
                    <a href="start-hosting/index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
```
```css
.main-header {
    width: 100%;
    background: #2ddf5c;
    padding: 8px 16px;
}
```
### Understanding the Display Property

* we would need the display property to change the way our list items are positioned and we do.

* The display property allows us to change the behavior of an element from block to inline or even to inline block which is a mixture or to none to remove it from the DOM even.

* In HTML, we got inline and we got block level elements, example for inline elements would be anchor tags, they are rendered inline. If we have two anchor tags after each other as here for customers and we reload the page, we see they're rendered in the same line, they don't take the full entire width as block level elements do.

* for the inline element, we can't really set a margin top and bottom for example because that's not how inline elements work,they are not positioned in the flow like block level elements, they don't take a new line necessarily, hence margin top and bottom is difficult because they might be inline with another element.we can change that behavior with the display property.

```css
.main_nav__item{
    display: inline;
}
```
* to display inline-block, this mixes the behavior of both inline and block level elements. Like inline elements, these elements can go next to each other now but they still behave like block level elements when it comes to setting top and bottom margins, setting paddings, things that are not possible on inline elements.

* they behave like an inline element such that they only take as much width as their content sheets and they fit into one line but they still have a box where we can set a padding and so on. if we add some padding or something we could see the effect on that.

* We can style the list items still like block level elements but they sit next to each other like inline elements

### display: none vs visibility: hidden

* We had a look at display: none;  - this value removes the element to which you apply it from the document flow. This means that the element is not visible and it also doesn't "block its position". Other elements can (and will) take its place instead.

* There is an alternative to that though.If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use visibility: hidden; 

```css
.box-1 {
    display: none;
}
 
.box-2 {
    display: inline-block;
}
```
* where x  has the class box-2 . The first element just isn't displayed. It's still part of the DOM though, you can still access it via JavaScript for example.

```css
.box-1 {
    visibility: hidden;
}
 
.box-2 {
    display: inline-block;
}
```
* _x  where _  simply is an empty spot and x  has the class box-2 .The element is only invisible, it's not removed from the document flow and of course also not from the DOM.

### HTML Refresher: Block-level vs Inline Elements

* It's not really a CSS topic, though it's related to it: The difference between block-level and inline elements.

* You can read a more detailed article (which also includes a YouTube video about HTML at the top of the page) here: https://academind.com/learn/html/beginner-s-guide/diving-deeper-into-html#block-level-vs-inline-elements

* Here's the executive summary:

* Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines.

* Some examples are: <div> , <section> , <article> , <nav>  but also <h1> , <h2>  etc and <p> .

* Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

* They also use the box-model you learned about but margin-top  and margin-bottom  have no effect on the element. padding-top  and padding-bottom  also have a different effect. They don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

* Additionally, setting a width  or height  on an inline element also has no effect. The width and height is auto to take as much space as required by the content.

* Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set display: inline-block  to merge behaviors.

* Some example elements are: <a> , <span> , <img> 

### Applying the Display Property & Styling our Navigation Bar

```html
<header class="main-header">
        <div class="main_nav__item">
            <a href="index.html">
                uHost
            </a>
        </div>
        <nav class="main_nav">
            <ul class="main_nav__items">
                <li class="main_nav__item">
                    <a href="packages/index.html">Packages</a>
                </li>
                <li class="main_nav__item">
                    <a href="customers/index.html">Customers</a>
                    <a href="customers/index.html" style="display:none">Customers</a>
                </li>
                <li class="main_nav__item">
                    <a href="start-hosting/index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
```
* CSS
```css
.main-header > div{
    display: inline-block;
}
.main_nav{
    display: inline-block;  
    text-align: right;
    /*here with the calc we are calculating the actual width fro nav to take after subtract from the div.*/
    width: calc(100% - 49px);
}
.main_nav__item{
    display: inline-block;
}
.main_nav__items{
    margin: 0;
    padding: 0;
    /*   list-style: none; ensure (removes) there no bullet points..*/
    list-style: none;
}
```
* Still div is not aligned in the same line why ??

### Understanding an Unexpected "inline-block" Behaviour

* So what's causing this navigation element to sit in the new line even though we're assigning a width which is 100% minus the width of that div?

* Now you could say it's the padding of the header but that's not the case, we got box sizing border box, so padding is included in all width calculations,

* so width 100% already is header width minus the padding of the header, so that's not the case..Instead it's something related to display inline block.

* Actually, this empty whitespace in your editor is considered a character and is added as an extra inline element. how can we avoid that ... we can't find the exact width of that whitespace in your editor.. its better to add some more subtract value will fix this.(Hack)

```css
.main_nav{
    display: inline-block;  
    text-align: right;
    /* width: calc(100% - 49x); */
    width: calc(100% - 54px);
}
```

### Working with "text-decoration" & "vertical-align"

* vertical-align - let us to align based on vertically middle/top/bottom... etc
* text-decoration - decorate text

### Styling Anchor Tags

```css
.main-nav__item  a{
    text-decoration: none;
    color: #0e4f1f;
}
```
### Adding Pseudo Classes

```css
.main-nav__item  a:hover{
    color: #fff;
}
```
### Theory Time - Pseudo Classes & Pseudo Elements

* Pseudo classes define a style or allow us to define a style for a special state of an element, like the hover or active state.

* Pseudo elements allow us to define a style of a specific part of an element. 

* Pseudo classes are defined with a single colon and then the class name like hover or active :Class Name

* Pseudo elements are defined by adding two colons and then the element name and it's about the state versus the part, that's the difference. :: Element Name https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
```CSS
#plans > p::first-letter{
    color: #ff1b68;
}
```
### Grouping Rules

```css
.main-nav__item  a:hover{
    color: #fff;
}
.main-nav__item  a:active{
    color: #fff;
}
```
* Do you know these two rules? They're exactly equal if we leave out the selector which of course differs. If you got a case like this, you can group them into one rule because repeating code like this is not good and if you ever change the color, you have to change it in two places. So what we can do is we can group the two rules by adding a comma after the first one and then in the same one in the next line,
```css
.main-nav__item  a:hover,
.main-nav__item  a:active {
    color: #fff;
}
```
* Important, this is not a combinator, these two rules, these two selectors are not related at all, they just share the same declaration set.

### Working with "font-weight" & "border"

```css
 border-bottom: 5px solid white;
```

### Adding & Styling a CTA-Button

```css
.main-nav__item--cta a{
    color: white;
    background-color: #ff1b68;
    padding: 8px 16px;
    border-radius: 8px;
}
.main-nav__item--cta a:hover, 
.main-nav__item--cta a:active{
    color: #ff1b68;
    background-color: white;
    border: none
}
```
### Adding a Background Image to our Project

```css
#product-overview{
 background: url("freedom.jpg");
}
```
### Properties Worth to Remember

* color, backgroud-color, display, padding, border, margin, width, height.

### Useful Resources & Links
CSS Box Model: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model
box-sizing : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
More on height & width: https://www.w3schools.com/css/css_dimension.asp
The display  Property: https://developer.mozilla.org/en-US/docs/Web/CSS/display
Pseudo Classes on the MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
Dive deeper into Pseudo Elements: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
