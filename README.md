# CSS-Complete-Guide

## Section 7:  Understanding Background Images & Images

###  Understanding "background-size"

* we need to position and size it, both can be done with the background property if you're using a background image but that's the first thing I want to dive in.

* Right now we always used background either with an image or with a solid color, we use the same notation but background here actually is just a shorthand, we could replace the background here with background-image
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-color: red; 
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* here we used botj background-image and  background-color what will happen did background-color going to replace/over-ride image ?? NO !!! it won't 

* you see the color flash but you also see the image and we have to temporarily remove the image background to see the solid color because it turns out you can define multiple backgrounds, only one solid color though, multiple images are possible but we'll dive into this later in the module and therefore, you can create both an image and a color, the image will be in front of the color though.

*  Now there are more background properties we can use and for sizing, background size seems to be appropriate.Now background size takes a couple of different values,
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    /* background-color: red;  */
    background-size : 100px;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* lets add background-size : 100px; and reload (Refer : background-1)

* if we reload, we see many small images. Now each image actually has a width of 100 pixels because if we only set one value here, this refers to the width of the image and by default, it's then repeated.

* Now we can turn off that repeating or control it with background-repeat. You can set it to no repeat to don't repeat the image,
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    /* background-color: red;  */
    background-size : 100px;
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* Now we got only one 100px width image in the top left corner.(refer : background-2);

* or you set it to repeat x, to only repeat the image on the x-axis, if you now reload, you see there are plenty of images on the x-axis but only in one row because we don't repeat it on the y-axis (Refer : background-3)
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : 100px;
    background-repeat: repeat-x;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* if you saved as repeat-y it will be repeated only in one column.(Refer : background-4)

* However let's set this back to no repeat and let's increase the width to let's say 300 pixels. Now if we reload, we can get one bigger image.It doesn't fit into our container though, so this is not the solution I want to end with.

* Before I dive into a solution that works for us here, let me show what you can do if you set a second value here, let's say to 100 pixels. If you do that, you set the width and height of the image.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : 300px 100px;
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```

* If you don't set it, the height has automatically adjusted to keep the aspect ratio, if you do set a value here, the image is forced into these dimensions,so it may very well be distorted 

* Now besides pixel values, you can also set percentage values like percentage for the width and height.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : 50% 100%; /* width height */
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```

* if you don't want to distort it, you can set the first value to auto. Now the width will be set automatically and it will keep the aspect ratio.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : auto 100%; /* auto width and 100% height */
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* That of course as you can see leads to the image not occupying the full container in our case because the container happens to have a different aspect ratio in our app and for most web projects, this will probably be the case, you rarely have a perfect fit of container and image.

*  Now these were a couple of solutions, please note that in the case where we had a width of 100% and a height of auto or undefined,
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : 100% ; /* 100% width and height of auto or undefined */
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* that the image actually takes the full width of the container, it does not overlap to the left or right but it also does not overlap to the top and bottom, even though there the image height does not match the container height.(refer : background-5).The image is automatically cropped and this is also something we can control, we can control how it is cropped.

* Before we do that though, let's also find out one other way of defining the background size.

* Besides manually setting the width and height, you get some predefined keywords and a very useful one is cover.

```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* if you reload, essentially does the same as 100% here (refer : background-6), so it sets the width to the container width. However covered does not exactly do that,cover finds out which part of your container, so width or height is the important one to be aligned to your image.

* Put in other words, our image here actually has an aspect ratio where it's wider than it's high, so it has landscape mode, the same is true for our container.So cover automatically finds out that it should set the width to 100% because the height will then have some excess space because the image, just as the container, has a height that's less than the width.

* If you had a portrait mode container, the opposite would be the case. Put into other words which make this clear, cover is a setting that will ensure that your image always fills the entire container, it will even zoom in if your image is smaller than the container. So cover is the best setting if you want to ensure that there never is any whitespace anywhere in your container. 

* An alternative to this is contain. Contain actually ensures that the full image is visible in the container because right now, the image is cropped, we don't see all the parts of the image, this becomes clear if we reload with the sizes set to contain.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* We also see that now there is some super whitespace on the right (refer : background-7) because with contain, what happens is that the image actually doesn't fill the entire container because contain does not make sure that the entire container is filled, like cover does, instead it ensures that the entire image is possible and if that means that there is some remaining space in the container, so be it.

* So contain and cover are two very useful predefined settings which you use instead of manually setting the size in many cases, in reality, to control how your image is displayed in the surrounding container.

* Now with both contain and cover, we have the case that we might want to position the image because with cover, we fill the entire container but if you watch the rocks again, you don't see them here (ie full image). Well maybe you want to fill the entire container but show less of the sky and more of the rock, so of the bottom of our image. This is something we can control with background position.

### Working with "background-position"

* We had a look at background size,  now let's position the image and as I said, we can do it as with background position.

*  Background position has a couple of ways of using it,the simplest usage is to define a pixel value,
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: 20px; /* defines x-axis */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* we reload, what we can see is that the image is moved to the right by 20 pixels.(refer : background-position1), The first value defines the x-axis, it defines how the left edge of the image should be positioned relative to the left edge of the surrounding.

* Can also define second value as 50px this is now the same for the top edge of the image and the top edge of the container. Now there is some whitespace at the top too (refer : background-position2)
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: 20px 50px; /* defines x-axis and y-axis */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* Now we can also use percentage values, for example we can set 10%
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: 10%; /* defines with percentage */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* now the result might surprise you. If you reload, actually there's no whitespace on the left (refer : background-position3) because this now actually works a bit different,

* with the percentage values, you can define how much of the excess space, so of the parts of the image that do not make it into the container, how these parts should be distributed.

* Now regarding the width, the full image is displayed in the container, it's not cropped on either the left or the right,

* so we can enter whatever we want here for the first value, it will not change the way the image is displayed.

* So let's set it to 0% which means the left part of the excess space, of which we have none is perfectly aligned to the left edge of the container,

* however this becomes clearer if we also set the top. The second value now again refers to the y-axis and if we set 10% here, this means that 10% of our excess space should actually go over the top.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: 0% 10%; /* defines with percentage for x and y axis */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* If we reload, this will actually lead to our image being pushed down because and that's something you have to know.(refer : background-position4)

* the default if you only set one value, is 50%. So if I set 50 and I reload, we get the exact same result (refer : background-position5) as if we said no second value at all. 50% means of the parts of the image that do not fit into the container, so that are cropped of, 50% will be cropped at the bottom and 50% will be cropped at the top.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: 50%; /* defines with percentage for x and y axis */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* If we set this to 10%, only 10% will be cropped at the top which means that more parts are cropped at the bottom, so the image is effectively pushed down in its container.

* If we set this to 100% on the other hand, all the content that has to be cropped will be cropped at the top and nothing will be cropped at the bottom (Refer : background-position6), so this results in the bottom edge of the image being perfectly aligned to the bottom edge of the container and everything is cropped at the top.

* This is how you can control the positioning.

* Now manually setting this is possible but there also is a predefined value  "center", it's the same as if you set 50%, 50%.
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```

* So if you set center, it's perfectly centered because it means of the parts of the image that do not fit into the container, no matter if it's on the y or x-axis, 50% will be cropped on the left and right and top and bottom, so that the center of the image is the center of the container (refer : background-position7 ).

* You can also set this to left top for example,
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left top;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```
* this means that the left part of the image, the left edge of the image is positioned on the left edge of the container, so no cropping happens on the left and that the top of the image is aligned to the top of the container, so no cropping at the top. This could be translated with 0% 0%.(refer : background-position8)

* On the other hand, we can set this to left bottom to say left should be aligned and bottom, no cropping is happening at the bottom 
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left bottom;
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```

* you can even combine that with percentage values, so you could say to the left we want to crop 10%, to the bottom we want to crop 20% 
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%; /*left we want to crop 10%, to the bottom we want to crop 20% */
    width: 100%;
    height: 528px;
    padding: 10px;   
}
```

* this gives you full control over how you position your image. Now for our page here, I think this setting is actually quite nice, so I will stick to that.

### The "background" Shorthand - Theory

* Refer : css-background-properties.pdf

### Applying "background" Origin, Clip & Attachment

* Let's start with background origin, it's a bit comparable to box sizing, the values you can assign are very similar though there is an extra value. 

* Let's temporarily add some dashed border around your image ( "border: 5px dashed red;") you could see white space in left and right but top and right border placed on the image.(Refer background-origin-1)

* The reason for this is that on the left and right, the images fit into the container but as you can see, the border doesn't seem to be part of the container width. On the top and bottom, the border also isn't part of the container but on the top and bottom we actually have excess space on our image, so we crop it and that in turn seems to happen after the border, now that's exactly what we can control with properties like background origin.
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    background-origin: border-box; /* Here we added  border-box as background-origin*/
    width: 100%;
    height: 528px;
    padding: 10px;   
    margin-top : 43px;
    border: 5px dashed red;
    position: relative;
}
```
* we save and we reload, now you see the image also goes beneath or below the border on the left and right (Refer : background-origin-2) because we now basically define what the container is for our background property.  By default, it's not the border box and therefore we have that whitespace.

* So what is the default then, is it content box? Let's assign content box and reload
```css
#product-overview {
    /* background: url("freedom.jpg"); */
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%; 
    background-origin: content-box; /* Here we added  content-box as background-origin*/
    width: 100%;
    height: 528px;
    padding: 10px;   
    margin-top : 43px;
    border: 5px dashed red;
    position: relative;
}
```
* now we see we even got some more whitespace inside of our image in left and right (Refer : background-origin-3) because if we hover over our section here which holds the image, we see that it's got some padding (Refer : background-origin-4),that green area on the left and right and top and bottom.

* So content box just as for box sizing means the content without border and padding. So now the container which defines the width and height of our image is just a container without border and any padding.

* So the default actually is something we can't set on box sizing, the background-origin: padding-box; , this means the container including content and padding but not the border.

* Now however one other thing we can notice is that it always, no matter what we defined, went beneath the border for top and bottom because there, we were not talking about setting the height of the container but we simply had the effect that we had excess image and we cropped that but the cropping wasn't affected by background origin.

* instead is set with background clip, here we can also set it to border box. if we save that and we reload, we get the same behavior as before.
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    background-origin: border-box;
    background-clip: border-box;  /* here we added background-clip */
    width: 100%;
    height: 528px;
    padding: 10px;   
    margin-top : 43px;
    border: 5px dashed red;
    position: relative;
}
```
* instead of border-box lets add padding-box 
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    background-origin: border-box;
    background-clip: padding-box;  /* here we added background-clip as  padding-box*/
    width: 100%;
    height: 528px;
    padding: 10px;   
    margin-top : 43px;
    border: 5px dashed red;
    position: relative;
}
```

* If we change it to padding box however and we now reload, (Refer : background-clip-1) now you see the border is empty, so no image beneath it at the top and bottom too.

* So with background clip, we define where the image actually should be clipped if necessary and now it's clipped after the padding 

*  of course we could also set this to "content-box" to clip it before the padding, 
```css
#product-overview {
    background-image: url("freedom.jpg");
    background-size : cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    background-origin: border-box;
    background-clip: content-box;  /* here we added background-clip as  content-box*/
    width: 100%;
    height: 528px;
    padding: 10px;   
    margin-top : 43px;
    border: 5px dashed red;
    position: relative;
}
```
* so now we got this whitespace around it (Refer : background-clip-2). 

* So background clip actually overwrites background origin you could say. and it's also important for defining how it should be, well not just positioned and sized but also how it should be clipped.

* Now the last thing we saw in the slides is background attachment.

* Now we won't actually see this in action here and it's a property you rarely use. With that you can define how scrolling would behave in a container that has a background image but that is not fixed itself. Now this container here isn't fixed but relative but we can't scroll inside of it 

* and on the packages page, we have a container where we can scroll in it but the container itself is fixed to the page, so we also won't see effect there.

* Background attachment would allow you to set fixed, scroll or local as a value.

* and this defines whether the image scrolls with the other content of the container,

* for local, that would be the case, 

* for scroll however, the image would stay in place and the content would scroll over it, above it

* and for fixed, the image would not be fixed to the container but to the viewport.So you should have an effect where if you scroll the entire page with the container where the image is inside, the image should stay in place.

### Using the "background" Shorthand on our Project
```css
#product-overview {
            /*  image URL          position            /size repeat    origin and clip (here both have same value or else we will have two values) */
    background: url("freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
###  Styling Images

* In the last lectures, we worked a lot with background images and for a good reason because positioning background images really gives you a lot of flexibility.

* It's actually harder to style normal images as you will see, so let's dive into that because it's harder but of course not impossible.

* Let's start with a logo for our page. Right now, we only have text here, why don't we use an image instead?

```html
<a href="index.html" class="main-header__brand">
    <img src="./images/uhost-icon.png" alt="UHost - Your favourite hosting company">
</a>
```

* If we save and reload its really big (Refer : icon-1), yes it's a relatively big icon I'd say, at least we can clearly see it but it might be a little bit too big for our page here.

* So we definitely need to style that and that's exactly what we are going to do.

* let us add some height of 22px and reload our page we didn't see any changes

```css
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    height: 22px;
}
```
* The reason is and that's important that by setting a height on a container and keep in mind, main header brand is just the container, not the image element itself.By setting a height on the container, the image will not be affected because the default behavior and that's really important now,

* the default behavior is if you enter an image tag and you point to an image, then the default height and width of the original image will be used and will be entered into your document, no matter which width and height you set for the surrounding element.

* So in our case here if we have a look at our image, you'll see it it has dimensions of 186 x 190. 

* but the anchor tag which is much smaller than that .. but it doesn't much about that. img tag height will make sure about image height not the anchor tag's height.

* To make the image care, we can of course follow two routes.

* First of all, we need to select it, that's always the case. So let's use our main header brand class here and then let's select the image. You could of course also add a class to the image, here I will simply use the descendant selector to select any images in main header brand,

```css
.main-header__brand img{
    height: 22px;
}
```
* If we do that and we reload, now we see the image is much smaller (Refer : icon-2).

* Now besides doing that, what we could do is of course set 100%, this would mean it should take the height of the surrounding container, which happens to be our brand that sets the height of 22 pixels. However, this does not work. (Refer : icon-3).

```css
.main-header__brand img{
    height: 100%;
}
```

* Height 100% on the image will again lead it to use its original height, not the height defined by the container, that's important to understand,

* so we should really set the final value we want to have on the image here. Now let's find out if that's also the case for the width, in case we're not setting the height but let's say we're setting a width of 20 pixels on the surrounding container.

```css
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    /* height: 22px; */
    width: 22px;
}
```
* If we set nothing on the image, nothing changes,

* if we go to the image and we set width to 100% and then we reload, also nothing changes.

```css
.main-header__brand img{
    /* height: 100%; */
    width : 100%;
}
```

* So percentage values on the image don't help us here because they don't respect the surrounding container.

* Now actually the reason for that simply is that our surrounding container is an inline element itself, it's just an anchor tag.

```css
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    /* height: 22px; */
    display: inline-block;
}
```
* If we set it to inline block instead and now we reload, now the image does respect this container style,(Refer icon-4) so it was not the image but the fact that the anchor tag was not a block or inline block element.

* So this is important to understand, with using images it depends on whether you use it nested in an inline element, in which case 100% will simply use the default dimension, the default or height of the image

* or if you use it inside a block level element where it will use the container width or height.

* So now with that back, we now can set 100% as a height and it will use the height of our container here.

```css
.main-header__brand img{
    height: 100%; 
}
```
* So with that, we style the image and this is about all we can do regarding styling already. All the fancy things we could do for background images, with the different positioning modes and sizing modes, with cover and so on, are not really possible with normal images.

* You can always find some hacky solutions with negative paddings or margins to position an image in a certain way, but that is bit hacky not recommenede

* Now therefore if you want to do some more complex styling on an image, I recommend using background image.

* The downside of background image just is as it's not part of your normal document flow, it doesn't have its own HTML elements that clearly signals that it's an image, it's worse for accessibility.So background images should really just be used as such, backgrounds.

*  If you got an image in your normal document flow, you should go with the normal image but then you often don't have to set more than the width or the height. Of course you can still set anything else like borders and so on,

* I'm just talking about the positioning and sizing where you are limited, regarding all the other things, you can of course set everything you want.

### Adding the Customers Page to our Website

* We added cutomer page just refer customer folder.

### Working on the Image Layout

* In Html we have the following 

```html
<div class="testimonial__image-container">
    <img src="../images/customer-1.jpg" alt="Mike Statham - Customer" class="testimonial__image">
</div>
```
* Currently we have some huge image (refer: layout1)

* lets add testimonial__image-container css

```css 
.testimonial__image-container {
    width: 65%;
     display: inline-block; /* we wouldn't see any effect unless we also set the container, the image container to display inline block as you learned over the last lectures, then the image will respect the width of the parent or else it won't */
}
.testimonial__image {
    width: 100%;
}
```
* With this if we reload, we indeed decreased the size of our images, so that's much better.(refer: layout2).Still, they don't fit into one line with our other text.

* Now if we inspect that however, so the testimonial info class that is, we see that it also does have the inline block display style. So theoretically, we could fit it into one line with our other image container, for that however, we have to go to testimonial info 

```css
.testimonial__info {
    text-align: right;
    padding: 14px;
    display: inline-block;
    vertical-align: middle;
    width: 30%; /* here we added width */
  }
```

* If we now reload, now the text is next to the image, it's not aligned in the middle but it's next to it (refer: layout3). Now why does it have that strange positioning though?

* The reason for this simply is that our info container has vertical align middle, our image container which is its adjacent inline block element doesn't have it, so it's not positioned correctly

```css 
.testimonial__image-container {
    width: 65%;
     display: inline-block; 
     vertical-align: middle; /* To position this in the middle*/
}
```
*  we reload, now the text actually is positioned next to our testimonial image.(Refer: layout4)

* by the way also notice that of course right now, our page is only partly responsive, for small screens this looks really awkward and for big screens, we got huge images but this is something we can control once we reach the responsive design lectures.

* so what else can we do here? Well how about a shadow behind these images?

* We can go to our image container now because we want to add that shadow to the block level element and add box shadow

```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.3); 
  }
```

*  If we now reload, our image does have that nice shadow which looks all right. Now we also got that annoying whitespace at the bottom of the image though, this is simply an inline element bug (layout5).

* we can get rid of it by going to our testimonial image and setting vertical align on the image, not on the container but on the image to top or bottom, it actually will both work.

```css
.testimonial__image {
    width: 100%;
    vertical-align: top;
  }
```
* Now with that, it gets rid of that whitespace (layout6), so that's a nice trick to keep in mind. If you've got an image in a surrounding container and the image of course is an inline element, you can get rid of that whitespace that is introduced to that inline element behavior by adding vertical align top,an alternative would be to set the image to display block.This would also fix it, it would turn it to a block level element and hence remove any whitespace after Both works, I'll use the vertical align top solution.it.Now with that, this looks quite nice in my opinion,got a nice page (layout6).

* what about that second image, can't we improve the box shadow of that? It does have it, you can see it below the image but wouldn't it be nice to have a little bit more box shadow on the left and right here too? (refer : layout7)

* We can actually add this by going back to the customers.css file and adding a fourth value to the box shadow, the spread.

```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.3); 
  }
```

* you'll see there's a tiny shadow to the left and top too in second image(refer : layout 8). because spread simply defines how much the box shadow leaves its border, so how much it adds to the left, right and top and bottom

* Maybe we need more blur now, yes this looks better.

```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3); /* here we increased blur to 5px; */
  }
```

* yes this looks better.So this is the final state with which I want to end(refer : layout9)

* Now keep in mind, background images actually give you more flexibility, you can position them easier, you can do more with them but you should only use them for backgrounds because of accessibility.

* Again, the responsive part is something we'll extensively cover in the responsive layout section.

### Understanding Linear Gradients

* let's move onwards to linear gradients and for that, I'll go back to my main.css file and that background image we have on the starting page.

* Let's say we want to add a linear gradient instead of that image, later we'll also combine it with the image but for now, let's use just the linear gradient.

* The first important thing you've got to know is that gradients, both linear and radial ones are treated as images.

* So if you were to use the subproperties and not the shorthand, you would add a gradient by targeting background image or in the shorthand version, you simply add it instead or additional to images because we can have multiple background images, not just one but more about multiple backgrounds also at a later part.

* For now, let's simply overwrite the background we set here with a linear gradient.

* We add one by using the linear gradient function CSS

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient();
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* Now the linear gradient function consists of two parts in the end, you can add more than two arguments but that simply is because you can define multiple colors across which you want to transition

* but the first argument always is the direction of the gradient.You can omit it, in which case the first argument would be a color, so the simplest possible gradient is red blue for example

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(red, blue);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```

* if you save that, you get a gradient from red to blue, as you see the default is vertically, so by default, it simply is a perfect line from top to bottom and it transitions from red smoothly to blue.(refer: gradient1)

* Now I just mentioned, the first argument can be a color but normally it's the direction. You can for example

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(to bottom, red, blue); /* here we added direction*/
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* This looks strange at first but this is a syntax understood by CSS, it simply means that from top to bottom, so you can save this and reload and you get the same result as before.(refer: gradient1)

* You can also say to left button and now it will be a diagonal,

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(to left bottom, red, blue); /* here we added direction*/
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```

* now you see it starts in the top right and goes to the left bottom, that's the transition. (refer: gradient2). 

* Of course as you might guess, you could say to left top, to right top and so on and this simply defines where your colors start and where they go to.

* Now you can also define an angle with degrees, so you could say 30 degrees and now your transition or your gradient would have a 30 degree angle.(refer: gradient3). 

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(30deg, red, blue); /* here we added direction*/
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```

* Now if you set it to zero degrees and you reload, you start at the bottom actually.(refer: gradient4)

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(0deg, red, blue); /* here we added direction*/
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* So unlike the folder you start at the top, zero degrees simply means a perfect line coming from the bottom, therefore 180 degrees would be your default where you start at the top and you can of course define any angle you want or use that to left bottom notation.

* Now besides that, you could also define multiple colors, as many as you want basically.you could also use that hex code here and the same is true for rgb or hsl functions, you could use these too.

* A special gradient or a special way of using gradients is to also implement transparency,

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(180deg, red, transparent); /* here we added transparancy*/
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* for eg you could transition from red to transparent and if you do that, well then you actually see we fadeout to transparent, (refer : gradient5)

* You can of course also transition to rgba color for example, like this with some transparency inside of it.

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(180deg, red, rgba(0,0,0,0.5)); /* here we added transparancy with rgba color */
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* Now we would transition from red to this transparent black grey color.(refer : gradient6)

* this is how you can use linear gradients, you can do even more than that though. Besides specifying multiple colors, you can also define where these colors should start and stop,

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image : linear-gradient(180deg, red 70%, blue 80%, rgba(0,0,0,0.5));
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```

* Now if you reload, 70% of the gradient is red, a perfect red I should say and then it transitions into blue and then the other color. Of course you can also define stops here too, you could say 80% blue, this simply now means that after 80% of the gradient, the blue will already be done.(refer : gradient7)

* If you enter a value smaller than the 70% of the red here and you then reload, you'll see you got simply a hard edge because there's no room for transition
because when the blue part enters, it's already too late to put it like this. It should have started at 60%, it can only start after 70 but therefore, there is no smooth transition.(refer : gradient8)

* So this is how you can play around with the colors and how you can control when which color transitions into what. This is the linear gradient,

### Applying Radial Gradients

* let's add another background image, this time with the radial gradient function.

```css
#product-overview {
    /*background: url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;*/
    /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
    /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
    background-image: radial-gradient(red, blue);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    /* border: 5px dashed red; */
    position: relative;   
}
```
* The radial gradient function as the name suggests allows you to define a radial gradient,so not one that starts at one edge and goes to another one but one that starts at a certain shape and then transitions to all the areas around it.

* Let's start with a simple gradient again, red blue because we can clearly see that. If we reload, this is our default radial gradient, positioned in the middle by default and the shape is an ellipse,it's not a circle, it's an ellipse (Refer : radial1);

* Of course here too, you can define multiple colors like green and the shape will simply be kept and now we have a red ellipse going to a blue ellipse going to a green ellipse,(Refer : radial2);

* Now of course you can also change the shape, for example you can add a first argument that can be circle, that's the alternative, the only alternative you have to the ellipse, you can set it to be a circle instead of an ellipse.

```css
#product-overview {
    background-image: radial-gradient(center, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* If you now reload and watch closely, you see it now indeed is a perfect circle, no longer an ellipse.(Refer : radial3).

* Now of course you can also change the position, where it should start.

* Right now, it was always centered but maybe you don't want that, you can add at attribute here and say at top.

```css
#product-overview {
    background-image: radial-gradient(center at top, red, blue), green;
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* if you do that and you reload, now you see the center of the circle is right in the middle of the top,(Refer : radial4).

* you can also say @top left to put it to the top left.

```css
#product-overview {
    background-image: radial-gradient(center at top left, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* Now the center of the circle is in the top left and then the radial gradient starts from there (Refer : radial5). 

* You can also enter custom values here,you could say 20%, 50%,

```css
#product-overview {
    background-image: radial-gradient(center at 20% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```
* if you do that you actually see it's moved 20% from the left, so the circle of the innermost shape is 20% from the left and 50% from the top.So this is basically how you know it, first value is the x-axis, second value is the y-axis,(Refer : radial6).of course you can also use pixels here.

* now what's missing? The missing piece of course is the size,

* you can define the size by for example adding 20 pixels after a circle.

```css
#product-overview {
    background-image: radial-gradient(center 20px at 20% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```
* If you do that and you reload, now you see the circle is very tiny because now and that's important, the entire circle, without the outermost part, so in this case the red and the blue area, have a total of combined diameter of 20 pixels, so that's basically the width of the shape. (radial7)

* Now this only works for the circle, for the ellipse, if you use that which would be the default, t
```css
#product-overview {
    background-image: radial-gradient(ellipse 20px at 20% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* his actually doesn't work because what would the 20 pixels be referring to? (Refer : radial8).

* Of course you could add two values here and reload, now you again create a circle though, so you could add different values to turn this back to a non-circle.

```css
#product-overview {
    background-image: radial-gradient(ellipse 80px 30px at 30% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```
* So with two values, you can also style the ellipse, give it a certain width and height like that, first value is width, second value is height (Refer : radial9).

* but there also are some keywords in case you don't want to do it like that.You can also add something like farthest side.

```css
#product-overview {
    background-image: radial-gradient(ellipse farthest-side at 30% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* Now what does this do? Watch the current value (Refer : radial9) and then reload.

* Now what this actually means and you can barely see it, that the ending shape and that simply means until it transitions to the outermost color, so in case of two colors after the first color or in case after three colors as we have it here, after the second color, that the ending shape and you can barely see it,(Refer : radial10). the outer rings of the blue color touch the farthest side, so the side furthest away from the center, from the position of the element, this barely touches this side (Refer : radial10)

* and on the other hand, you would have closest-side to reduce the size, 

```css
#product-overview {
    background-image: radial-gradient(ellipse closest-side at 30% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```
* now the outermost circle of the blue color and again that's hard to see but you can see there is still some non-perfect green part here (Refer : radial11)
this touches the closest side and it also concerns top and bottom by the way.

* and you can also not use the sides but the corners.

```css
#product-overview {
    background-image: radial-gradient(ellipse closest-corner at 30% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

* Closest corner for example ensures that the outermost ring touches the closest corner (refer : radial12).

```css
#product-overview {
    background-image: radial-gradient(ellipse farthest-corner at 30% 50%, red, blue, green);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;   
}
```

*  farthest corner allows you to control that it touches the farthest corner.(refer : radial13)

* So these are some great defaults you can use to control the size of your radial gradient 

*  What you can still do is you can define color stops like blue after 70%, you can do that to change where it should transition to green and so on

### Stacking Multiple Backgrounds

* So we had to look at gradients and I did mention that we can use multiple backgrounds,

* so how does this look like? For the background shorthand or also with multiple background image and color assignments, we can set multiple backgrounds for one and the same element.

* This of course only make sense if the backgrounds have some form of transparency to them, be that images with the transparent parts or gradients with transparent colors,otherwise you will only see the topmost background but you can add multiple backgrounds.

* Important though, only one solid color can be used and it will always be the bottommost background. You can now use how many background images you want to use though, you are not limited regarding that, you can add multiple background images and keep in mind, gradients count as images

* So let's see this in action in our project. Back there on the starting page,

```css
background: url("./images/freedom.jpg")  left 10% bottom 20%/cover no-repeat border-box, #ff1b68; 
```
* #ff1b68 is a fallback if image can't be loaded.

* and I also want to add a linear gradient.

```css
#product-overview {
    /*background : linear-gradient(position,color(color start with 60% transparency) color stop of 10%, for fully transparency we added transperant), imageURL image-background-properties , showcolorifimagefails */
    /* linear-gradient color so I want to start at the bottom and I want to go from light transparent grey to a fully transparent look. */
    background: linear-gradient(to top, rgba(80,68,18,0.6) 10%, transparent), url("./images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box, #ff1b68;
}
```
* i used rgba and then I will use 80, 68, 18, that will be a brownish greyish color which fits the general color theme of the image

* to a fully transparent look but here I also add 60% opacity only so that we have some transparency, and then again, I go to full transparency.

* Now I'll also add a color stop, so before the comma, after my rgba function, I'll add 10%, so that I don't have an even transition but that I leave my color here relatively early. then follwed by that we used transparent keyword for fully transparency

*  we reload, we actually see that the bottom now also has this light golden brownish look. (Refer : multi1);

* here you see both a linear gradient in action as well as the stacking of backgrounds in action.

### Understanding Filters

* What is a filter?

* Here is a div element, doesn't have any content but let's say it has some styles that turn it into a box we can see, by adding a background color, brown maybe and also width and height, left out here but let's say it has this, then we would see a box which looks like that (Refer : filter1).

* Now we can add a filter with the filter property and use one of the pre-defined filter functions to change the look of that element and its content,(Refer : filter2) for example the blur filter would take a pixel value and would blur the box (refer filter3). That is what filters are,

```css
div{
    background: brown;
    filter: blur(10%);
}
```
* they allow us to change the visual appearance of an element by applying a filter, like blurring, grayscale or changing the contrast.

* A list of all available filters can be found in the last lecture of this module but for now, let's simply see a filter in action.(refer : https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

* so therefore filters are a quick and easy way of changing the visuals of something and you can also apply more than one filter as you can see.

* Now let's simply see this in action and let's apply a filter, I want to do this on our packages page.

* we already have background image let me first position this image with center/cover, so that we can add more of the image

```css
.background {
    background: url("../images/plans-background.jpg") center/cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index : -1
}
```

* Now we see it's actually a quite colorful image with that green plant. now let's remove some of that color and let's add a tiny grayscale.You could of course also blur it but that might be hard to your eyes in the end.

```css
.background {
    background: url("../images/plans-background.jpg") center/cover;
    /* The grayscale function takes a percentage, defining how much we want to turn it to grey, 100% is maximum*/
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index : -1
}
```
* with that if we reload we got a fully greayed image (refer filter4)

* We can do that but I don't want to go as far, so maybe 40% looks good here. So if we take 40% and we reload, now we still got some color but it's a little bit more grayish and of course feel free to play around with that and possibly add more filters to other parts of this app if you want to.

* This is how easy you can use the filter property, as you can see, really not that difficult to use.

* if you do scroll down to the very bottom (MDN filter doc), you'll see the browser compatibility and there, you see that basic support for filters is missing in Internet Explorer, it's available in Edge but not in the Internet Explorer. So if you still have to support that, you might not be able to use filter or you have to use a polyfill or implement some other fallback or only use filter in cases where it doesn't matter if it doesn't get applied, where it just enhances the look but doesn't do something it absolutely depends on.

### Adding & Styling SVGs - The Basics

* Now one popular form of images or icons is svg for scalable vector graphics.
```css
<svg viewBox="0 0 512 512">
    <path style="fill:#F09B24;" d="M344,248h-32V112c0-4.418-3.582-8-8-8h-40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32v128h-32  c-4.418,0-8,3.582-8,8s3.582,8,8,8h32v128h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h40c4.418,0,8-3.582,8-8V264h32c4.418,0,8-3.582,8-8  S348.418,248,344,248z"
    />
    <path style="fill:#8E9AA9;" d="M264,64H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256c4.418,0,8-3.582,8-8V72  C272,67.582,268.418,64,264,64z"
    />
    <path style="fill:#7C899B;" d="M24,144c-4.418,0-8-3.582-8-8V64H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256  c4.418,0,8-3.582,8-8v-8H24z"
    />
    <rect x="152" y="96" style="fill:#B8E3A8;" width="88" height="32" />
    <g>
        <polygon style="fill:#7EC97D;" points="152,96 152,128 166,128 198,96  " />
        <polygon style="fill:#7EC97D;" points="220,96 188,128 240,128 240,96  " />
    </g>
    <path style="fill:#56677E;" d="M240,136h-88c-4.418,0-8-3.582-8-8V96c0-4.418,3.582-8,8-8h88c4.418,0,8,3.582,8,8v32  C248,132.418,244.418,136,240,136z M160,120h72v-16h-72V120z"
    />
    <g>
        <path style="fill:#435670;" d="M32,136c-4.418,0-8-3.582-8-8V96c0-4.418,3.582-8,8-8s8,3.582,8,8v32C40,132.418,36.418,136,32,136z   "
        />
        <path style="fill:#435670;" d="M56,136c-4.418,0-8-3.582-8-8V96c0-4.418,3.582-8,8-8s8,3.582,8,8v32C64,132.418,60.418,136,56,136z   "
        />
        <path style="fill:#435670;" d="M80,136c-4.418,0-8-3.582-8-8V96c0-4.418,3.582-8,8-8s8,3.582,8,8v32C88,132.418,84.418,136,80,136z   "
        />
        <path style="fill:#435670;" d="M104,136c-4.418,0-8-3.582-8-8V96c0-4.418,3.582-8,8-8s8,3.582,8,8v32   C112,132.418,108.418,136,104,136z"
        />
        <path style="fill:#435670;" d="M128,105c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,101.418,132.418,105,128,105z"
        />
        <path style="fill:#435670;" d="M128,136c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,132.418,132.418,136,128,136z"
        />
    </g>
    <path style="fill:#8E9AA9;" d="M264,208H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256c4.418,0,8-3.582,8-8v-80  C272,211.582,268.418,208,264,208z"
    />
    <path style="fill:#7C899B;" d="M24,288c-4.418,0-8-3.582-8-8v-72H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256  c4.418,0,8-3.582,8-8v-8H24z"
    />
    <rect x="152" y="240" style="fill:#B8E3A8;" width="88" height="32" />
    <g>
        <polygon style="fill:#7EC97D;" points="152,240 152,272 166,272 198,240  " />
        <polygon style="fill:#7EC97D;" points="220,240 188,272 240,272 240,240  " />
    </g>
    <path style="fill:#56677E;" d="M240,280h-88c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8h88c4.418,0,8,3.582,8,8v32  C248,276.418,244.418,280,240,280z M160,264h72v-16h-72V264z"
    />
    <g>
        <path style="fill:#435670;" d="M32,280c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C40,276.418,36.418,280,32,280   z"
        />
        <path style="fill:#435670;" d="M56,280c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C64,276.418,60.418,280,56,280   z"
        />
        <path style="fill:#435670;" d="M80,280c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C88,276.418,84.418,280,80,280   z"
        />
        <path style="fill:#435670;" d="M104,280c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32   C112,276.418,108.418,280,104,280z"
        />
        <path style="fill:#435670;" d="M128,249c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,245.418,132.418,249,128,249z"
        />
        <path style="fill:#435670;" d="M128,280c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,276.418,132.418,280,128,280z"
        />
    </g>
    <path style="fill:#8E9AA9;" d="M264,352H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256c4.418,0,8-3.582,8-8v-80  C272,355.582,268.418,352,264,352z"
    />
    <path style="fill:#7C899B;" d="M24,432c-4.418,0-8-3.582-8-8v-72H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h256  c4.418,0,8-3.582,8-8v-8H24z"
    />
    <rect x="152" y="384" style="fill:#B8E3A8;" width="88" height="32" />
    <g>
        <polygon style="fill:#7EC97D;" points="152,384 152,416 166,416 198,384  " />
        <polygon style="fill:#7EC97D;" points="220,384 188,416 240,416 240,384  " />
    </g>
    <path style="fill:#56677E;" d="M240,424h-88c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8h88c4.418,0,8,3.582,8,8v32  C248,420.418,244.418,424,240,424z M160,408h72v-16h-72V408z"
    />
    <g>
        <path style="fill:#435670;" d="M32,424c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C40,420.418,36.418,424,32,424   z"
        />
        <path style="fill:#435670;" d="M56,424c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C64,420.418,60.418,424,56,424   z"
        />
        <path style="fill:#435670;" d="M80,424c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32C88,420.418,84.418,424,80,424   z"
        />
        <path style="fill:#435670;" d="M104,424c-4.418,0-8-3.582-8-8v-32c0-4.418,3.582-8,8-8s8,3.582,8,8v32   C112,420.418,108.418,424,104,424z"
        />
        <path style="fill:#435670;" d="M128,393c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,389.418,132.418,393,128,393z"
        />
        <path style="fill:#435670;" d="M128,424c-4.418,0-8-3.582-8-8v-1c0-4.418,3.582-8,8-8s8,3.582,8,8v1   C136,420.418,132.418,424,128,424z"
        />
    </g>
    <path style="fill:#F7C14D;" d="M424,168c-48.523,0-88,39.477-88,88s39.477,88,88,88s88-39.477,88-88S472.523,168,424,168z" />
    <path style="fill:#FFDB66;" d="M424,184c-39.701,0-72,32.299-72,72s32.299,72,72,72s72-32.299,72-72S463.701,184,424,184z" />
    <path style="fill:#69788D;" d="M484.893,314.16C476.393,274.588,451.922,248,424,248s-52.393,26.588-60.893,66.16  c-0.605,2.82,0.354,5.749,2.511,7.664C381.731,336.124,402.465,344,424,344s42.269-7.876,58.381-22.176  C484.539,319.909,485.498,316.98,484.893,314.16z"
    />
    <path style="fill:#56677E;" d="M434.053,249.171C430.768,248.403,427.411,248,424,248c-27.922,0-52.393,26.588-60.893,66.16  c-0.605,2.82,0.354,5.749,2.511,7.664c3.383,3.002,6.979,5.703,10.734,8.125C384.904,286.243,407.373,255.378,434.053,249.171z"
    />
    <path style="fill:#69788D;" d="M424,192c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32S441.645,192,424,192z" />
    <path style="fill:#56677E;" d="M432,248c-17.645,0-32-14.355-32-32c0-6.783,2.128-13.076,5.742-18.258  C397.444,203.53,392,213.138,392,224c0,17.645,14.355,32,32,32c10.862,0,20.471-5.444,26.258-13.742  C445.076,245.872,438.783,248,432,248z"
    />

</svg>

```
* Now we applied these svg inside our div we could see the icon but its litter bigger(refer: svg1)

* Now you can style svg too, this is exactly what I want to do with you now. However we will not dive into the depths of styling svg because as it turns out, you can even select the svg elements themselves and start styling these. So you could go in there and start styling the colors the svg lines and so on by overwriting that fill color here,this is something a bit more advanced and more related to svg than CSS.

* Now we got that key feature image part here and let's simply add a padding in there of let's say 20 pixels. Now if we do that and we reload, this looks much better

```css
.key-feature__image{
    background-color: #ffcede;
    width: 128px;
    height: 128px;
    border: 2px solid #242424;
    border-radius: 50%; 
    margin: 0 auto;
    padding: 20px; /* to adjust svg icon*/
}
```
* Refer other SVG course for some other better understanding..
