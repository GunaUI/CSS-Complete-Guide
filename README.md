# CSS-Complete-Guide

## Section 10 : Making our Website Responsive

### Understanding Hardware Pixels vs. Software Pixels

* So what's the difference, what are these different pixel types?

* Well so far, we played around right here in the dev tools and decreased our width right here and we saw that the page partially reacts, not perfect yet but we have kind of a reaction, so basically our browser understands that we have less width available.

* The problem at the moment though is that our browser does not really understand the difference between a desktop device and a mobile device.

* However, the important thing that you might have noticed is that although we had this partially responsive design on a smaller screen in the desktop version, so if I click right here and decrease the screen width, this reaction right here, well this is not happening in our mobile design because although we only have a mobile device which should actually be smaller than our desktop device if we decrease the width, the browser basically squeezes the entire website onto our mobile phone and with that, there is no responsive design at all available at the moment.

* Now what's the reason for that? Well first, have a look at this thing right here, at these pixels. We can see that in this simulator, in this mobile phone simulator in the dev tools, a width of 375 pixels right here is assumed and the height of 667 pixels.

* Let's focus onto these 375 pixels in our website mobile view. if you inspect we can see that we have a width of 980 pixels, which is quite big actually

* especially if we take into account that the Chrome developer tools actually assume a width of 375 pixels for this iPhone 8.

* Now as you can see, there is something not working correctly at the moment and to understand this,

* Refer thuis link : https://www.w3.org/TR/css-values-3/#absolute-lengths

* in this page, you can see how absolute lengths are translated into pixels or vice versa in CSS and right here, you can see that 1 inch right here is equal to 96 pixels.

* Now in case you're not familiar with inch, one inch are 2.54 centimeters, so 1 inch is 96 pixels

* and we had 980 pixels for the width of our background image in our website,So if we translate that into inches, we have more than 10 inches right here for our device width

* this shows you exactly where the problem is coming from we have at the moment. The browser is of course able to identify the height of our pixels, so the pixel this iPhone has by default but it will just translate these pixels based on this logic right here.

* So here we'll say OK, I have a specific amount of pixels, so I assume that with each 96 pixels I have, the device has a width of 1 inch

* and while this works perfect for monitors or desktop devices, for a mobile phone, this leads to a website being displayed like this which is of course way too small.

* And what causes this problem of course in the end is that modern mobile phones have a really high pixel density and this high pixel density, so a lot of pixels in a really little amount of space lead to the problem that these, as I would call them, traditional ways of translating pixels into inches and by that, specify the amount of information that is displayed on the device is not working anymore.

* So if pixels are translated into inches and we have the problem that we have too many pixels and not enough space available or a too-small device, then we can either increase the size of the device which is difficult because our mobile phones have the size they have or decrease the amount of pixels because if we have less pixels available, then less information would be displayed at the same time on our display and with that, we would have a bigger font size and a bigger size of the entire content of the website actually.

* And if you now go to this page right here, mydevice.io and click on to compare devices, we can find the solution for that problem

* because here we have our iPhone 8 for example and we can see the physical width and the physical height, so these are the hardware pixels I'm referring to
and right here, you can now see the CSS width and the CSS height. And we saw these numbers already because if we go back to our website, we can see that this is exactly the width and height that the Chrome developer tools show us as the device height and width for this iPhone 8

* This basically is due to the fact that we have a so-called pixel ratio.

* In the case of the iPhone 8, we have a pixel ratio of two. This basically means that we take the physical height divided by two, as you can see it, and with that, we have the height that is now assumed by CSS for our mobile phone and with this pixel ratio, CSS would only assume a height of 676 pixels for our iPhone8

* and if we think back about our calculation right here, that 96 pixels are 1 inch, then we would only have let's say round about 6 inches of height that the browser understands for our iPhone and with that, we have a height that is a lot closer to the real one when comparing it to the initial one which led to this strange way of displaying the website , and with that, we would be able to display our website in a better scaled way.

* The question now is, how can we achieve that goal? How can we tell the browser that it should apply this pixel ratio to make sure that it translates the actual hardware pixels, so 751 X 334 into 375 X 667.

* Well the answer is we simply have to add this viewport meta tag.For that 

```html
    <!-- below X-UA-Compatible meta tag -->
 <meta name="viewport" content="width=device-width, initail-scale=1.0">
```
* If we now go back to our website and reload it, you can see that the style totally changed because now our browser is able to identify the actual device
width we have right here on our smartphone. This means he does not consider the actual hardware pixels but considers the CSS, the software pixels,

* so this 375 times 667 and for a width of 375 pixels, this is the way our website is displayed.(Refer : responsive1)

* And if we now go back to our desktop version and also decrease the size to this 375 pixels, right here, well then you can see if we switch back to mobile version, that this is pretty identical now

* and with that, we applied a first very important core concept to be able to apply a responsive design to our website.

* let me show you a quick comparison between the viewport meta tag and the media queries in the next lecture.

### Comparing the Viewport Metatag (HTML) and Media Queries (CSS)

* So which tools do we have to add a responsive design?

* Well, we just saw that we have this viewport meta tag, this is created or added in HTML and we have media queriesare of course created in CSS

* Now let me show you the differences between these two concepts and especially why we need both to create our responsive website. 

* The viewport meta tag is required to be able to adjust our site to the device viewport, we just saw that.

*  If we only take into account the actual pixels, we will not be able to display our websites correctly or in a convenient and appropriate way on mobile devices.

* Therefore in addition to the actual pixels, we need to take into account the device width and with that, automatically apply a specific pixel ratio which will then allow us to translate the hardware pixels into these software, the CSS pixels, we just did that.

* In viewport(HTML) - The important thing is though that we cannot apply any design changes, so in case you want to say if I am in a mobile version, I would like to change the entire structure of my website, I would like to add some things or maybe make some things disappear, this is not possible.

* The only thing it does, it translates the pixels according to the pixel ratio and therefore adjust the way our website is displayed

* In contrast to that, we have the media queries. The media queries allow us to change the design depending on the actual size and that's the important difference, media queries really allow us to specify the way our website is displayed depending on the size and size doesn't mean a single size, we are able to define specific rules based on the width for example where specific properties of our website should change.    

* and I'm referring to properties. So I'm not only talking about the width of our elements, you could change basically anything you want with such media queries,and as you will see, media queries are really cool and allow you to really adjust the look of your website depending on different device sizes.

* The important thing with that is of course that these changes are defined by us. With the viewport, the impact we have is limited because the viewport will just translate the pixels as I said and that's it but with the media queries,we can really dive into the design and specify a unique design for the different devices we have. (Refer : responsive2)

### Understanding the "viewport" Metatag

* So let's have a closer look at this viewport meta tag and see what we added there and what else we might be able to add there

```html
<meta name="viewport" content="width=device-width, initail-scale=1.0">
```

* the first attribute we added was (name="viewport"),  this simply allows us to tell this meta tag that it should target the viewport, so actually the area on our device inside our browser that should display our website.

* The second attribute we added was this content attribute (content="width=device-width , initail-scale=1.0"), with that, we are now able to set the width of our page that we have, so the page on the viewport, the visible part of it.

* basically, this should be equal to the width of the screen of our device and that's the important thing 

* With that, we were able to tell our browser that our device is a smaller device, a mobile device and therefore, it should apply this pixel ratio conversion

* because otherwise, we would have the problem that we had initially, that our browser simply has a look at the amount of hardware pixels it has and therefore is not aware of the fact that we have a smaller device and with that, simply displays the entire website squeezed into our mobile device screen.

* Then we have this initial scale information (initail-scale=1.0), the initial scale simply defines the zoom level that we have. 1.0 simply means that we have the default value, this means no zoom is applied.

* If you would change that to 1.5 for example like that and go back to our website, reload it, you can see that the website as expected is now zoomed in (Refer : responsive3)

* What is also interesting is that we can also zoom in more if we want to, basically without any limitation as you can see, quite far and we can also zoom out a bit as you can see. 

* Now zooming in and zooming out are the next types of information that we can specify in this meta tag

* because for example, we could say that our user

```html
<meta name="viewport" content="width=device-width, initail-scale=1.0, user-scalable=yes">
```
* user scalable like that, this can be either yes which is the default value or the default behavior, so as you can see, that's what we have, we have our initial scale with this slide zoom in now and the user can zoom out or zoom in.

* In case you say you don't want your visitors to be able to zoom, which I will not recommend because normally, we would like to give our users as much freedom as possible so that they can view our website in the most convenient way but let's say you want to restrict the zoom and not allow your users to zoom right here, then you can simply set user scalable to no

```html
<meta name="viewport" content="width=device-width, initail-scale=1.0, user-scalable=no">
```
* if we do that, reload and go back right here, then I'm not able to zoom in or out anymore.I can scroll around our website ofcourse, that's not the problem
but zooming is not possible anymore

* but as I said, this is probably not the behavior you would like to have, so you could either set this to yes then or as yes is the default value, you could simply delete that entirely.

```html
<meta name="viewport" content="width=device-width, initail-scale=1.5">
```
* Now there are two more interesting types of information that we can add to our content attribute

* the first one is the maximum scale, If you think about the initial scale which set the default zoom level when the user enters our website, the maximum scale simply restricts the maximum zoom level that is available. So let's set this to 2.0 for example.

```html
<meta name="viewport" content="width=device-width, initail-scale=1.5, maximum-scale=2.0">
```
* we can zoom out, that's not a problem but zooming in is now restricted.

* we can also add a minimum scale of course. The minimum scale simply restricts the amount of zooming out level that our user is allowed to apply.

```html
<meta name="viewport" content="width=device-width, initail-scale=1.5, maximum-scale=2.0, minimum-scale=1.2">
```

* see that now I'm not able to zoom out entirely like we had it before. these are actually the main functionalities of this viewport meta tag that we should know

* The important thing that you have to keep in mind is that without adding this meta tag, we are not really able to implement a mobile design to our website 

* but this also means that in case you didn't create a mobile first website, and by that, maybe you don't have a mobile design at all, not adding the meta tag might also be an option

* because imagine, this is your final website and you only have this desktop website which looks actually quite nice but you don't create this mobile site for whatever reason, then you don't want to show your user the website in this version, then the better but definitely not recommended approach would be to leave out this meta tag and by that

* But we of course want to create a responsive website and also a website which looks awesome on mobile devices, so we need this meta tag.

### Designing Websites "Mobile First"

* actually the approach, how we created this website is not the state of the art approach we use nowadays.

* because normally, you'll start creating your website mobile first. This means you start creating the page in a way that it looks nice on mobile devices.

* The reason for that is simply that many users are using mobile devices now to access websites and with that, you want to make sure that you have a nice looking website for mobile devices.

* As soon as you got the mobile version, you'll also have a look at the desktop version and also ensure that you implement a responsive design which also translates nicely into these desktop websites.

* Now this brings us to the question, why didn't we follow this mobile first approach then?

* Well because we just learned how to work with CSS and learning CSS is easier if we use a normal desktop website because we have more space available and we can try out things in a more convenient way

* but now that the basics are set, it's of course time to change this way we think and only work mobile first from now.

* This means that in the next lectures, we'll always have a look at the mobile version, make sure it looks nice and then check the desktop version, so that's the approach we will follow from now on throughout the entire course.

* so that's the approach we will follow from now on throughout the entire course. With that in mind, we can now continue and finally learn how to use media queries

### Adding our First Media Queries

* So let's now understand how we can add and use such media queries in our project. 

* so let's have a look at that step-by-step, add a media query and see how it works and then dive deeper step-by-step.

* And for that, we need a starting point and the starting point now is, as I said in the last lecture, the mobile first design.

* This means all our code right here, so all the code we have in our main.css file is now supposed to work in a way that it looks nice on our mobile view or what we define as the mobile view.

* In our case, the mobile view, so the starting point, is everything below 640 pixels and this is how we will approach it.

* this should look good on all these sizes below 640 pixels and then we will add a media query which will then change the design to make sure it looks also nice or even different on devices which are equal or bigger to a width of 640 pixels, 40rem.

* Now let's start with the slogan right here because I said that I would like to change the font size of the slogan because on smaller devices, I think that the slogan should be a bit bigger.

* However, I would like to change the font size of our slogan,

```css
#product-overview h1 {
  color: white;
  font-family: "Anton", sans-serif;
  position: absolute;
  bottom: 5%;
  left: 3%;
  font-size: 1.6rem;
}
```
* Let's see if this looks good, like that and let's reload the page now, did you see it? It's now slightly bigger,we know how this works,

* So we now change the font size but it stays the same right, no matter how big our device is, the width doesn't have an impact on this slogan right here and that's where the media queries come into play.This simply tells you if this condition is met, then please apply the following code

* This simply means as soon as the width of our device in software in CSS pixels, is equal or larger than 40rem, then this media query should kick in

* and what does kicking in mean? 

* Well, we simply have to write normal CSS code now, this means we need a selector and then we can specify the properties that should change as soon as this
 condition is met,

```css
@media (min-width: 40rem){
  #product-overview h1 {
    font-size: 3rem;
  }
}
```

* If I do this now and reload the page, you can see that our font size increased.(Refer : responsive4)

* Why did it increase? Well because the width of our website was equal or in that case, above to 640 pixels.

* If I now decrease the window, can you see it? As soon as we are below 640 pixels, the font size jumps back to our initial code (Refer : responsive5) and that's actually the core idea of such a media query.

* as soon as the width is equal or bigger than a specific limit, I'm no longer on a mobile device.and then you just add the selectors and the properties you want to change for your desktop devices.

* for example. We will also see that we can have multiple of these definitions right here, so we can not only have the mobile or desktop device, we could add a lot of different rules basically and a lot of different limits or borders we have right here which specify different properties for different device widths.

* let's focus on to this media query now and add a bit more code because of course, we are not limited to the font size right here, we can basically change any property in such media queries

* For our slogan right here, this is not required though, we can also add another selector

```css
@media (min-width: 40rem){

    #product-overview {
        height : 40vh;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}
```

* Let me reload and see the image height for device more than min-width 40rem increased. (Refer : responsive6)

* If we decrease the size, can you see it? Both the font size and the image decrease, because we are below our media query limit that we specified and therefore, the height again is 33vh.(Refer : responsive7)

* Let us add one more property to our product view, we could also add the background position property right here, like that and we have left 10% and bottom 70% right here, let us change that

```css
@media (min-width: 40rem){

    #product-overview {
        height: 40vh;
        background-position:  50% 25%;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}
```
* if we now increase the size and reload the page, we can see that the position of the image changed now and important, this is also only true if we are, as you can see it, above or equal to our 640 pixels or 40rem limit that we specified.

* And with that, you actually already understood the basic concept behind such media queries.

* A media query simply allows you to define a specific condition, an if condition as you can imagine it and once this condition is true, you can change one or multiple properties of the selector of your choice.

* And as you can imagine, this is a really powerful tool which allows you to easily create responsive websites.

### Things to Keep in Mind when Working with Media Queries

* The first thing to keep in mind is what I told you already, the way you read such a media query is basically like an if statement.You basically say that if a condition that is specified is true, then the following code will be applied,that's the easiest way to remember such a media query and based on my experience, also the most logical way. That's the first thing to keep in mind,

* the second important thing that we have to keep in mind, because I mentioned it before, we will now design our website from a mobile first perspective. This means all our code outside the media queries is our mobile code, so the code that specifies the look of our website on mobile devices

* and with that, our media query logic so to say, the media query should kick in once we are above this border, so once our min width is equal or larger than the value we specify is true.

* But of course, you could also create your website the other way round and although I do not recommend that, as I said we live in mobile times, so users will more and more access your website from mobile devices,so why not start creating a website with this mobile first approach but you could of course also create your website desktop first.

* The third thing that you should keep in mind is that you are of course not limited to a single media query, you could also add multiple media queries below each other,

```css
@media (min-width: 40rem){

    #product-overview {
        height: 40vh;
        background-position:  50% 25%;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}

@media (min-width: 60rem){

    #product-overview {
        height: 50vh;
        background-position:  50% 25%;
    }

    #product-overview h1 {
        font-size: 5rem;
    }
}
```

* So as you can see, we have both media queries written below each other.

* that's also really important to keep in mind. You can have more than one media query at the same time,

* that's not a problem because although this media query right here, our last one, is coming after this one in the code, it will not overwrite the query right here, so the property right here, our font size 5rem will not overwrite the 3rem we have in our other query because although it comes later in the code, it will over-ride only if both the media query condtions are same.

* but as soon as you change different limits for your media queries, this is not a problem at all.

* However there is one problem though because as I said, the code will just run from top to bottom and apply the media queries according to their order basically but this only works if you specify the order correctly. This means you have the width right here with 40rem and then you have the next border with 60rem.

* If you would turn that around and start with 60rem right here and then go down to the 40rem, what will basically happen then is your code goes from top to bottom and finds that this media query right here is true,and this would lead to different behaviour.

* Therefore the important thing is that you order your media queries according to the correct width. This means you start with the smaller width right here, the 40rem and then with 60rem for the second media query and with that, we can now ensure that our browser always uses the media query that applies

### Finding the Right Breaking Points

* So basically, if your website looks good for widths between 300 pixels and 768 pixels, you would ensure that you have a nice looking website for most mobile phones and then you could set your first breaking point at 768 pixels and then maybe make another breaking point at 1000 pixels for example, for really big screens then. That's how you could approach that and you could easily set your breaking points in a logical way.

* One additional thing I would like you to keep in mind though is that the way you add your media queries right here is not the correct one to be honest.

* It's totally fine to add the media queries below the actual rule you have for the corresponding selectors but in the end and we will also do this in this course, once we finish our media queries, you would simply take them and paste them right here at the bottom of your code

* because with that, other developers can easily find all your media queries and change them if necessary and this helps us to keep our code more structured.

* However for the purpose of this module now, we will add the media queries below their actual rule right here as we did it so far because it makes it easier for us to understand which elements we are referring to and what properties we want to change.

### Creating the Mobile First Design for our Plans

* So with the core logic being set, it's now time to get our hands dirty and dive into the responsive design on our website. 

* However, there is an additional problem and the problem is this background image because right here, we can see that our woman right here kind of gets her head stuck in the nav bar and I don't think that's a good look.

* So let's quickly improve that by simply changing our left 10% and bottom 10% to center,

```css
#product-overview {
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("images/freedom.jpg") center/cover no-repeat border-box,
    #ff1b68;
  width: 100vw;
  height: 33vh;
  margin-top: 2.75rem;
  position: relative;
}
```
* So with that, we can now continue with the responsive design of our plans because what I would like to achieve is that as soon as we are below our 640 pixels, so right here, this 40rem, the plans should be displayed below each other,

* the first thing I want to change is, I want to change this display style right here because I don't want to have inline block elements which then kind of show the behavior we have right here, I would like to have simple block elements.

* keep in mind, this is the mobile first design, we can simply delete display inline block.

```css
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem;
  /* display: inline-block; */
  width: 30%;
  vertical-align: middle;
}
```

* if I reload the page, you can see the plans are now displayed below each other.(Refer : responsive8)

* Why is this happening?

* Well because as you can see it right here, each plan now again is a simple div and we talked about the general behavior of a div, a div is a block level element and therefore, occupies the entire space of where it is positioned. Now with that, we did our first step. 

* By the way, of course the desktop design is now less but we work on that in our media query of course, but for now, let's stick to our mobile design

* So the general order is fine, we have a different way to display our plans but the width should be different.

* now simply change the width right here to 100%, like that.

```css
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem;
  /* display: inline-block; */
  width: 100%;
  vertical-align: middle;
}
```
* if we reload this occupies whole 100% (refer :responsive9)

* but still we have some space in left and right Well, this should be due to the plan list class right here, yes. Well as we can see, the plan list class right here has a margin to the left and to the right, and we can also see why this is happening because we have a width of 80% only and this margin auto.

* So if we just change that to 100% and then actually get rid of the margin auto because there should not be any margin left,

```css
.plan__list {
  width: 100%;
  margin: auto;
  text-align: center;
}
```
* If we reload then we can see that we have our elements now displayed below each other still and we got rid of the margin (refer :responsive10)

* What we can also see is that our website is not really formatted perfectly yet, you can see this little gap between the image and the right border.

* and we can also go to the left and to the right of our plans and if we inspect the plan, we can see that we have a margin around it,So let's maybe get rid of the left and right margin,

* so I'm in the plan selector class selector again and the margin top and bottom is fine but I think to the left and to the right, we should have a zero margin.

```css
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}
```
* if we reload now we could see its perfect now. (refer: responsive11)

* We can then also clean our code a bit and actually get rid of the vertical alignment now because we should actually be able yes as you can see, as the elements are basically using the entire space, the vertical alignment is not required anymore.

```css
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  width: 100%;
  /* vertical-align: middle; */ 
}
```

### Making the Plans Responsive

* So now it's time to add a media query because we want to make sure that the page doesn't look like that on the desktop devices because I don't think that's a good look. So let's go back to the code

```css
@media(min-width: 40rem){
  /* these rules are for desktop view  */
  .plan__list {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .plan {
    /* margin: 0.5rem; */
    display: inline-block;
    width: 30%;
    vertical-align: middle;
    min-width: 13rem;
    max-width: 25rem;
  }

  .plan--highlighted {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
}
```
* (refer: responsive12) if we reload the page again, we should see that the boxes don't become bigger than the 25rem we defined and that's pretty amazing

* because now we have two really significantly different designs implemented on our website; the mobile design, right here and our desktop design which keeps increasing up to certain screen widths but then is limited once we hit a certain maximum width that we just defined. So with the plans being responsive

### Working with Logical Operators

* Until now, the size of our background image right here solely depends on the min width, so once we are above our minimum width right here, the height will be increased. We have a normal height of 33vh for the mobile view and of 30vh for the desktop view 

* Now for the the mobile phone, this is totally fine but if we say we have an iPad, well then the problem could be that if we go to the landscape mode, that the image might be too big because the width now is still above our limit for the media query but it could be that the height is not enough now because width and height simply changed due to landscape and portrait.(Refer : responsive13).

* Now the great thing would be if we could also consider the height at the same time, so we could say that we only want to increase our image or apply this media query in case both criteria are met, so we have enough width and enough height.

* Now the cool thing is that we can do this because with media queries, we can of course address the height but we cannot only address the height and the width separately, we can actually address both by creating more complex media queries.

* Basically we could simply add and write here and now specify a minimum height for our media query. This simply would mean that the code for this media query will only be applied if both criteria right here are met,

```css
@media(min-width: 40rem) and (min-height: 60rem){

  ...
}
```
* If we do that andre load our iPad right here, then you can see that our image didn't get any bigger because both criteria were not met, did you see it? (Refer: responsive14)

* If I turn that back to 40rem for example because then it would be applied, so if I reload, can you see it? The image then simply uses the code we added right here.

```css
@media(min-width: 40rem) and (min-height: 40rem){
  ...
}
```

* So that's one way how you could solve something like that, you can use such combinators to basically make sure that both the min height and the min width are met.

* Another thing we could do is, we cannot only combine it like this with another minimum height, we could also say that the orientation must be a specific one.

```css
@media(min-width: 40rem) and (orientation: portrait){
  ...
}
```

```css
@media(min-width: 40rem) and (orientation: landscape){
  ...
}
```
* So this is how you can specifically target the way your website behaves, not only depending on the width of your device but also of combinations,

* so of two different conditions met at the same time and additional information like how the user uses its device, so in landscape or portrait mode

*  In addition to this and combinator, so this one right here, we also have comma separated lists.

```css
@media(min-width: 40rem), (orientation: landscape){
  ...
}
```
* This means if I now simply change the end with a comma like that, then if one of these two conditions is true, then the code will be applied.

* This means we either have a minimum width of 40rem or the landscape orientation to display our website according to this desktop view.

* Therefore using this orientation portrait can be an idea but it's not the best one if you also want to make sure that your website looks good on a desktop device. Therefore what we will do right here is we will go back to a minimum height for our media query right here and let's say the minimum height should be maybe 60rem, something like that.

### Improving the Customers Page

* The great thing is that we didn't have to implement any responsive design on this packages page because the default behavior of the elements was sufficient to ensure this quite nice design on this page actually.

* However I think the customers page is not done yet.So what this means for us is we have to work on the customers page, so let's do this now.

* The first problem is that the image and the text is displayed next to each other.

```css
.testimonial__image-container {
    width: 65%;
    max-width: 580px;
    /* display: inline-block; */
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```
* if we reload and see (Refer : responsive15),the page, we can see that now we are getting already closer to the result that we want to have. Now we have an image, the text, another text and another image. So with that, we achieved our first step

* but still the text is not displayed as intended, and as we can see, we have also inline block right there.

```css
.testimonial__info {
    text-align: right;
    padding: 0.9rem;
    /* display: inline-block; */
    vertical-align: middle;
    width: 30%;
  }
```
* yes its looks better now(Refer : responsive16)

* yes now we have the text aligned to the left but if we now also get rid of the rest of the code right here because why would it be aligned in the middle and why should it only have 30% of the width, we don't need that, (Refer: responsive17)

```css
.testimonial__info {
    text-align: right;
    padding: 0.9rem;
    /* display: inline-block; */
    /* vertical-align: middle;
    width: 30%; */
  }
```
* We could remove the margin between the two testimonial class.

```css
.testimonial {
    font-size: 1.2rem;
    /* margin: 3rem 0; */
  }
```
* And with that this looks more cleaner(Refer : responsive18) 

* And we could remove vertical align also

```css
.testimonial__image-container {
    width: 65%;
    max-width: 580px;
    /* display: inline-block; */
    /* vertical-align: middle; */
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }

```

* and I think with that, our mobile design looks quite OK now. As we can see, it's probably not perfect yet, Therefore, I do not want to focus too much onto this right now, the only thing I want to make sure is that once we hit our desktop design, I want to make sure that the design doesn't stay like that but that we have some responsive design in it.

* we did again minor changes in mobile view

```css
.testimonial__image-container {
    width: 100%;
    max-width: 40rem; 
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }
```

* Our media queries

```css
 @media(min-width: 40rem){
    .testimonial {
      margin: 3rem auto; /* Here we added auto to center our content automatically */
      max-width: 94rem; /* As soon as we reach 94rem/1500px width the content stops it won't expand*/
    }
    .testimonial__image-container {
      display: inline-block; 
      vertical-align: middle;
      width: 66%;
    }
    .testimonial__info {
      display: inline-block;
      vertical-align: middle;
      width: 30%;
    }
  }
```

### Improving the Packages Page

* So after fixing our customers page, let's now also limit the maximum width of our packages right here.

```css
@media(min-width: 40rem){
    main {
        margin: 3rem auto;
        max-width: 94rem; /* 94rem =1500px aproximately */
    }
}
```
* On hover the border should get highlight

```css
@media(min-width: 94rem){
    .package {
      border-left: 4px solid #0e4f1f;;
    }
    #free {
      border-right: 4px solid #0e4f1f;
    }
    #free:hover,
    #free:active {
        border-right-color: #ff5454;
    }
}
```

### Cleaning Up the Navigation Bar

* now I'm coming back to the navigation bar because if we look at the structure of our navigation bar, so right here in the header and then we have our div right here and then we have our anchor tag and inside this anchor tag, we have our image.

* So we defined a height of 2.5rem for our image, that's what we did when we worked on the responsive design but the anchor tag actually has a font size defined, 1.5rem and this leads to the issue that if we look at the height of our image, this is like 40 pixels but the anchor tag is 46 pixels, as you can see it in the left upper part of the screen

* and although this is not a big problem, I don't think that's a logical behavior. Therefore, wouldn't it make more sense to simply get rid of the font size right here of our anchor tag and define a fixed height for our anchor tag of 2.5rem,so the height we had for our image and then the image can simply have a height of 100% of its containing element which is the anchor tag and then the structure would be a bit better.

### Positioning our Footer Correctly

* So what is wrong with our footer? Well as you can see, the footer is kind of positioned in the middle of nowhere, (Refer : responsive19 , responsive20)

* While the starting page since the content is huge our footer positioned okay there.. but other two pages it's in the middle of nowhere.

* but generally I think it would definitely make sense to think about the way, how to create a general style, so a style in our shared.css file which defines that the footer is always positioned at the bottom of our page.

* Now how could we acheive that?

* Now if we think back about our units module, why don't we simply add a height of 100vh, so 100% of the viewport to our main element and then deduct the height of our nav bar because that's the space the nav bar needs at the beginning, so this means our main part would now simply end right here and if we then also deduct the space our footer needs, then we will ensure that the footer is always positioned at the bottom of the page.

* Now to achieve that, we simply need two things, we need to select our main element and then we need a calculation formula.

* Now what formula would we need to make sure that the footer is positioned according to the way I just described?

```css
main{
    min-height: calc(100vh - 3.5rem - 8rem); /*3.5(navigation bar needs), 8rem(footer)*/
    margin-top: 3.5rem;
}
```
* Now what is the space our footer needs? Well basically, if we inspect the footer like that, this is 19 pixels plus 64 pixels for the top and bottom padding,so this means we have 83 pixels plus the 48 pixels for the top margin. So in total, this would be 131 pixels, and if we turn that into rem, we know 1rem is 60 pixels, this would be 8rem.

*  if we now reload the page, we cannot see a difference but that's simply due to margin collapsing because as we can see on product overview, we have our margin top and we also have it for our main element right here. What we can do now is we can go to our main.css file and get rid of that margin top right here because we now defined a general rule in our shared.css file,

Dive Deeper into Selected Topics

Absolute lengths on W3.org: https://www.w3.org/TR/css-values-3/#absolute-lengths

More about device sizes: https://bjango.com/articles/min-device-pixel-ratio/

Media queries theory: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

Applying media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries





