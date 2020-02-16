# CSS-Complete-Guide

## Section 6:  Positioning Elements with CSS

* the position property which as the name says right here, allows us to change the position of elements on our website

* we've worked with the display property for example and we saw that this allows us to change the default behavior of the way our elements are displayed, so block level, inline and inline block for example but with the position property, we can really change the actual position of an element on our website.

### Why Positioning will Improve our Website ?

* Now where could we add the position property now? As I said, a property that allows us to change the position of some elements. Well actually we could change the position of our navigation bar 

* Now you might say what's wrong with it, it's a fine navigation bar and I would agree partially but if we scroll down, we see that the navigation bar disappears.

* So adding a fixed navigation bar definitely is something we should change or we should add right here. Additionally, the background image or more specifically, the slogan right here is not presented the best way. Generally, we should change the position inside this image.That's what I want to change on the starting page,

### Understanding Positioning - The Theory

* So why do we have to position our elements or how does it work so far actually?

* Well, to understand this, we can imagine the following HTML and body elements and inside this body element we have three divs for example, three block level elements in our case  (Refer image position1)

* and as we know, the general behavior of these block level elements is the way it is displayed right here (Refer image position1),

* occupying the entire space available in the row where they are positioned and because of that, being displayed one after another (Refer image position1).

* This basically is due to the fact that these are block level elements and that these elements are following the document flow which is basically the flow of a normal HTML document that we have right here.

* Now the question is, is there already some property applied automatically maybe which makes sure that this document flow is followed or will be followed by the elements?

* The answer is yes it is, the position property is applied automatically or by default in our HTML code, specifically a value for this position property of static is applied.

* As I said, this is the default value, so if you specify nothing, this is what happens and this will basically lead to the case that we saw so far on a website and also to the situation that we can see on the left, so basically everything works as intended.

* Now there might be situations where you want to change this normal document flow of your elements,what could that mean?

* Well for example, it might be the case that you want to position this first div right here in the right upper part or right upper corner of the HTML element or you might want to position the second div in the left upper corner of the body element.(Refer Image Position2)

* Now that's of course just some examples, basically you could want to position any element on more or less any position on your website.

* Now this is actually possible but not with this default value, for that you have to specify a position property with a value of absolute, relative, fixed or sticky.

* Now sticky is great out right here because sticky is a rather new value for this property and therefore the browser support is not the best, nevertheless we'll of course have a look at it and see how it works

* we need the position property in combination with a value different, that's really important, different from the default value which is static to be able to change the actual position of our elements on the website.

* That's not everything of course because with that, with these values, we just specify that we want to change the position.

* but we of course also have to specify how we want to change the position, so where are these elements should be displayed. For that, we must think about some additional concepts.

* we can again imagine our website like this (position1 image 1st div) and now focus onto this element right here because let's say that we apply the position property for this element with a value that is not equal to static, keep that in mind already.

* Now with that, we basically told our element, hey come on move to another position and the element probably asked ok but where should I move to and for that, we have four different options.

* We have top and bottom and we have left and right (Refer Position3)

*  Now of course we could also use this in a combination like top and left, bottom and right or maybe all of these depending on what you want to achieve on the website,

* with these properties, you change the position of the elements in your document flow, that's important.So these properties refer to the initial position in the document flow, that's the first thing

* but there is one other important concept that we have to understand because if we apply top 20 pixels now to our elements right here, well what does this mean, what do these 20 pixels top refer to?

* Well there are different options. One option will be that this declaration refers to the element itself. What does this mean? Well basically it says please take the current position of my element and move it up by 20 pixels,

* Another option could be though that the 20 pixels refer to a distance for example, so let's say it should be 20 pixels from the top of our viewport or of our HTML element, of our body element or of more or less any other element.So as you can see, we have a lot of options right here and all these options refer to the so-called positioning context.

* So this basically means, what does my positioning change that I want to achieve refer to? So that's the pure theory,

* let's now get a little bit more into a practical example, not by jumping back to our website immediately but by going to an intermediate project, so kind of a hybrid between theory and practice and play around with the property.

* Specifically, I would like to show you what the exact behavior of the static value and especially of the fixed value is.

### Working with the "fixed" Value

* Refer fixed-Position folder 

```html
<body>
    <div class="parent">
        <div class="child-1">Navigation Bar</div>
        <div class="child-2">Background Image</div>
        <div class="child-3">Features</div>
    </div>
</body>
```
* I want to focus on two these three divs right here to show you how the position property works.

* For that, I will not start with the position property though but with this top, right, bottom and left properties that we saw, so these properties that allow us to change to position of our elements in the document flow

* because at the moment, keep that in mind, we have the default positioning value applied and the default value is static and if we now add another selector right here, which could be parent child 1, so I'm referring to this element right here now, this navigation bar element and if I now say I want to change the position by top 100 pixels,

```css
.parent .child-1 {
  top : 100px;
}
```
 * let's just assume that you want to do that and if I reload the page, you can see that, nothing happens and that's the first important thing.(Refer Position4)

 * All the positioning changes we want to apply right now are only possible if you apply a value that is different from static, so different from the default value, keep that in mind.

 * However if we get rid of that top property now and change it to position fixed, as I said, the value I want to focus on 

 ```css
.parent .child-1 {
  position : fixed;
}
```
* and now go back to our website, well we can see that the behavior already changed.

* Actually we see two interesting things, the first thing see is of course that the width of the element decreased significantly, it almost looks like an inline element now, we will talk about that in a few seconds.(Refer Position5)

* Let's focus on to the maybe second thing (Background Image) that we can't see right here because the element now is now basically not existing for the other elements anymore, as we can see it(Refer Position5)the second element, so our background image, that's what it's called element now overtook this position the navigation bar element had. We can still see the navigation bar element right here but the background image is exactly at the same position

* And this happens because by applying position fixed to the navigation bar element, we took it out of the actual document flow.

* This simply means that for all the other elements here, this navigation bar element is no longer existing because we applied this (fixed) declaration to it.

* Now what about the width now, did we create an inline element right here now?

* Well let's quickly find that out by going back right here and maybe changing the width to let's say 400 pixels because as we learned throughout the course already, for inline elements, changing the width has no impact.

```css
.parent .child-1 {
  position : fixed;
  width: 400px;
}
```
* So if you do that and reload it, we can see that the width of our element changed (Position6), therefore we did not create an inline element now,we basically have an element which behaves like an inline block element actually.

* we took the element out of the document flow and we changed the general behavior from a block level element to a rather inline block element style.

* However, the element is called navigation bar, how could we now create the navigation bar with this position property that we applied?

* Well, if we now go back and maybe remember these top, bottom, left, right properties again, maybe these have an impact right now,

```css
.parent .child-1 {
  position : fixed;
  width: 400px;
  top:100px;
}
```

* let's see what happens. As you can see, the element moved down a bit (Refer Position7) but so far, it's not clear what this element refers to,that's this (top:100px;) positioning context.

* Let's maybe change the value to "top:0;" because with 0, we should immediately see what this element depends on and as we can see, the element basically seems to be sticked kind of near the border of the HTML element (Refer Position8) but kind of, it doesn't exactly fit, let's go back right here and let's now remove the margin from our element,maybe this makes things clearer. 

```js
.parent .child-1 {
  position : fixed;
  width: 400px;
  top:100px;
  margin: 0;
}
```
* If we reload that and if it now becomes evident. As you can see  (Refer Position9), the navigation bar is not dependent on the HTML element,

* but if we scroll down, we can see that this element now basically has the viewport as the position in context (fixed to the top even after screen scrolled down - (Refer Position10)). So basically, the position of this element (Fixed element) only depends on the viewport.

* I can prove this to you if I go back and change top to bottom for example

```js
.parent .child-1 {
  position : fixed;
  width: 400px;
  bottom:100px;
  margin: 0;
}
```
* if you have a look at it right now, you can see that now this bar is sticked to the bottom (Refer Position11), same thing can of course be applied if we change it to left or right.

* So the important thing now is that this now always refers or relates to the viewport and that's of course really cool

* if we now increase the width to 100% 
```js
.parent .child-1 {
  position : fixed;
  width: 100%;
  bottom:100px;
  margin: 0;
}
```
* because we would like this navigation bar to occupy the entire space available, like that, well then this should look fine.(Refer Position12)

* but right here we have a problem because we can see that the border is kind of located outside of our viewport(Refer Position12 - navigation Right border).

* Now we had such an issue already, do you know how we can solve this now? Well you probably know, we can simply add the box sizing with a value of border box.

```css
.parent .child-1 {
  position : fixed;
  width: 400px;
  bottom: 100px;
  margin: 0;
  box-sizing: border-box; /* Important !!!!  */
}
```
* so if we now reload the page, we can see that our navigation bar is positioned perfectly and always sticks to 100% of the width of our viewport (Refer Position13).

* So that's how easy it is to add a navigation bar, a fixed navigation bar to our website. 

* there is one more thing that I would like to show you because I talked about inline elements already and so far we only used block level elements, what would happen now though if I change the div, so the navigation bar div to an inline element, a span for example?

*  the selector to span but the navigation bar still sticks to the top. So that's also important to keep in mind, you can apply this positioning property no matter if you have a block level element or an inline element.

### Creating a Fixed Navigation Bar - in our uHost website 

* let's now make sure that our navigation up here also becomes a fixed navigation bar which is always visible.

```css
.main-header {
    position: fixed;
    width: 100%;
    background: #2ddf5c;
    padding: 8px 16px;
}
```
* we have just add added position as fixed, It actually looks quite fine immediately, 

* this might raise a question in your case because in the previous chapter, we added the top zero and left zero declarations to make sure that the navigation bar is stick to the left top of the viewport. why not here ?? 

* Now the reason for that was that we had a margin in our HTML element, if I add a HTML selector right here like that and add a margin of for example 30px so that it becomes really clear like that

```css
/* Dummy just for understanding*/
html{
    margin : 30px;
}
```
* If you reload you could not now the navigation not possitioned correctly.

* That's what you always have to keep in mind, as soon as you add a margin to the HTML element or the body element or basically any parent element of your header, then you have to add the top zero and left zero declarations in case you want to stick this navigation bar to the left top of your page,

```css
/* Dummy just for understanding*/
.main-header {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    background: #2ddf5c;
    padding: 8px 16px;
}
```
*  If you reload you could see the navigation bar stick to the top and left exactly. 

### Using "position" to Add a Background Image

* Now we want to add a background image to packages page. we first need an element that contains this actual background image.

* Next we'll dive deeper into background images in the next video, so I will keep it rather short in this video because the focus really is on the position property, so in case some things might be unclear, don't worry, we'll dive into that in the next module.

* However, we could add this containing element maybe right here,

```html
<body>
    <div class="background"></div>
    <header class="main-header">
        ....
        ....
```
* we have our background image inside images folder which is same level on the packages folder, now we need to add this image to our background and for that,

```css
.background {
    background: url("../images/plans-background.jpg");
    width: 500px
    height: 500px;
    position: fixed; /* without position image you can't see image there */
    /* the image should be positioned behind our actual content on the website,*/
}
```

* If we do that and now reload the page, yes then we can see as expected hopefully that it kind of works because as we learned already, with this value, we take the image or the element out of the actual document flow and therefore it doesn't exist for the other elements and because of that, it is positioned, well at the moment, above the other elements,(Refer : website-position1).we will fix that soon but generally we're coming closer to where we want to be.

* Now we can go back and also change the height and width to 100% right here, like this and like that, let's see if it works now and as we can see, the image indeed covers the entire viewport, so that's basically working now but if I now increased the width, well we can also see that the image is not correctly sized. At the moment the image is just displayed in its original size and as the viewport is smaller, well the image could actually also be a bit smaller. However we will dive deeper into background sizing in the next module,

* therefore for the moment we will keep that solution and continue our work.

* The important thing for the moment though is that we added this background image but it's called a background image but somehow, it is displayed in front of the other images and that's actually not the way it should be displayed.

### Understanding the Z-Index

* So why is our background image not a real background image? Well if we think back about what we did so far, we were able to position our elements along the x-axis with left and right and along the y-axis with top and bottom.

* Now as we can see right here, we also need a possibility to position our elements along the z-axis.Now the great thing is that we can do this in CSS and for that we need a new property, the so-called z-index.

* Now before we apply the property, there are some important things we have to understand first. 

* I said, the z-axis position can be changed by adding a z-index, so that's the property we need. 

* This property has different values, by default every element on our website has a value of auto-applied for the z-index, the auto value is equal to zero.If we don't change anything else but this is what you normally can assume, auto is equal to zero

* and this zero now defines the starting point from a y-axis perspective for the elements on a website. This means if you want to position an element above this package class, then you could simply apply a z-index of one, of two, of 10, of 100,it doesn't matter

* if you want to position that element below this class, then you can add -1, -100 and so on, I think you saw the pattern.

* But, here comes the but, adding z-index to elements which don't have any position property applied and by that, I mean a position property with a value different from static, for these elements, the z-index doesn't have any impact, so I could add z-index 100 right here,

* if I go back and reload the page, still the background image will be on top of all the other elements.

* This means this default style for the elements without any position property is just there and it's important to know that it's basically equal to zero but if you want to change it, you have to apply the position property.

* As I told you, the default value for the elements is zero and as the background image should be behind these packages we have, so behind these default elements, we could add -1 for example

```css
.background {
    background: url("../images/plans-background.jpg");
    width: 100%;
    height: 100%;
    position: fixed;
    z-index : -1
}
```
* Let's go back and reload the page to see if this worked, yes it did and this makes sense right because now we said that the z-axis, so the z-axis value defined by the z-index should be smaller than 1, -1 in our case, therefore it should be displayed behind these packages.(Refer : website-position2)

* so we changed it for the background class again, then we could see that the background image is again on top of our packages and on top of the navigation bar, can you see it? If I add a z-index of 0 right here, then the background image is on top of the packages.

* This makes sense right because with that, both have the same z-index but we learned already that by adding position fixed, the element is taken out of the document flow and therefore displayed above the existing elements, this is clear

* but why does the z-index of 0 lead to the situation that this navigation bar is displayed on top of the background image?? 

* but adding a z-index of 1 or 100, it doesn't matter in that case leads to a situation that the background image is on top of that nav bar.

* Well let's change it back to zero and think about the default value of the z-index for this background class because it's the same as for the normal elements. The default value for this z-index is also auto or zero in that case and the same thing is also true for our navigation bar,

```css
/* shared css */
.main-header {
    position: fixed;
    width: 100%;
    background: #2ddf5c;
    padding: 8px 16px;
    /* z-index: 0;  defult value is zero */
}

```
* So the z-index doesn't drive this behavior, what drives this behavior though in case we have two positioned elements with the same z-index is simply the order in the HTML file.

* So if we go to our index.html file in the packages folder, we can see that the background is the first element and after the background comes the header.Therefore the header comes later in our code and therefore the header is displayed above our background, it's as simple as that.And with that we now understood the core concept of the z-index,

* There is one other important concept, the stacking context. that we will see soon..

### Adding a Badge to our Package

* So how can we now add a badge to our package ?? 

* Now we added HTML for recommeded badge

```html
<h2 class="package__badge">RECOMMENDED</h2>
```

* This looks like this now, well not really beautiful yet but we will see how we can change that but at least we have our recommended text already here. The question now is, how can we change the position because that's what this module is about.

```css
.package__badge {
    position: fixed;
    top:50px;
    left: 400px;
    margin: 20px;
}
```
* as you can see, this is a lot of trial and error and in the end, the core problem is that the recommended badge would be related to the viewport and if we scroll down, well it would scroll with the page as fixed, definitely not the behavior we want to have for such a badge.

* So maybe there is another value for our position property which brings us closer to the behavior we want.

* The good news is there is because we can simply change position fixed to position absolute, like that. Now that we changed it to absolute,

```css
.package__badge {
    position: absolute;
    top:50px;
    left: 400px;
    margin: 20px;
}
```
* but let's scroll down and as we can see, if we scroll down now, the element is no longer stuck to the viewport, Well for absolutely positioned elements, the positioning context is defined based on two cases.

* 1.If none of the ancestors, so of the parent elements, has a position property applied, well then the positioning context of the element is simply the HTML element.

* 2.If we have the second case that we have any position ancestors, then the closest ancestor which has the position property applied is the positioning context for this element.

* Now let's see what is the case in our situation. If we simply change top 50 pixels to top zero once again, like that and reload the page

```css
.package__badge {
    position: absolute;
    top:0;
    left: 400px;
    margin: 20px;
}
```

* well we can see that our element apparently is stuck to the HTML element (top of the screen - website-position3) because that's actually the element that wraps the entire website.

* If we would change that and now add a position property to our package class 

```css
.package{
    position: absolute;
    width: 80%;
    margin: 16px 0; /* 16px to top and bottom and 0 to left and right*/
    border: 4px solid #0e4f1f;
    border-left: none;
}
```
* package class is an ancestor to package__badge

* If we reload the page right now, well this kind of crashes our entire website (website-position4) because now all the packages are displayed with an absolute value and as we know, this takes all the elements out of the document flow and therefore, we have this mess.

* But isn't there another position value that we could apply that doesn't crash our entire website?

* Well yes it is and we'll have a look at this value later but for the moment, we will simply apply it to our package class right here and this value is relative, like that.

```css
.package{
    position: relative; /* relative position*/
    width: 80%;
    margin: 16px 0; 
    border: 4px solid #0e4f1f;
    border-left: none;
}
```
* With that if we reload the page, we can see two interesting things already.

* Apparently the relative value doesn't take our elements out of the document flow (website-position5) but as I said, we'll dive deeper into that later

* the second interesting thing is that the positioning context of our recommended element right here (website-position5) now changed to the closest ancestor which has a position property applied

* So what have we seen so far? The fixed and the absolute value are quite comparable in general, both take the elements out of the document flow if you apply these values to these elements.

* but for the fixed value, the positioning context always is the viewport, 

* for the absolute value, the positioning context depends.If you don't have any ancestors with a positioning property applied, then the positioning context
is the HTML element,

* If you have ancestors with the position property applied, then the element, will be positioned in relation to the closest ancestor which has such a position property applied.

* With that, we basically made sure that our badge is at least positioned inside the right package but we didn't position the badge itself.

### Styling & Positioning our Badge with "absolute" and "relative"

* So the badge is inside our package but it doesn't look good and it's not positioned correctly (website-position5),

```css
.package__badge {
    position: absolute;
    top:0px;
    left: 400px;
    margin: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #ff5454;
    padding: 10px
}
```
* The general style is fine with that, what I don't like though is the position but as we learned how this works now, we have the absolute position but we are in the positioning context of the package,

```css
.package__badge {
    position: absolute;
    top:0px;
    right: 0;
    margin: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #ff5454;
    padding: 10px
}
```
* our badge is now positioned correctly inside our package, it is positioned in the right package.

* The problem though is that if we scroll down now, we can see that our package is above our navigation bar but we know how to fix this, right?

* If we go back and have a quick look at our shared.css file, we can see that the main header has a z-index of 0. If we change that to 1 

```css
.main-header {
    position: fixed;
    width: 100%;
    background: #2ddf5c;
    padding: 8px 16px;
    z-index: 1;
}
```
* so above the standard, then we can see that if we reload the page, that the navigation bar stays on top and our package scrolls smoothly below it. With that, our project looks quite cool actually and we understood fixed and absolute positioning,

* we also had a quick look at relative positioning. But as I said, there are some more details that I would like to share with you about this relative positioning.

### Diving Deeper into Relative Positioning

* So what can we do with this relative positioning now?

* why don't we just start and add the relative position to our first child, so to this navigation bar(Refer - Relative position folder)

```css
.parent .child-1{
  position: relative;
}
```

* nothing changes basically, the element stays or behaves the same way it did before when we didn't apply that value.

* We saw though in the project also that with this position property, we can of course change the positioning context of other elements, so of children of this element but as we don't have any children right here, there is not a lot that we can change right now.

* But the cool thing is that if we now go back and add for example top let's say 50 pixels and left 50 pixels, like that

```css
.parent .child-1{
  position: relative;
  top:50px;
  left:50px;
}
```

* then we can see that the element suddenly moves (Refer :relative-Position1) and why is this happening? 

* Well we saw for the fixed and absolute values that the elements are taken out of the document flow and then positioned relatively to the viewport or as we saw it, to the HTML element or to the closest ancestor which has the position property applied. 

* For the relative value, this is different because the positioning context is the element itself and at the same time, the element is also not taken out of the document flow.

* So what basically happened right here with our element is that we moved it down from its initial position, which was right here by 50 pixels from the top and then 50 pixels from the left, that's really important (Refer :relative-Position1). 

* With the relative value, you simply push your element from the current position down from the top by 50 pixels and from the left by 50 pixels.

* let's do this quickly, like that and reload the page, then you can see that the element moves from the right to the left by 50 pixels. So that's important to keep in mind, for the fixed and absolute values, the top, left, bottom and right properties specify a distance to the parent element basically, so to the containing block

* but for the relative positioning, this simply defines how this element should move from the current position.

* And as we can move the element basically wherever we want to, so we could also add top 300 pixels right here, well this can lead to the following situation (Refer : relative-Position2).

* We basically move the relative element right here out of the actual parent.(Refer : relative-Position2).so of our parent class

* Now you might want this behavior but there are probably situations where you say yes I want to move my element a little bit to the left, to the right, to the bottom, wherever but I want to make sure that it doesn't leave this parent or at least that it's not visible anymore as soon as it leaves the parent element right here. will see that in next task.

### Working with "overflow" and Relative Positioning

* So we saw how relative positioning works and we also saw that we can move our element out of the parent. Now to avoid this behavior, we can simply go to our parent element with the class parent right here and now add overflow hidden 

```css
.parent {
    background: white;
    padding: 20px;
    border: 5px solid black;
    margin: 0;
    overflow: hidden;
  }
```
* because this will exactly do what the property already indicates, it will hide the element once it's outside of our parent (Refer : Relative-overflow-hidden)

* as soon as the element moves out of the parent element, it's invisible. This can be a behavior you want or not but at least it allows you to make sure that you don't place elements anywhere on your website.

* revert all changes and lets imagine as fresh , But for the similar scenario as above  Lets say you have postion relative in your parent element with top value as 500 then the screen looks like the parent moved top 500 from the body

* Now you know a solution that if you try to apply overflow hidden to the body it should work right ?? will it work ?? no it won't hidden why is this happening??  (Refer : Relative-body-overflow-hidden-issue) 

* Well this is due to a default behavior of CSS. If you apply the overflow hidden declaration to the body element, this will simply be passed onto the HTML element and the consequence of that is, well you don't have the overflow hidden declaration on your body element,

* We can directly apply overflow hidden to the html we won't get any changes ie it won't hidden..This is just a default behavior of CSS

* !!!! we cannot change that unfortunately. What we can do though is we can simply take the chance and also add overflow hidden to our "both body and html".with this change you could see the elements hidden from body.(Refer : Relative-body-overflow-hidden-solved) 

* now, the overflow hidden declaration is not passed onto the HTML element because it already has such a declaration, why would it need it twice, doesn't make sense and because of that, this is working.

* It would also work if you add overflow auto by the way in html, as you can see, same behavior, the element cannot be displayed outside the parent which is the body element in our case.

* This is just some quick tip that I wanted to show you in case you have a situation like that. If your parent is not the body element, this is not a problem at all but if this is the case, then you can solve this issue with this little fix.

* With that, we now understood the relative positioning, so there is only one value left that we should have a look at, sticky positioning. we wil see that next

### Introducing "sticky" Positioning

* Let's have a look at sticky positioning. For that, I prepared another example for you,(Refer sticky position folder)

* what we can see right here are basically three different elements, we can inspect it right here, we have three parent classes and inside this classes, we have a class country with the country and two cities, two separate classes again. If we scroll through that page, we can see that there is nothing spectacular actually.(Refer : Sticky-Position-1)

* Now with that, let's start adding this position sticky declaration now

*  I don't explain a lot on purpose because I first want to show you what it does and then why it is doing what it does,

```css
.parent .country {
    background: #fa923f;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    position: sticky;
}
```
* If we now reload the page and scroll around, nothing changed 

* but if we now add another property a well-known property, top and say maybe 20 pixels, let's see if this changes the behavior of sticky. If you load again and now scroll down,

* oh what was that, can you see it? The USA, so the country element doesn't move in the beginning,you can see it but as soon as it touches a certain limit apparently, it moves downwards and behaves like a fixed element,

* So what can we see right here, what is sticky doing?

* Well sticky is basically a hybrid or a combination of relative and fixed 

* because if we now again remove top 20 pixels, we saw that and reload the page, nothing changes,

* so we basically added a position property which doesn't change the position in the document flow or which changes the position of the element at all, like relative does

* but as soon as we add the top property right here, the element behaves like a fixed element as soon as we reach a certain border. 

* Now the border is reached depending on our position of the viewport.

* If we change top 20 pixels to top 0, like that, I think you probably believe me that the relevant border is the distance between the viewport and can you see it, the border of our USA element right here. If we move down, it sticks right here and the same thing can be observed, nothing changes for 0 value

* can you see it? As soon as we reach our border of the France element, it moves down, same thing is true for Germany. So that's the first thing,

* apparently we can specify a distance between our element and the viewport and as soon as we reach this distance, the element behaves as fixed, I think we understood that.

* The interesting thing at the same time though is that the element simply stops being fixed as soon as it reaches the end of the content of its parent element and that's the second interesting behavior of sticky

* And as you can see, the body element doesn't have an impact at all, the parent also doesn't have an impact, the only impact is only as I said this viewport
but to end this fixed behavior, the end of the content inside the parents is the important factor.

* And we won't dive deeper into it in this  because sticky is a rather new value for the position property, so I think it's important to understand why it is there and how it works but browser support is not perfect yet,

* Therefore using sticky right now depending on your needs is maybe not the best idea but as this browser support might improve or will improve in the future, knowing sticky and also having a basic idea of how it works is definitely helpful.

### Understanding the Stacking Context

* So what is this stacking context? For that,refer stacking context.

* what we can see are three parent elements, so we have the navigation, the headline and contact us and inside the headline, we have three children, image one, image two and image three.(refer - stacking-context-1)

* really important thing though is that we applied position fixed to all parent elements and that's also the reason why navigation is at the bottom, then we have the headline on top of it and then contact us on top of the other elements.

* we know that these are fixed elements,

* we know that these are taken out of the document flow,

* they all have z-index of zero and because of that, the order in the HTML document defines the order these are displayed along the z-axis

* which is totally correct because we can see that navigation is the first, then headline, then contact us, so contact us is the one positioned at the top.

* We can also change that, this is also something that we learned, so we could for example go to our headline right here and now add a z-index of one for example, like that.

```css
.headline {
    background: rgb(77, 77, 248);
    top: 150px;
    left: 150px;
    width: 270px;
    height: 200px;
    z-index:1;
}
```
* Now hedlines will come to the top (refer - stacking-context-2)

* So this is what we know so far, nothing new, I just wanted to make sure that we have the same starting point because stacking context comes into play when we play around with these children right here 

```html
<div class="headline">headline    
    <div class="image-1">image-1</div>
    <div class="image-2">image-2</div>
    <div class="image-3">image-3</div>
</div>
```

* because let's say that we apply another z-index for our contact us form which is 100, like that.

```css
.contact-us {
    background: rgb(69, 214, 69);
    top: 180px;
    left: 320px;
    width: 180px;
    z-index: 100;
}
```
* With that, we know that contact us is back on top again (Refer : stacking-context-3)

* but let's now focus onto these three child images

* because what happens if I also apply position fixed to all three child images and then apply a z-index to one of these images for example that is above the z-index of the Contact Us element.

```css
.image-1 {
    top: 200px;
    left: 230px; 
    position: fixed;
}

.image-2 {
    top: 230px;
    left: 260px;
    position: fixed;
}

.image-3 {
    left: 300px;
    top: 260px;
    position: fixed;
}
```
* we know that so far and that image three is on top of these elements.(Refer :  stacking-context-4)

* This means if I would go back and add a z-index to image 2 let's say of one again, then image 2 will be positioned on top of these images.(refer : stacking-context-5)

```css
.image-2 {
    top: 230px;
    left: 260px;
    position: fixed;
    z-index: 1;
}
```

* If I will change the value to -1 for example, like that, well then the element is below the other elements, so image 2 cannot be moved below the actual headline element, below its parent

```css
.image-2 {
    top: 230px;
    left: 260px;
    position: fixed;
    z-index: -1;
}
```
* but what happens now if I change the z-index again and as I said a few seconds ago, make it higher than the one we have for contact us? Contact us right here has z-index of 100 and let's now say I add a z-index of 1000 right there, this is far above the one we have for contact us.

```css
.image-2 {
    top: 230px;
    left: 260px;
    position: fixed;
    z-index: 1000;
}
```

* If we go back and reload the page, you can see that image 2 is again above the other two images but it's still below contact us.(refer : stacking-context-7)

* Why is this happening? Well the reason for that is simply the stacking context and what does this mean?

* Well basically we aligned all our parent elements along the z-axis, that's what we know and by adding position fixed to these, each element has its own stacking context.

* This means for the elements inside the headline element, the z-index will only have an impact onto the order of these elements inside the headline element 

* but the general order of the headline element below contact us, this is defined by the z-index that we apply to the headline element 

* the positioning of the parent elements has nothing to do with these z-indices, for these parent elements, only the z-index of the parent elements itself has an impact. And this is the stacking context