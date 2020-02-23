# CSS-Complete-Guide

## Section 8: Sizes & Units

###  Introduction 

* it's time to have a look at dimensions, sizes and units because there is more than pixels.

### What's Wrong With Our Project Units?

* So that's the first thing I wanted to show you, we have this percentage applied and because of that, our website is a bit more dynamic.

* However if you look at the font size, for example right here, you help me set her up, you can see this size doesn't change if I increase the width. Why should it? It's still readable. However if I zoom in into our website, like that, you can see that the font size increases significantly.

* Now you could say this is clear because if somebody cannot read the text, he can increase the size and I would totally agree but I will also say that with this behavior, we totally give the browser the chance to decide how our side should be zoomed and how the different elements on our side should be zoomed.

* And I don't think that's a good idea because although we want to allow our users to increase the font size for example, we want to make sure that the general look, so that the proportions between the different font sizes for example are still met. 

* Therefore working like this, with the pixels like we did it so far, if we inspect that, we only have pixels right here, if I scroll down, you can see we have a font size of 20 pixels.

* So using a fixed font size of pixels and letting the browser zoom do the work is not the best idea.

* In case if you are changing your browser prefered font size to very large.

* but on our website, well this only affects few parts of the fonts. As you can see the font size here in the nav bar increased, the same thing is true for our footer right here but this text right here didn't change at all.

* and this makes sense because as you just saw, we defined a font size of 20 pixels for this text. So how should it increase? For the elements in the nav bar and in the footer for example right here, we didn't define any font size.

* So what happens right here is that as soon as the visitor of our website increases the font size, the default font size will also be increased based on these default settings.

* And now you could argue, well then everything is all right, we don't have to apply any font sizing because it's all done by the browser settings.

* And again that's probably not the behavior you want to have because we're going to have different font sizes on our website and at the same time, we want to allow the visitor to display the website with the default font size of his choice though.

* So as we can see, with fixed pixels, this wasn't possible, with not applying any font size, it's also not possible because each font will have the same size then.

* Let's then find out if we have more units available which might allow us to be a little bit more flexible and this flexibility refers to font size but also to the general sizing of our elements.

* But because as we already saw, we applied the percentage, the value already to size our image for example but we didn't totally understand what drives this percentage value and what it refers to. Additionally, there might be alternatives to percentages so it might make sense to also have a look at these.

### Where Units Matter

* Pixels, percentages and more, what do I mean by that?

* Well so far we worked with two units basically,pixels(px) and percentage(%), Now in addition to that, we got more units available in CSS,
for example we have the root em and the root em is written with a unit of (rem). Root em or rem is a unit that refers to the font size,

* In connection with rem, we also have em written just like that, (em) from a unit perspective

* Em and rem both refer to the font size but there is also one important difference between these two units, we'll also find out what this difference is of course.

* In addition to that, we also have the viewport height, written as (vh) and we have the viewport width, written as (vw),

* The problem now is, well you probably have this question mark in your head now because we basically understood pixel so far but we are not even sure about the percentages and what they actually refer to and then I come over with new units and with rem and em and so on, so this is maybe a bit too much. 

* But actually, we can break down these units and the issues arising in connection with that to three core questions,

    * the first question probably is this one, which properties can I use in connection with these units? Because we have all these units but just applying a unit alone won't help us a lot. So we have to find out if there are properties which are really made or basically made to apply some of these units, maybe all of them or a specific unit, we'll find out that but the first question really is, what can I do with these units?

    * The second question is how is the size calculated? I talked about that already a bit regarding the percentages because we always need something like a reference point. We'll have a look at the percentages and I said that rem and em are kind of connected to the font size and for vh and vw, well it's called viewport height, viewport width. This might be the viewport and you're right by the way but we have to find out how exactly this calculation works.

    * And then after we understood this, the last question probably is, what's the right unit to choose right now? Because we know that we have different properties, we know how it's calculated but which unit should I apply for which properties, are there any best practices or can you give me some advice?

* Refer : unit1 !!!!

* why don't we just dive directly into the first question, which properties can I use or where units matter? So here, you can find the question again. 

* Because basically we have our box model,

* first we will have some content over the conetent we will have padding and  if we think about the padding which specifies the distance between the content and the border,

* well then the padding itself would be a really good property to apply a specific unit that defines the size of this padding.

* The same thing is true for the border actually, the border is also a property where applying a specific unit definitely makes sense, and if we follow our box model, then this is of course also true for our margin right here. Now with that, we see that we have already four properties where units definitely matter.(Refer : unit2)

* Now let's continue, what else do we have in our box model?

* Well we have this right here, the width and we have this right here, height because height and width are also properties where we have to specify a unit,

* By the way, at the moment I indicated the width and height with box sizing being set to border box, just to remind you of that but that's also something you know already by heart hopefully. 

* However, with height and width, there are only well basically four more properties where units actually matter ie top, bottom, left and right 

* So the first question, so which properties can I use, I think this one is answered (refer : unit3).

* And with that, we can now move on to the second question we had on the last slide, how is the size now actually calculated for the different units?

### An Overview of Available Sizes & Units

#### So how is the size calculated? - Refer (unit4)

* The first category would be absolute lengths. hat happens right here is that these absolute lengths mostly ignore user settings.Well what do I mean by that?

* Well if we apply pixels for example If I do that and our user changes the default font size, well then the font size on the website won't change because the user settings as it's written right here are ignored. So we specify a pixel and that's it, the user cannot change it.

* Yes you can change it by zooming in with the browser but we learn that this is probably not the behavior that we want.

* In addition to this pixel as an absolute length, we also have centimeters, millimeters and more

* but these are not units you should use in web development because centimeters and millimeters, these are units you use if you have something on paper because on paper, one centimeter is one centimeter, on a display, one centimeter definitely is not equal to one centimeter, so using these units in the end will just lead to a total mess. So we should avoid these, we won't use these, therefore I just wanted to show you that these units are also existing
but we will stick to pixels when it comes to absolute lengths. With that we finished the first category of units,

* what's the second category?

* Well the second category are viewport lengths. Viewport lengths, as the name says actually, adjust the size of the element we apply to according to the viewport, the viewport lengths can be applied with the vh value,so viewport height but also with viewport width

* we have more, we have vmin and vmax, we'll have a look at that once we understood vh and vw but generally, these lengths allow us to adjust our size more dynamically to the viewport.

* You'll learn what the viewport is, basically the visible part of our website in the browser.So that's the second category, viewport lengths

* then we have a third one, font relative lengths. As the name says, font relative lengths adjust to the default font size like rem,em

* and that there is an important difference between rem and em that there is an important difference, we'll find out more about this difference and we also have more units available that are just sort of font size but as you can see, I didn't even mention them because rem and em are really the units you have to know when it comes to font relative lengths.

* And with that, there is only one category left and this category is a category we already know, the percentages,we applied these a lot already on our website.

* But the interesting thing is that, although we apply the percentages, we didn't understand how it works in detail and more importantly, it's even a special case.

* Now why is the percentage value a special case? - refer (unit5)

* Well because we have to answer the question, how this box size is actually calculated if we use the percentage unit to calculate the box size

* because the situation normally is the following, you have a div, this can have a padding and a border, like here  ( refer unit5) and this div is normally nested into another div. This could be the body element, this could be another parent element, anything like that.

* Well and now the question is of course, this box size right here as a percentage value and this box width right here, also as a percentage, well what is this height and this width referring to?

* So if I add a width of 80%, what is this 80%?

* Is it 80% of the parent, 80% of the body element, of the HTML element or of anything else we don't know so far? This is exactly the problem we have to take a closer look right now and for that, we have to understand the so-called containing block.

### Rules to Remember: 1.Fixed Positioning & "%"

* So how does this percentage unit work, what does it refer to?

* For that, I prepared for three rules to remember , Now let's dive into it right now

* the starting point of course is an element. So this is the element we applied a percentage unit to, for example to the width property. Now the important thing is that this is a special element. Why is it special?

* Because it has this declaration also applied, position fixed (refer : unit6), although we will not position our elements in this module, the position property definitely has an impact on the way the percentage unit behaves.

* Now how does this impact work? Well the reference point for such an element with a percentage unit is called the containing block

* this containing block is simply for example a parent element for example which has a width of let's say 100 pixels applied.

* If this parent is the containing block  well then our child, so our element right here, would have a width of let's say 10 pixels if we applied a width of 10% to it, so 10% width of a child would be 10 pixels if the containing block has a width of 100 pixels.

* Now the issue is that the containing block depends on the position property applied to our element right here and in case the position property or the value for this property that we applied is fixed, then the containing block is not an element, it's the viewport (Refer : unit7)

* and that's actually quite nice because if you remember back the position module, then we also had that relationship between a fixed positioned element and the viewport.

* So I'm back on the customers page but I'm actually more interested into our nav bar right here because this nav bar if we inspect it, as we can see it has the position fixed declaration applied and as we just saw because of that, this width of 100% should refer to the viewport.

* A good indication is that if we change the size of the viewport like that, we can also see that the nav part changes

* if we inspect and see the nav bar width you could see (for eg 882px), and also you should remember our navbar width is 100% 

* if I now reduce it to 50% let's say and go back and reload the page, we can see that the nav bar decreased its size to only 50%, so this should be as we can see it 441 pixels, before we had 882, so 50% now.

* And more interestingly if I increase the size of the viewport right here by increasing it, we can see that the nav bar also increases and decreases,

* with that, we understood that whenever we have an element which has the position fixed declaration applied and a percentage unit, well the containing block is the viewport. This was the first rule to remember.

### Rules to Remember: 2.Absolute Positioning & "%"

* After the first rule comes the second one and this one also starts with an element but as you can imagine, this is again a special element because this time, we again have a percentage unit applied but we don't have position fixed but position absolute.

* Now with the different position value, the containing block also changed. Previously, we had the viewport, now we have an ancestor and which ancestor is this? (Refer : unit8)

* but the important thing is that the percentage now, so the percentage unit of our element refers to this ancestor's content plus the padding, that's really important.(Refer : unit9) So I repeat that, the percentage unit of our element with the position absolute declaration refers to the ancestor's content plus padding.

* So if we again have a percentage unit for the width, for our element, we will take the width of the ancestor's content and padding as the containing block.

* The question now is, which element is now the containing block because this time as we see it, it's obviously an element and this element simply has one of these position properties applied.(absolute, relative,fixed, sticky)

* Now to say it in simple words, the containing block for an element with the position absolute declaration applied is the closest ancestor which is not position static, that's actually how you can remember that.

* let's also have a look at our website and see if we can find an example for the second rule.

* if you remember, back in the position module, how we positioned this slogan right here, then you might remember that this slogan if we select it, has a position property with a value of absolute, so exactly what we need (Refer : unit10).

* and then if we have a look at the direct parent in this case, so our section element with the product overview ID, we can see that this element has position relative applied. So basically a position property different from static and by that, exactly what we were looking for.(Refer : unit11)

* So the parent has this position relative and the child, our slogan has position absolute.

```css
/* our slogan CSS*/
#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
    position: absolute;
    bottom: 5%;
    left: 3%;
}
```
* Now we already applied two percentage values right here,(bottom and left)

* but before we play around with these values, I would like to add width with a value of 100% because actually what we should see now is that the width of our slogan right here, which currently only includes the content should increase after I reload the page,(Refer: unit12)

```css
/* our slogan CSS*/
#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
    position: absolute;
    bottom: 5%;
    left: 3%;
    width:100%;
}
```

* We can also see it here in dev tools, it has the 100% width applied with a value of 912 pixels. Now it's not totally displayed, it's partially empty right here,(Before the slogan text- carefully check in unit12 image). we'll see why this happens in a few seconds

* but if I now have a look at the parent, so at the section ID, then we can see that this parent also has a width of 912 pixels.

* and the interesting thing is, if you remember back what we saw on the slide, that this width includes both, the content and the padding, we can also see this down here in the dev tools. We have 892 for the content and then we have a padding of left and right of 10 pixels each, with that 912 (Refer : unit13) and because of that, apparently our rule to remember seems to be correct.

* You could also say, well I don't trust you, can you prove to me that the slogan right here doesn't again refer to the viewport

* because the nav bar which refers to the viewport we know that now has a width of 912 pixels.

* Well the good thing is I can easily prove this to you by simply changing the width of the containing block or the element where I say that it would be the containing block to 50%  (here we are refering the containing block ie parent element of child elment absolute with percentage value)

* because if the containing block now has a width of 50% and the child in there, so our element, a width of 100%,

* well then let's see. The slogan has now width of 456 pixels and our containing block has a width of 456 pixels too.That's again just the width of the content and the border and because of that, I think we saw that second rule to remember is applied right here.

* Now regarding this little gap we have to the left, you can see it right here,(Refer unit14).

```css
/* our slogan CSS*/
#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
    position: absolute;
    bottom: 5%;
    left: 0; /* Here we rmoved the gap of 3% because of that.. now we changed to zero*/
    width: 100%;
}
```
* I would like to set this to 3% again and revert our all our changes I just wanted to show you how this works.With that, we understood the second rule to remember

### Rules to Remember: 3. Relative / Static Positioning & "%"

* Now what is the third rule to remember when it comes to the positioning units?

* this time we have, We have positioned static or position relative applied right here.

* If that is the case, then the containing block again is an ancestor, like we had it before but this time, it's only the content of the ancestor, so not content and padding like we had it before.but with position static or relative, it's only the content.

* Now how do we now identify the containing block, so which is the ancestor we refer to? Well the answer is there is simply the closest ancestor which is a block level element(Refer : unit15) and jump back to our project and see if we can also find an example for our third rule to remember in our project.

* So what we need is basically an element which has a percentage unit applied already maybe and which is either not positioned at all, so position static or relatively positioned.

* Now if we go to our customers page right here, then I think that our image container might be a good example for that. So if we go into our main element right here, then we can see that we have our div, this name div right here, this wrapping div, then we have the testimonial class and inside this testimonial class, we have this image container right here. If we scroll down, we can see we apply the width of 65%, we don't have any position property applied.

* So let's now open the customer.css file and here we need the testimonial image container class right here (Refer unit16)

```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```
* because what we will do now is, we will now increase the width of this container from 65% to 100%,

```css
.testimonial__image-container {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```

* If I do that and reload the page, you can see that the image increased dramatically.(Refer unit16 to unit17) Now why is this happening?

```html
 <div class="testimonial" id="customer-1">
    <div class="testimonial__image-container">
        <img src="../images/customer-1.jpg" alt="Mike Statham - Customer" class="testimonial__image">
    </div>
```
* so this one, this testimonial class now takes the closest ancestor which is a block level element, which is the case for this div right here with the testimonial class as the containing block.

* And if we inspect that right here and go down there, we can see that this div has a width of 912 pixels and with that, our testimonial image container now also has this width applied because that's the width of 100%.

* If I would reduce that width now, right here, to 50% for example, like that and go back and reload the page, the image would decrease again because let's see, the containing block still has a width of 912 pixels, you can see it right here but the div inside of it, so our element with the percentage unit now only has half of it (456 px). That's also really important, it refers to 50% of the actual content,

```css
.testimonial {
    font-size: 20px;
    margin: 48px 0;
    padding: 0 10px; /* zero top and bottom and 10px left and right */
  }
```
* reload the page, we can see that we have some movement here and maybe also slight movement of the image,I told you it wouldn't change, let's see why it changed.

* Well this is the container, the container now has a width of 892 pixels only and 10 padding or 20 padding. (Refer : unit18)

* You remember why, right? Because we added box sizing border box to our project, therefore if I add a padding to our element right here, well then the padding will be added and this will decrease the width of our content.

* The interesting thing though is that if everything work correctly, our image container, should have a width of 50% of 892 which should be 446.

* The interesting thing now is if I go back and change the position of our image container right here to relative because you remember this third rule applies to both, position static and relative, right here

```css
.testimonial__image-container {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    position: relative;
  }
```

* if you remember the relative positioning, we know that this should actually not have an impact on to our image right now or onto the positioning of the image. Let's see if this works,if I reload the page, it looks still fine and as we can see, the container of course still has 892 of width and the image still has 446 of width.

* So this is working for both static and relative positioning.

* but what happens now if I turn our container into an inline element? This will probably break the entire website.

```css
.testimonial {
    font-size: 20px;
    margin: 48px 0;
    padding: 0 10px; 
    display: inline /* Here we changed container as inline element  */
  }
```

* see how this works because as I said, this third rule only applies if our element with the percentage unit is static or relative and then it looks for the closest ancestor which is a block level element, so by turning this div into an inline element, this should not be true anymore.

* So let's reload the page, as we can see the page is a bit messed up but it's still working generally.(refer unit19)

* So if I now look for our testimonial class right here, you can see it only has a width of 744 pixels now, why is this the case?Because it's set to auto which makes sense as we have now an inline element but what happened to our image container right here?

* This still has a width of 456 pixels, let me see, we still have the width of 50% applied.

* we still have the width of 50% applied.  Now let's have a look at the index.html file and see what the next ancestor could be, which is a block level element. We can see this first ancestor, the testimonial class is not working anymore because it's an inline element but this div now here, this wrapping div, this should be the ancestor we need and if we inspect that div right here, then we can see that this div has a width of 912 pixels

```html
<div> <!-- now the container for  testimonial__image-container class is this block level element div-->
    <div class="testimonial" id="customer-1">  <!-- this is now inline -->
        <div class="testimonial__image-container">
            <img src="../images/customer-1.jpg" alt="Mike Statham - Customer" class="testimonial__image">
        </div>
        ....
        ...
</div>
```

* and with that, we found the answer to this question. Now that this div is not a block level element anymore, the closest ancestor is this wrapping div and with that, we changed the containing block from the testimonial class to this wrapping div.

### Fixing the Height 100% Issue

* Well basically, we have the same situation that we had for the third rule. So we have our element with the position static or position relative declaration and that's important, we have the height property, that's important, the height property applied with a percentage unit. This means that the percentage value depends on the containing block which is the closest ancestor which is a block level element, so that's a situation we have.

* In contrast to the starting situation we had right there, the ancestor now also has to be an element with position static or position relative applied, that's important. So with this starting scenario, we can now go back to our website and add some code to see why this scenario can lead to an, well at least unexpected behavior.

* So back on our customers page, I would like to add a new element, this element will be a so-called backdrop. The backdrop has the purpose to cover the entire website, so it should be on top of all the other elements we have because we will soon, in the next module to be more precise, add a pop-up window you could say which should be on top once you click a button. Below that pop-up, we want to have this backdrop, this slightly transparent backdrop and behind that backdrop, all the rest of the website should be located.

*  the important thing for now is that we need to create a new element which has a width of 100% and a height of 100%. 

```html
<!-- Customer Page -->
<div class="backdrop"></div> <!-- backdrop should be above our html  -->
    <header class="main-header">
```

```css
.backdrop {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
```

* with that if we save that and go back to the page and reload it, we cannot see a thing right here and that's probably unexpected.

* Now let's inspect that and see what happened. We can see that we have our backdrop right here below our body element, so this is working (Refer unit20)

* and as we applied position relative, the containing block should be the closest ancestor which is a block level element and undoubtably, our body element is a block level element, so this should be the ancestor.(Refer unit20)

* Now this body element has a width of almost 940 pixels and a height of 993 pixels,(Refer unit21)

* let's see what happened to our backdrop right here. Well as we can see, the width was overtaken from the containing block, this worked fine with the 100% but the height was not overtaken and that's the interesting thing, right? (Refer unit22). Apparently we were able to get the width but not the height. Now what caused this issue?

* If we inspect that, we can see that the height is not defined right here and while for the width this is not a big problem because it can use the value it finds right here, for the height this doesn't work

* because the height is only defined by the content of our body right here but this information does not suffice to make this height 100% declaration work in our case.

* Now we have multiple ways to solve this issue and we'll also dive into another approach throughout this module but if we want to solve this with percentages only, the following way is one easy workaround to make sure that we can use this height 100% way.

* for that go back to our shared.css file right here and now add the HTML selector, this one. Here we add height 100%, like that and now we also add this height declaration right here to our body element because what will work 

```css
html{
  height : 100%;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    height : 100%;
}
```

* if we go back and reload the page, we can see that the backdrop is working apparently, it moved down the other elements below it because it's relatively positioned (Refer : unit23)

* so it stays in the document flow and the backdrop also doesn't cover the elements down here (if we scroll we could see images - refer unit24),we'll dive into the reasons for that in a few seconds

* but the interesting thing is that now we added the 100% height to the HTML element right here, to the body right there and with this declaration right here, we are now also able to make this height value here 822 px for backdrop.(refer unit25), which is basically the same one that we have in the body, to make this work. So this is this quick workaround, i just wanted to show you.

* Regarding the issue we have right now that basically this element is above the others, well this can be solved easily of course. What we can do is we can simply go back to our backdrop and now change the position value from relative to absolute for example

```css
.backdrop {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
```

*  If we do that, we don't need that trick 

* so we can get rid of these height declarations right here and if we now reload the page, you can see that the backdrop is working, this is fine,(refer unit26)

* still there are two problems though.

* The first problem is that if we scroll down, well it still doesn't stick to the viewport (ie the issue here is its scrolling, it should not scroll it should stick with the viewport - refer unit27)

* and the second problem is this gap up here.(refer unit27)

* So regarding this gap up here, this is simply due to margin collapsing

* because if we go into our main element, into the div and now open or click onto the testimonial class, we can see that we added a margin to it, right here a margin top and this margin and if we unselect this and the other margin, then we can see that the backdrop covers the entire page. This is a typical case of margin collapsing, a concept we already explained to you.

* However, we have to activate that for the moment because we won't remove that margins

* and before we talk about this issue down here, I want to think about the reason why this is working now actually

* The reason for that is that if we use position absolute for our element, then the conditional block would be the closest ancestor which has a position property different from static applied.

* That's not the case for us because the body in our HTML have the position property applied (default static)

* and if that's the case, so if you don't have such a position property for the ancestors (other than static- here for body we have static), then the position absolute declaration leads to the same behavior as position fixed,

* this means the percentage value refers to the, viewport as the containing block.That's a reason why this is working right here

* Nevertheless if we scroll down, we can see that it of course doesn't stick to the viewport, it just takes the height and width, the percentage value is based on a viewport but it behaves like a normal absolutely positioned element.

* Therefore if we now change position absolute to position fixed right here 

```css
.backdrop {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
```

* and reload the page, we can see that our backdrop is basically working,we still have this margin collapsing issue though, this issue can be fixed quickly though.

```css
.backdrop {
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
```
* If we now just add top zero and left zero right here as two new properties and now reload our page, we can see that our backdrop is working perfectly.(Refer unit29)

* The only problem is that we don't have the viewport on all of our pages because it should also be on the starting page and on the packages page and the other issue is that we cannot click around anymore because our backdrop is now, well basically on top of all the other elements.

```css
.backdrop {
    display: none;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
```
* We can use this backdrop html where ever we need..

* with that, we saw how we can fix this strange behavior with height 100% and we also saw one way, how to quickly add such a backdrop.

### Using "min-width/height" & "max-width/height"

* Before we dive into other units we didn't use so far, let me show you an interesting combination of pixels and percentages.

* For that, let's quickly recap how this image or the size of this image is defined 

* because the image is inside this image container, here we have the image, the image has a width of 100%.It's 100% of its containing block which is this testimonial image container class right here and this has a width of 65% of its containing block which is the testimonial class,

* Now wouldn't it be great if we could limit the size of the container because if the image has a width of 100% of our container, well if the container wouldn't get bigger and bigger and bigger, then the image will also stay smaller. We can do this as I said with the combination of pixels and percentages.

```css
.testimonial__image-container {
    width: 65%;
    max-width: 580px;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```

* Now what's the idea behind that? With the width (65%)right here, we have this percentage value, this means the image increases and increases depending on the width of our device.

* But if we now add a fixed value as a maximum width, we could restrict that width to this maximum we defined and with that, our image wouldn't get bigger than we want it to be.

* as soon as we reach our limit that we defined, this 580 pixels, our image cannot get any bigger and that's of course a big improvement because imagine visiting our site on a really big device, a TV screen for example. I think it wouldn't be a good look if you would just see the entire screen filled with these two images,

* therefore this max width property is a really easy way to make sure that you restrict the maximum size of your images.

* same applies to min-width also

```css
.testimonial__image-container {
    width: 65%;
    max-width: 580px;
    min-width: 350px;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```

* The important thing to keep in mind for you is that with the combination of a width property with a percentage value and a max width defined with a fixed value, pixels in our case, you can make sure that your website also is displayed in a nice way, on really big screens or with the min width value, you you can make sure that certain elements are not displayed smaller than intended by you.

* when we work with the responsive design. I just wanted to make sure that you have these concepts in mind.

* we can now continue and finally leave the world of percentages and pixels and have a closer look at fonts because our font size is not perfect yet, for fonts we have more better options

### Working with "rem" & "em"

* So let's understand em and rem for now, em and rem are units which are calculated based on the font size.

* Now what does this mean?

* we already learned that if we go to our settings right here, that the user can change the font size, for example to very large, like that

*  If we go back to our page, we saw that the nav bar font size increases but the text right here stays the same.

* This is simply due to the fact that our testimonial class, this one right here, has a font size applied, a font size property by us of 20 pixels. because of that our class doesn't change because we have this font size applied.

* That's the first issue we have actually,  if our user, our website visitor wants to increase the font size, well we should allow him to do this, therefore definitely something we have to improve.

* However, let's dive a bit deeper into testimonial class now

* because inside this class we have the image container but that's not really a font size topic right now but this testimonial-info class right here, this one, this one also has a font size probably, as we can see it inherits the font size from the testimonial class (font-size : 20px),

* inside the testimonial-info element we have h1 , h2 and p tag, eventhough the 20px inherited from testimonial, it is over-ridden by browser for h1 the font size is 2rem .. in dev tools computed screen if we notice its showing value for 2em as 40px; Already 20px inherited and over-ridden wih 2em = 2*20 = 40px;(refer unit30)

* so there seems to be some kind of calculation related to these em units.So let's keep that in mind

* let's have a look at another element, the h2 elements right here because there in general, it would be the same behavior.

* We also have this 1.5em but we also define a font size of 18 pixels,therefore this is the value that is applied

* if we again go to computed right here, you can see that now we have 30 pixels and interestingly, it's again 20 pixels times 1.5, well this results in 30 for h2 element (refer unit 31)

* So again, we see that em is calculated based on the actual size of our element which is inherited from the parent and then multiplied by this factor right here,(browser default size for h2 in em)

* Let's have a look at the paragraph, at the last element inside our testimonial info class, This paragraph doesn't have any font sizing applied, it simply inherits the font size of 20 pixels of our testimonial class.

* So we have a nice mixture of a fixed font size for our container here, for our testimonial class, then we have testimonial info is which also inherits 20 pixels and then we have these em values for h1 and h2 

* we have p where we define a font size, for h2 we also define the font size, sorry for that. So how can we now make this font size a bit more dynamic?

* Because let me first reload the page. We still have the problem that if we changed the font size in browser we don't have any impact on our p tag text and this should definitely changed

* Now for that, we have different ways to approach this issue.

* The easiest one would be to simply say ok, why don't we just change the font size right here (testimonial class), this 20 pixels, to this em we just saw,because em apparently multiplies a value and by that, seems to be more dynamic.

```css
.testimonial {
    font-size: 1.2em;
    margin: 48px 0;
  }
```

* now change the font size of 20 pixels to let's say 1.2em because we saw that 1em is apparently equal to 16 pixels, so 1.2 seems to be a nice approximation.

* and as the 16 pixels is actually specified by our browser settings, right here and if we go to very large with that, we can see that the font size also increases because now we have 28.8 pixels which is 24 pixels times 1.2.

*  The problem still is that we don't have the entire control of all our elements, the h1 element for example still has the font size applied by the browser.

* Lets change that 

```css
.testimonial__name {
    margin: 3px;
    color: #ff5454;
    font-size: 2em;
  }
```
* If we do that and reload the page, nothing changes but now we are the ones who define that 2em should be applied, so it's not depending on the browser anymore but we are the ones who specify this code

* For the h2 class, we have this font size of 18 pixels and that's not what we want right because we want to make things dynamic, so lets also change that too

```css
.testimonial__subtitle {
    margin: 0;
    font-size: 1.1em;
    color: #ccc;
  }
```

* If we reload that, we see it's slightly bigger, let's see why. Now what's that issue? !!!

* This is strange right because I actually said that it's 1.1em, so the normal size times 1.1 but now it's too big.

* Well that's basically the problem of em, as we can see right here em inherits the previous sizes and by that multiplies the em with the previous em.(refer unit32)

* Now what do I mean by that?

* We have the 16 pixels defined in the browser, in our testimonial class, we specified 1.2em, this means we already have a font size of 19.2 pixels.

* Now this value then also gets inherited by our testimonial-subtitle class and then again multiplied by 1.1 which leads to our 21.12 pixels,

* the 1.5 right here are not taken into account because as we can see, h2 and h1 are neighbors, so the inheritance takes place between h1 and this div with the class, testimonial info and because of that, you can quickly get into trouble by having lots and lots of ems and all that inheritance and multiplications
and to make it short, this can quickly become a mess.

* This doesn't mean that you shouldn't use em at all, it can be helpful if you have a specific use case but you want to define the font size of specific parts of your website with these em units, so I don't want to tell you never use em, I just want to tell you be careful right here because there is another approach which helps us to avoid exactly these issues

* and this is the rem units because if we now simply go back to our code and change 1.1em to 1.1rem !!! 

* and reload the page, then you can see that the font size right here of our h2 class looks a lot better and the reason for that is simply that now we have a font size of 17.6 pixels. (refer unit33)

* Why is this happening? Well because the only calculation that is done right now is the code is told to do the following,

* just take the font size that is set by the browser settings, so 16 pixels in our case and multiply it with 1.1 because rem, the r in rem stands for root.

* So we always go back to the root element of our website which is the HTML element and with that, the browser default which defines the size for that root element,

* and as the font size always depends on this browser settings, the user has the full control of the size he wants to have on his website and we can simply specify all our sizes, our font sizes for example based on this rem value.

```css
.testimonial {
    font-size: 1.2rem;
    margin: 48px 0;
}
.testimonial__name {
    margin: 3px;
    color: #ff5454;
    font-size: 2rem;
}
.testimonial__subtitle {
    margin: 0;
    font-size: 1.1rem;
    color: #ccc;
}
```

* If we now reload, we can see the page looks basically the same way it did before and if we now change our font size in browser.

*  you can see that all elements inside our testimonial class now change the font size depending on the settings of the user(browser setting).And that's actually the cool thing about rem,

* you can easily specify the font size or also other sizes of course, it's not restricted to fonts only, the important thing to keep in mind though is that rem and em always refer to the font size, that's the basic size value that they take into account but you can also use rem for margins for example,

* But with that rem approach, you really got a powerful tool to make your fonts more flexible and make it easier for the user to display the website the way he prefers it to be displayed.

* There used to be one downside of rem though, as rem is a rather new approach, the browser support wasn't the best 

### Adding "rem" to Additional Properties

* So how can we use this knowledge that we have about em and specifically rem? 

* Because in the last video, we changed the font size of some elements to rem but I told you that you can apply rem not only to font sizes of course but also to other properties

* always keep in mind that the rem, no matter if you apply it as font size or a margin for example, always refers to the font size though, so the calculation basis for rem is the initial font size of the HTML element.

* We can apply rem to margin also , but it's important to keep in mind that by making this margin more dynamic, the margin will of course also increase or decrease depending on the font size setting in the browser.

```css
.testimonial {
    font-size: 1.2rem;
    margin: 3rem 0; /* 16*3 = 48px , ie 1 rem = 16px by default*/
}
```
* If I reload the page, nothing changed, but if you increase the default font size to very larger, you could see very larger space as margin as we expected. because now margin decided dynamically

### Understanding the Viewport Units "vw" &"vh"

* So what can we now do with the viewport height and viewport width? 

* we will go to the shared.css file right here and work on our backdrop again because the viewport height and width units will simply be placed right here, so the vw viewport width to the width property

```css
.backdrop {
    /* display: none; */
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
}
```
* and reload the page, we can see that we have our backdrop back on our website, it behaves as it did before, you can see it, like this and like that, so this generally works fine.

* This is also important to understand before we continue. For the situation we have right here when we added position fixed to our selector right here, then the difference between width 100% or height 100% or adding the viewport units like that is not really there.As we already discussed, this is just a different approach to achieve the same result.

*  we'll have a look at another example where we can relate the width and the height of our element to the viewport, although the position property is not set to fixed.

* So just wanted to make this clear because at the moment, there is no real difference to the previous solution.

* However let's have a closer look at that viewport units right here because what happens if I change just now to 80, like that? Well as you might have guessed, now we only have the backdrop covering 80% of the width of our viewport (Refer : unit34) 

* So I think the general logic of this viewport unit is clear, it simply allows us to, as I said, always refer our sizes to the actual viewport no matter which position property we have right here

* but there are two more units for this viewport that we can use.

```css
.backdrop {
    /* display: none; */
    position: fixed;
    z-index: 100;
    width: 80vmin;
    height: 50vh;
    background: rgba(0,0,0,0.5);
}
```
* Let's see if this changes a thing, yes we can see now our width became a bit smaller,what's the reason for that?

* Well, view min simply takes 80% of the smaller viewport (like tab, mobile)

* and in our case if we make this bigger, we can see it doesn't increase the width because in our case, the smaller viewport is of course the height, so the height(50vh) is smaller than our width(80vmin) right here.

* Now what does this mean? I can increase the width as far as I want because it will always take 80% of the smaller viewport but it's not always 80% of the height because if I reduce that, at a certain point and that's exactly the point where the height and the width are equal and now the width right here, the width of the viewport becomes smaller than the height and because of that, now it jumps to taking 80% of the viewport width.

* Let me repeat if height is smaller than the width the backdrop doesn't increase anymore because it now takes 80% of the smaller distance.

* which in that case is the height. Now in addition to view min, we also have view max which as you can imagine simply works the other way around, so if I reload, we can see that the width increase because now we take 80% of the larger distance between the width and height of the viewport.

* So right here, it keeps increasing because our width is a lot bigger than the height but as soon as the height becomes bigger then the width, as you can see, it doesn't move anymore because the height is now a constant value, we don't change it so it always takes 80% of the height without any adjustment of the backdrop and that's it actually

*  but with viewport height, viewport width and especially with view min and view max, you can easily create such overlaying elements basically and stick them to the viewport.

* let's now have a quick look at our picture right here because if we go to our main.css file now, we can see that we defined the height of this image with 528 pixels, so this height right here. Now as we are not the biggest fans of such values and the image actually always can refer to the viewport, I don't think that's a big problem, why don't we just change the pixel value to a viewport unit?


* Well I would say we use vh, so the viewport height but which number should we add?

* Well as we saw, the image has 528 pixels height and our HTML elements, so every everything we see right here, here has 1600 pixels height, well I would say that maybe 33% of the viewport height might be a good value for that.

```css
#product-overview {
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box,
    #ff1b68;
  /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
  /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
  /* background-image: linear-gradient(180deg, red 70%, blue 60%, rgba(0,0,0,0.5)); */
  /* background-image: radial-gradient(ellipse farthest-corner at 20% 50%, red, blue 70%, green); */
  width: 100vw;
  height: 33vh;
  padding: 10px;
  margin-top: 43px;
  /* border: 5px dashed red; */
  position: relative;
}
```

* We can see that our image is now smaller and to be honest, I prefer this look, the problem though is that it's a little bit well far down now, so I would like to see a bit more of the top of the image,(Refer unit35)

* so let's quickly jump back and work on the background image, let's change bottom to maybe 70%,

```css
background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("images/freedom.jpg") left 10% bottom 70%/cover no-repeat border-box,
    #ff1b68;
```
* yes I think this looks cool (refer unit36)

* Previously What we also saw is that although the position property of this background image was position relative and as you learned, position relative, so the units of these elements do not refer to the viewport, just by adding vw and vh, we were able to simply change this behavior and because of that, easily adjust our image according to the viewport.

* With that, we could actually conclude vh and vw but unfortunately there is one little downside regarding this unit ie browser support issue but for the Internet Explorer 11 right here, there is only a partial support.

### Windows, Viewport Units & Scrollbars

#### Hiding Scrollbars on Windows machines

* After adding vw , you probably saw that the scrollbars appeared in case you are working on Windows. This happens as using vw  on Windows does not include the scrollbars - vw: 100  is  equal to 100% of the viewport width + the scrollbars. On the Mac this is not an issue, but when using Windows it is as the scrollbars are displayed by default.

* In case you don't want to display these scrollbars, you can use one of these solutions:

- Use width: 100%  instead of vw: 100

- Add overflow-x: hidden;  to the body selector in the shared.css file to hide the horizontal scrollbar (or overflow-y: hidden  to hide the vertical scrollbar)

* Alternatively you could also use the ::-webkit-scrollbar pseudo element. Simply add the following code to the shared.css file:

```css
body: :-webkit-scrollbar {
    width: 0
}
```

* To make sure this works correctly on different browsers, you have to add additional code to it. This blog post (https://web.archive.org/web/20180505112131/https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/) nicely summarizes all the code needed right here.

* Make sure to follow these approaches in case you don't want to display the scrollbars on Windows machines.

### Choosing the Right Unit - (Refer unit37 !!!)

* So which unit should I choose?

* Well we basically have different properties, we saw that and we have a recommended unit

* in CSS, there are better and worse ways to achieve a goal, therefore this recommendation is also part of my personal experience of course.Therefore feel free to change that of course depending on the needs of your project

* but I think to give you a general guidance, this slide might be really helpful in the future. (Refer unit37 !!!)

###  Using "auto" to Center Elements

* So how can we easily center our elements?

* Now you could play around and define a margin left right of X percent and with that, center your element

* but with margin auto, this is automatically done by the browser basically

```css
.plan__list {
  width: 80%;
  margin: auto;
  text-align: center;
}
```
* and as we can see with that, we easily can center our elements perfectly and make our lives a bit easier.

* !!! margin: auto; only works for block level element with an explicitly assigned width.