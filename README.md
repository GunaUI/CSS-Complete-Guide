# CSS-Complete-Guide

## Section 5: Practicing the Basics

 * So this this page as we left it and as I said, we'll work on this image a bit more in future modules, for now I want to continue working on this page, on the content on this page to be precise,

 * for example our plans. This section clearly isn't finished, we want to show a variety of plans the user may choose from here and the styling can be improved too, for example this could be centered but we also need more content obviously. Then reloaded will add yet another section and then a footer but let's get there step by step and let's start with these plans now.

 ### Adding Style to our Plans

 * Update index.html with plans related html changes, Lets start beautify this html with our css

 * the idea of course is to style each plan in the same way and as you saw in the preview, the middle plan, the recommended one should be highlighted one.

 ```css
 .plan {
    background-color: #d5ffdc;
    text-align: center;
    padding: 16px;
    margin: 8px;
    display: inline-block; /* To make sure all plans fit in the same row */
    width: 30%;
    vertical-align: middle /* To make sure all plans vertically aligned in the middle */
}
 ```
 * Now the middle one is a bit bigger because it has this extra recommended badge and it should be bigger because it is the recommended plan,

 * so this actually should stand out, we'll also change its background color and if we change the page size, then we see the plans scale with it, on small devices this looks ugly and eventually we need to add a line break because the content of the plan just is broader than the width we designed or we set up and with very big screens on the other hand, our plans get stretched out.

 * But these are things we will work on later once we learn how to add a responsive design and control the maximum widths of elements for example, so that is something we will fix but for now, this is already a nice look.

 * Of course we're not done though, the plans need to be styled differently, these list items need to look differently, the buttons needs to look differently and as I said, the middle plan, the recommended one also should look different than the other two plans, it should stand out.

 * Now these are all things we'll work on, one other thing I also want to do is I want to center this "choose your plan" text , and therefore will be centered horizontally.

 ```css
.section-title {
    color: #2ddf5c;
    text-align: center;
}
 ```

 ### Working on the Recommended Plan

 * So let's continue working on our plans. We got our first nice look, now I want to ensure that the plan in the middle really looks different  For this, I want to change its background color, I also want to highlight this recommended batch so to say and with that, we would have a layout, a look that would probably push the customer more into picking this plan which is something you typically want to implement on your pages.

 ```css
 .plan--highlight{
    /* this helper class to highligh the recommended plan*/
    background-color: #19b84c ;
    color: #fff ;  /* text color*/
    /*  The next thing that I want to do or that I want to add is I want to add a little drop shadow behind the plan.*/
    /* The box-shadow property allows you to define a drop shadow or an inset shadow by adding inset as the first keyword
    and then adding the same parameters as I'm going to show you but here I will not add an inner shadow, so I will remove
    that and then the other values which you would also add for an inset shadow then are the positioning of the shadow on the x-axis 
    so here I will pick 2 pixels, on the y-axis I will also pick 2 pixels here.*/

    /* so it's positioned 2 pixels to the right and to the bottom of the original shape. */

    /* Then you can define the blurriness, here I will pick 2 pixels too
    and the spread, so how much the shadow should actually  spread beyond the borders you define with the first two values */

    /* And the you add shadow color  I want to use a transparent black and for that, here's a second new thing, a color function.*/

    /* We thus far always defined colors with either a word, like red or a hashtag. Now actually, there are more ways of defining 
    colors than that and color functions are one other way,*/

    /* for example you can use the rgb function to define a color by setting its red, green and blue value which is a value between 0 and 255.*/
    /*  there's an alternative to rgb, there is rgba. Rgba also allows you to add a fourth argument, 
    the alpha channel which defines the transparency of this color*/
    /* here I will set this to .5 which means it has transparency of 50%. If you add 1 here, this will mean it's fully opaque actually
    so it's not transparent, if you use zero here, it's fully transparent*/
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5) ;
}
 ```
 * now we see we get that box with this slight drop shadow to the bottom and to the right which has a light blurriness and a little bit of spread, so a little bit of rough edges so to say, spreading out a little bit beyond the 2 pixels we defined and as you can probably also tell, it's not fully black, it's transparent, it looks great but it's actually transparent.

### Styling the Badge with "border-radius"

* So we added a drop shadow in the last lecture, now I want to work on that recommended badge. we already have a class plan__annotation

```css
.plan__annotation{
    /* this helper class to highligh the recommended plans subtitle*/
    background-color: #fff ;
    color: #19b84c;
    padding: 8px; 
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5) ;
    border-radius: 8px /* round the border corners - topLeft topRight bottomRight bottomLeft - alternate you can simple set one value also*/
}
```

### Styling bullet points

* So let's work on these bullet points together now. we added two clasess(plan__features, plan__feature) for UL and LI respectively in our HTML

```css
.plan__features {
    list-style: none; /* list style none removes the bullet points, */
    margin: 0;
    padding: 0;
}

.plan__feature {
    margin: 8px 0; /* 8px for top and bottom and 0 for right and left , this is to add some space between the items */
}
```
*  An alternative which I will use is that you assign a class to each of these list items, to basically stay in line with the rest of your code where you also use a lot of classes. We could name this plan__feature and of course this class assignment should now be added to every single list item. Again, this is kind of optional, you can of course use the combinator I just showed you, using a class probably is a bit cleaner or more in line with your other code but ultimately, it's up to you. 

### Working on the Title and the Price of our Packages

* For tile and price we add two more class (plan__title, plan__price);

```css
.plan__title{
    color: #0e4f1f;
}

.plan__price{
    color: #858585; /* This price color looks nice but not in highlighted plan*/
}

.plan--highlighted .plan__title{
    color: #fff;
}

/* now I'm using a combinator to target only the planned price classes in an element which has the plan highlighted class.*/
.plan--highlighted .plan__price{
    color: #0e4f1f;
}
```
###  Improving our Action Button

* Let's work on that action button you find at the bottom of each box.

```css
/* Gerneric button css*/
.button {
    background: #0e4f1f;
    color: #fff;
}
```

* If we now save this and we go back and reload, we can see that but we also see that the button has some strange differences. Let's inspect it in the developer tools. There we can see our button style is applied of course but if we scroll down, we see there are a couple of the default styles set up, like a border which is by default added, some default padding and if we go down a bit further, we also see that there are a lot of other defaults when it comes to the text of the button.

* That's why the font here and the text in general doesn't really look like the text on the rest of our page, maybe that's the style you want but I don't want it here.

* It does of course inherit the font family from our body but as you can see, this is actually overwritten because inheritance is always overwritten by direct style assignments and the direct style assignment we're getting is the font assigned here, the font assigned by the browser.

* So this is something I want to change

```css
/* Gerneric button css*/
.button {
    background: #0e4f1f;
    color: #fff;
    /*  we could set the font family but then we would keep the other overwritten font values, so I will target the overall font property which is also just a shortened
    for setting a couple of textproperties in one step and I will set it to inherit. */
    /* Do you remember inherit? Inherit was a keyword, a value which forces the inherited styles to be applied. So instead of using the browser defaults
    it now will actually prioritize inheritance, though technically that's not what happens, it just looks at what it would have inherited and directly assigns these styles*/
    /* so that we actually use the font family and the font defaults we have on our page and we set up in our body.*/
    font: inherit;
    border: 1.5px #0e4f1f solid;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer; /* with pointer, you get that hand icon whenever your cursor is over */
}
```
* One thing you'll notice though is that if you hover over it, you've got no indication that it's a button. You don't get that hand cursor and you also get no different hover style.

```css
.button:hover,
.button:active{
    background: #fff;
    color: #0e4f1f;
}
```

* Now hover active css applied , Now one final thing I want to do, the button doesn't do anything right now and that will change over this course but I don't like this blue outline onclick button

### Understanding Outlines

* So when we click on a button, we get this blue outline, another browser default. in developer tool top you could see pseudo selector , you could change the different filter and find the blue outline , actually focus causing this blue outline, so focus has outline property.

* !!!! Now the outline is comparable to a border but it's not part of the box model, keep in mind the border is part of the box model, the outline actually is not. The outline is just some additional border-like thing which actually is applied outside of the box,so before the margin but after the border and it's therefore like a lighter version of the border. 

```js
.button:focus{
    outline: none; /* we can ofcourse add different style*/
}
```
### Styling the Headline of the Core Features Section

```css
#key-features{
    background-color: #ff1b68;
    margin-top: 80px;
    padding: 16px;
}
/* let's target the section titled class with that descendant combinator, 
you could also use to direct child combinator(>) as a side note because the element with the second class is a direct child
 but I'll use the descendant here */
#key-features .section-title{
    color: #fff;
    margin: 32px;
}
```
* Now one thing I of course still need to change are these list items here, they're looking super boring and bad.

### Preparing the Content of the Key Feature Area

```css
.key-feature__list{
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

.key-feature{
    display: inline-block; /* To make sure all key features are in one line */
    width: 30%; /* why not 33? Because of the inline block bug, not really a bug but of that behavior where whitespace in between also gets a width
    and therefore 33% would actually not fill the entire width but a little bit more and hence we would have an ugly line break, with 30%*/
    vertical-align: top;
}

.key-feature__image{
    background-color: #ffcede;
    width: 128px;
    height: 128px;
    border: 2px solid #242424;
    border-radius: 50%; /* we have to set a border radius of course to turn the edges to rounded corners and to get a perfect circle, */
    /* now I want to center that circle horizontally. There's a nice trick you can use with the margin property. */
    margin: 0 auto;
    /* Well you can just set margin auto or zero auto because it only matters to left and right but doesn't
    hurt if you set it into all directions and auto will automatically fill the available space to the left
    and right equally to center the element horizontally.*/
}
```
### Adding the Footer

```css
.main-footer {
    background: black;
    padding: 32px;
    margin-top: 48px;
}

.main-footer__links {
    list-style: none; /* Remove li bullet style */
    margin: 0;
    padding: 0;
    text-align: center;
}

.main-footer__link {
    display: inline-block;
    margin: 0 16px; /* 0 to top and bottom  but I want have some distance between the list items which are in the same line due to inline block,
    so margin left and right could be 16 pixels. */
}

.main-footer__link a {
    color: white;
    text-decoration: none; /* To remove the default link style*/
}

.main-footer__link a:hover,
.main-footer__link a:active {
    color: #ccc;
}
```

###  Adding the Packages Page

```css
main { /* since we don't have second element so that we use the element itself as selector */
    padding-top: 32px;
}

.package{
    width: 80%;
    margin: 16px 0; /* 16px to top and bottom and 0 to left and right*/
    border: 4px solid #0e4f1f;
    border-left: none;
}

.package a{
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 32px;
}
```
* Now we have link style next we want to style our content.

### Styling our Package Boxes

```css
.package:hover,
.package:active {
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    border-color: #ff5454;
}

.package__subtitle {
    color: #979797;
}

.package__info {
    padding: 16px;
    border: 1px solid #0e4f1f;
    font-size: 20px;
    color: #0e4f1f;
    background: white;
}

#plus {
    background: rgba(213, 255, 220, 0.95);
}

#free {
    background: rgba(234, 252, 237, 0.95);
}

#premium {
    background: rgba(14, 79, 31, 0.95);
}

#premium .package__title {
    color: white;
}

#premium .package__subtitle {
    color: #bbb;
}

```

### Adding "float" to our Package

* So this middle plan should be positioned on the right of our page. How can we do this, how can we achieve this?

* Now with text align right, we can't do it because that's no inline element. If we turn it into one, then we will probably mess up the other styles,
inline block also doesn't look that promising,

* what we can do is a so-called float.

```css
#free {
    background: rgba(234, 252, 237, 0.95);
    float: right;
    border-right: none;
    border-left: 4px solid #0e4f1f;
    text-align: right;
}
```

* We haven't had a look at floats yet because it's a feature which you don't use that often, you use it a lot in the past to layout pages but thankfully, these times are over because you introduced a lot of problems with such floats. Now we got better ways like flex box which we'll dive into in this course but they can be useful, floating elements can be useful to position some elements differently in your document flow but what does float mean to begin with?

* Float means that you overwrite the default positioning and tell the browser to push an element to the left or the right of the page.

* but with float, you can also and that will automatically happen, take it out of the document flow, this is also why we're not using floats that often because you rarely want this.

* It's great for positioning an image in text and make sure that the text actually flows around the image, it's not as great for positioning block level elements as we do because the text will respond to it, the other block level elements won't so to say,

* What we have to do is we have to basically keep its space reserved and tell the other block level elements that come after it that they shouldn't respect any previous floatings and we do this with a little hack and that's why you don't really use floats for positioning anymore,it's ugly,

* you add an additional helper div after the element you've floated and add the below css (!!!!!)


```css
.clearfix{
    clear: both; /* which means clear floats on both sides, left and right which

are the two values you can assign here.*/
}
```

* we get better ways nowadays, we can use different things like flex box which make positioning so much easier and cleaner and we will dive into that as I said but be aware that float is available, that it's great for positioning something like images and text where you want the content to float around or to flow around but if you want to use it for positioning elements on your page layout, try to avoid it.

* be aware of that clear fix which actually clears the float to keep the elements in their place.

### Fixing the Hover Effect

* So do you know why this left border stays green when we hover over the plan while the other two borders become red?

* It has to do with specificity.

* Let's inspect this free plan element, the whole section and let's add the hover effect in the developer tools.border left with that green color
is the topmost rule,

* so it has a higher specificity than any rule below it, like our hover rule.So the general red border color is overwritten by this more specific rule

* why does this rule have a higher specificity? Because we use an ID selector and as you learned, ID selectors have a higher specificity than class selectors or pseudo selectors, so that's the reason for the behavior we're seeing here.

* Now how can we fix this? A clean fix with some redundant code kind of is of course to go down to our free ID selector and also add the hover as well as active pseudo selectors there 

```css
#free:hover,
#free:active {
    border-color: #ff5454;
}
```

* An alternative is you could move up to your hover and add !important;

```css
border-color: #ff5454 !important;
```
* Now what does important do? Important overrides specificity. Now this declaration always wins if you got it a second time with important, then the specificity is taken into account again but if you only had one time, this always wins.

* Using important is a bad practice, I will say it just like that because if you use important all over your code, your code becomes unreadable and you're breaking the concept of specificity which exists for a good reason.So use it in very rare cases

### Adding the Final Touches

* Center our plans

```css
.plan_list{
    width: 80%;
    margin: auto; /* To center the plan elements*/
}
```

* For small device this might not look good we will see that in upcoming sections...

* More on float: https://developer.mozilla.org/en-US/docs/Web/CSS/float






