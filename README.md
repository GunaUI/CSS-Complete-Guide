# CSS-Complete-Guide

## Section 2: Diving Into the Basics of CSS

### Adding CSS to our Project with Inline Styles

* there are three different ways of adding CSS,
* Inline styling. 
```css
    style="background-color: #ff1b68";
```
* Now this approach is actually not recommended because if you create a bigger page with many styles, it quickly becomes very hard to understand and read your code because your style is always applied to the element you want to change.

### Understanding the <style> Tag & Creating a .css File

* A selector simply is an additional piece of information that tells CSS to which element in your DOM, so inside of your body and the body is also treated as an element by the way, to which element you want to assign this declaration.
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>uHost</title>
    <link rel="shortcut icon" href="favicon.png">
    <style>
        section {
            background-color: #ff1b68
        }
    </style>
</head>
```
* Now there is one other way of including styles though and that is using an external stylesheet, so let's do that now. (main.css)
```css
section {
    background-color: #ff1b68
}
```
```html
<link rel="stylesheet" href="main.css"/>
```
### Applying Additional Styles & Importing Google Fonts

```css
h1 {
    color: #ffff;
    font-family: sans-serif;
}
```
* here "sans-serif" we got it from your chrome(browser) preferences..
* In-case if we want to add enternally imported font style you could find in https://fonts.google.com . Just add that font that will give a link and the way we have to specify the font-family in css. This is how you could add font style to your project.
```html
<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
<link rel="stylesheet" href="main.css"/>
```
* Makes sure you added the font link above the main.css link.
```css
font-family: 'Anton', sans-serif;
```
### Theory Time - Selectors

* Elements - sets the equal styles for all of these elements.
* Classes - Set the equal style for the elements within the same class. we could add multiple class with seperated by space between them.
```css
.section-title{
    color: #2ddf5c;
}
```
* Universal - Apply this css univerysally to all the element everything this selector will be denoted with '*' (star)
```css
* {
    background-color: #ff1b68;
}
```
* ID - Allow us to select element based on the Id.
```css
#product-overview {
    background-color: #ff1b68;
}
```
* Attributes - Set equal styles to all the elements with the attributes.  by enclosing the attribute name in square brackets,
```css
[disabled] {
    color : #dddd
}
```
###  Understanding the "Cascading" Style & Specificity​

* Inline styles have higher priority, then class and then element, then browser default css, pesudo class and universal selector have the lowest priority.

* we have multiple rules affect the same element is the cascading part.

* CSS stands for cascading style sheets and cascading simply means multiple styles can be applied or multiple rules can be applied to the same element.

* Now these rules may lead to conflicts though,Now to resolve such conflicts, CSS knows a concept called specificity 

* there are clear rules included in the CSS specification that define how such conflict should be resolved and which type of selector has a higher specificity

### Understanding Inheritance

* inheritance means that an element also inherits some styles of the parent element.

* For eg if we want apply some global css rules.. we can use star(*) selector the problem with the star selector is that it's very inefficient the way CSS has now to parse all our elements on the screen, so we will use it but not for a global font family.

* Instead of * we could use something different, you style the body. Keep in mind, the body wraps all your other content,
```css
body {
    font-family: 'Montserrat', sans-serif;
}
```
* you will actually see that inherited from body section and elements inherit styles from their parents,direct or indirect parents and not just from the body. The body clearly is no direct parent of h1 but it is a parent in the chain of elements here

* However inheritance has a very low specificity, inheritance always comes at the bottom even below the browser defaults.

* and therefore, setting this up in the body section is a great way as it will then make sure you can use inheritance.

###  Adding Combinators

* Incase i want to use the default font family not the one which is specific to h1 tag, How can we do that.

* Since I want to use the default, there are two ways of solving this. The first one is that we also go to the section title and set font family to inherit,
this is a special keyword which simply means please use the inherited style, basically you can think of that increasing the specificity of iheritance for that specific property

```css
.section-title{
    color: #2ddf5c;
    font-family: inherit;
}
```
* but this is not necessarily the best way.If we ever have another h1 tag, which maybe has a different class but also should use the default font family,
we have to add font family inherit on that class too.

* Would be nicer if it could do the opposite and simply say, hey this h1 tag in the first section, that should be the only one that gets this font family instead of all h1 tags by default, How can we do that??

* You might think of adding class or id that is not very better way what else we can do ?? So one thing we can use is a so-called combinator.

* Combinator allows us to combine multiple selectors to be more precise about what we want to select.

* We can add a combinator to that h1 selector to narrow down which type of h1 tags we want to select

```css
#product-overview {
    background-color: #ff1b68;
}
#product-overview h1 {
    color: #ffff;
    font-family: 'Anton', sans-serif;
}
```
* By applying the above rules this Anton font will only apply to th first h1, it is not necessary the h1 should be the direct child !!! even you wrap it inside some other element it will work as expected.
```html
<section id="product-overview">
    <div><h1>Get the freedom you deserve.</h1></div>
</section>
```
* what we're using here is a so-called combinator because we combine multiple selectors. As a side note if you use combinators, you also create a higher
specificity.

* So the more specific rule has a higher specificity, makes sense I guess.

* Also don't mistake this with inheritance, we're not inheriting a style from #product-overview. we're setting a style only for h1 tags 

* It's not the same as inheritance because this is not passed down automatically, we're explicitly selecting h1 tags here.

### Theory Time - Combinators (Refer combinator folder)

* Now combinators allow us to be more clear about our rules and select elements by passing more information to the selector.

* you can combine them with four important types of combinators.

* The first one is the adjacent sibling combinator (+), here it means all p tag which is direct next to h2
```css
h2 + p {

}
```
* the second one is the general sibling combinator(~), , here it means all p tag which is next to h2 , not necessary immediate next to h2
```css
h2 ~ p {

}
```

* then we have the child combinator (>), here it means all p tag which is direct child of h2
```css
h2 > p {

}
```

* and the descendant combinator ()., here it means all p tag which is child of h2, not necessary of direct child.

```css
h2  p {

}
```
* so classes IDs, these have great performance,combinators which use them also tend to do pretty good.


