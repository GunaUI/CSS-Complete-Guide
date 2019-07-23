# CSS-Complete-Guide

## Section 4: More on Selectors & CSS Features

### Module Introduction

* In this module, we'll dive into some additional details on CSS classes, for example when you should use them and when you should use ID selectors. We'll have a look at the important annotation which we can add to our declarations. We'll have a brief look at pseudo classes and elements again and especially we'll have a look at the not pseudo class.

###  Using Multiple CSS Classes & Combined Selectors

*  you can use multiple classes on one element.if you got two classes applied to the same element and they both happened to set a certain style on
the element, then the normal specificity and order rules will apply. the order in this class list here is not important regarding this.

* "a.active" means anchor tag with active class.The difference to a combinator here is that we're not selecting an element with the active class that's
nested in an element which is an anchor tag but we want to select an anchor tag that has the active class and we didn't encounter a combinator that would allow us to do that yet because there is none, this is the way to achieve this.

* Now let's have a look at that combined selector, for example this first anchor tag is not just an anchor tag, it also has the active class, the second one doesn't have that class.Now let's say we want to give that first anchor tag a special style,

* now we're saying apply whatever styles we're defining here to an anchor tag which has the active class applied to itself.

```css
/* If this is a Class */
a.active {
    color: #521751
}
/* If this is a ID */
a#active {
    color: #521751
}
```
### Classes or IDs?

* when should you use which kind of selector?

* The advantage about CSS classes is that they're reusable,

* ID selectors can be a decent choice too though. They're only used once per page or an ID is only used once per page I should say and therefore, if you get a certain style that really should just affect one element on your page and never more, 

* if you planned on using an ID anyways, if it semantically makes sense but don't just add them because you want to add some style. Now let's have a look at what I mean with that linking thing. Back on our page, if we inspect the HTML code, you can see that on both anchor tags, I actually linked to an ID,
we do this by adding a hashtag and then the name of the ID. The IDs are then used on the sections and because the sections have a height of 800 pixels, simply just to ensure that we can scroll on the page, I can actually show you what these links will do. If we go back to the page, I can scroll down to the outro section here but I can also click on outro and then my browser will jump there, because in the URL, it added outro at the end of the URL. This is
one thing that's baked into HTML, it's not related to CSS at all, has nothing to do with it. It's a nice behavior,

### (Not) using !important annotation

```css
color : red !important;
```

* Let's have a look at the important annotation, now what is that?  what does this do? 

* It overwrites specificity and all other selectors, that's super important.It overwrites all these things and therefore, this specific declaration would always be applied. Therefore you shouldn't really use important. In most cases, it's not a good idea to use it because you're overwriting something that's baked into CSS, it quickly leads to bad code and you'll find yourself using important all over the place, you're messing up your CSS code therefore.

* There are some edge cases in which using it can be fine

### Selecting the Opposite with :not()

* There is one special pseudo class into which I want to dive right now though and that's the not pseudo class.

* This is an interesting pseudo class because it allows us to basically reverse a certain rule or exclude a certain selector.
```css
:not(p){
    color : blue;
}
```
* This will apply blue color to all element except p tag.
```css
a:not /* anchor tag with not class*/
div :not(p) /* !!! notice space between div and pseudo class ... that means all child element of div except P tag 
```
 
 ###  CSS & Browser Support - this is an extremely important lecture !!!!!!

 * Whenever you use a certain feature in CSS, be that a certain type of selector or more relevant, a certain property, a certain style, you have to check if the browsers of your target audience supports that feature, otherwise you can't use it, 
 
 