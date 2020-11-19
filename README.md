# CSS-Complete-Guide

## Section 16 : Transitions & Animations in CSS

### Understanding and Applying Transitions

* Transitions are a kind of built-in animation you could say. Transitions are added by adding one property, transition and specifying which other property, like the opacity or the position of an element should be watched and should be animated if it changes.

* So here's an example; we got a box and we actually want to move that towards us with transform and translate set let's say, then we could animate that change (Refer : animation1)

* We tell the transition property, and we'll apply it in practice in a second,  which properties to change, if there should be a delay, how should animate it, so over which time and how fast it should move through that time. So should we start fast and end slow, start slow and end fast, these are all things we can define.

* let's dive into this in a concrete example. In our main.css file, we got that modal selector, now this is obviously responsible for that modal we got on our page. Right now, we're always using display none to not show it, let's actually change this and let's make sure we don't show it by adding opacity zero instead, opacity zero simply makes it invisible, the difference is it's now still part of the document flow and opacity, unlike display, is a property we can watch with a so-called transition.

```css
.modal {
  position: fixed;
  /* display: none; */
  opacity: 0;
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

* So opacity zero is how I now want to hide the modal, let's also add a transformation and let's use translateY to move it on the y-axis with -3rem as a value, so this will move the element up by 3rem.

```css
.modal {
  position: fixed;
  /* display: none; */
  opacity: 0;
  transform: translateY(-3rem); /* transform translateY*/
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
 * Now you might ask, why am I doing this, we're not seeing it anyways? Well you'll see why and of course you could always move the element up with top but transform is what you should use if you plan on animating that movement

 * because it is watchable with transition and it's hardware accelerated, it's awesome for animations or for transitions to be precise, so let's add these two properties to modal.

 * Now the idea is that we change these two properties with Javascript.  You remember, earlier, we added code to show the modal when we click on select a plan by simply adding that open class.

 * Now in that open class if we have a look at this again, we can find it in the shared.css file, we set display block to important.

 ```css
 .open {
     display : block !important;
 }
 ```
  
  * Now this doesn't really matter anymore because right now for the modal at least, we don't use the display value anymore but we can also still leave it. More importantly, what I want to do here is, I want to set the opacity to one here and use transform with translateY and set it to zero.

```css
 .open {
     display : block !important;
     opacity : 1 !important;
     transform: translateY(0) !important;
 }
 ```
 * Now this simply sets it back to its original position as defined in the document flow.So when we open the modal, it should be moved to that place.

 * let's go back to our project and reload and now if I click choose plan, we see the modal again. Just as before, there is no animation or anything like that at all (Refer : animation2)

 * but now, we can set up a so-called transition. For this, we go to the main.css file and we add a new property which is named transition. 

 * Now the transition property is able to take a couple of values, to be precise, you can define up to four values here, a list of four values.

* The first one is absolutely required and that is, which property do you want to watch? You can watch all with the all keyword, then the transition will be played whenever a transitionable property changes

```css
.modal {
  position: fixed;
  opacity: 0;
  transform: translateY(-3rem);
  transition : all ;
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

* but here, I could also enter opacity and transform as values, so two values separated with a comma in this case,

```css
.modal {
  position: fixed;
  opacity: 0;
  transform: translateY(-3rem);
  transition : opacity, transform ;
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

* if you have more than one value, you need to separate them with a comma. You then also define the duration over which you want to play an animation when one of these properties changes or when a property changes and you define that duration directly after the property you're watching

* so let's say .5 seconds after opacity. By the way, instead of .2s for seconds, you could also write 200ms, this is all supported.

```css
.modal {
  position: fixed;
  opacity: 0;
  transform: translateY(-3rem);
  transition : opacity 0.2s, transform 500ms;
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
* let's also transform this over let's say 500ms too, So please note that you set different durations for the different properties you're transitioning over. Of course if you just want to animate one, you would just animate one by simply removing the second one, if you animate more than one, you need to separate the lists with commas though.

* So this is now defining what we animate and over which time we want to animate or transition to that new value and CSS will automatically interpolate the value you're coming from,

* so opacity zero translate -3rem to the value you're going to, so opacity 1, translateY is 0.

* With that, we can already save this and now reload our page and now if I click 'choose plan', you actually see there's some nice animation and there also is the animation if I close it because it automatically reverses this or plays it in the other directions so to say. 

* In the end, what it does is it simply transitions smoothly from your starting value to your end value and this is a very easy way of adding a nice looking animation.

* you can also add a timing function which allows you how fast it should go through that duration. It'll always take 200ms but you can tell it to start fast and end slow with ease out,

```css
.modal {
  position: fixed;
  opacity: 0;
  transform: translateY(-3rem);
  transition : opacity 0.2s ease-out, transform 500ms ease-out;
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
* now it will become slower towards the end or with ease-in for example, it'll start slower and end faster.

* Now last one but not least, you can also set a delay, you simply add a fourth value like one second, this would mean it will start one second before it starts with that transition.

```css
.modal {
  position: fixed;
  opacity: 0;
  transform: translateY(-3rem);
  transition : opacity 0.2s ease-out 1s, transform 500ms ease-out;
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

* So now if I click the button, nothing happens for one second and then it plays this animation, for some use cases, this can also be helpful,

### CSS "transition" Property Deep Dive

* The transition  property is used as see in the previous video:

* transition: WHAT DURATION DELAY TIMING-FUNCTION; 

#### Example:

```css
transition: opacity 200ms 1s ease-out; 
```
* Can be translated to: "Animate any changes in the opacity  property (for the element to which the transition  property is applied) over a duration of 200ms. Start fast and end slow, also make sure to wait 1s before you start".

* Instead of this shorthand, you can also specify the four individual properties:

* 1) transition-property  (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property => transition-property: opacity; 

* 2) transition-duration  (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) => transition-duration: 200ms; 

* 3) transition-timing-function  (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) => transition-timing-function: ease-out; 

* Possible timing function values are: ease-out , ease-in , linear , cubic-bezier()  and a couple of others. See the above link as well as the next lecture for more details.

* 4) transition-delay  (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) => transition-delay: 1s; 

* You can read the official MDN article on CSS transitions here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

### Working with Timing Functions

*  We can think of the timing or the duration of the transition as a function. 

* At the beginning, no time passed and that transition also has a completion state of 0% but as we play the animation, it transitions from 0% completion to 100% over the given time and for this specific function here, it temporarily even has a higher completion in the end completion. This is also possible, you could have functions where you for example one to change the scale of an element and in-between, you actually have a bigger scale than at the end, to have a bumping effect. This is something you can easily build with CSS animations

* Now regarding the transition timing functions, if you google for CSS timing functions, you'll find a really helpful site easeing functions cheat sheet, easings.net and there, you'll find a lot of values or timing functions and if you hover over them, there's also a demo animation playing showing you how this actually will look like. Refer : https://easings.net/

* Refer : https://easings.net/#easeInCubic

* This allows you to enter your own timing function with four parameters defining that function, this essentially defines a function of time and completion and sites like this are really great to create such a timing function.

*  Even better, in the Chrome developer tools, if you inspect your modal here and you inspect the properties, you can see that timing function here and there's this button. You can find that strange button next to each timing function, to any timing function you have. If you click it, you can actually create your timing function in the Chrome developer tools by playing with these handles. Generally, the steeper it's at the beginning, the faster it starts and the slower it ends so to say.

### Transitions & "display"

* Now with the basics of transition set, let's transition the backdrop too. 

* Now there, we'll face a special case which I want to show you. The backdrop which is selected with this backdrop class selector still is shown by setting display none to display block and this happens because we add the open class to the backdrop too when we select the plan for example.

* Now the problem we face is that in that open class, we obviously changed the opacity and display to block and now we could think that we simply go to the backdrop and also don't use display none to hide it but opacity zero instead.

* Then we could add a transition where we watch the opacity and maybe over 200ms or .2s, we animate with a linear timing function so that we always move at the same speed, this is an approach we could take.

```css
.backdrop {
  position: fixed;
  opacity : 0;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition : opacity 2s liner; 
}
```
* If we now reload the page, we notice that we can't click choose plan anymore. Now do you know why that happens?

* This happens because the backdrop now only is invisible, it's not not there. Now since it has a set index of 100, it's actually in front of all the other elements even though we can't see it, that is why we can't interact with any element on our page, clearly an awful user experience.

* Now of course the fix is easy, right? We got our open CSS class selector here and we still set the display block there, so all we got to do is go to that backdrop again and besides using the opacity, we can use display none together with the opacity.

```css
.backdrop {
  position: fixed;
  display: none;
  opacity : 0;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition : opacity 2s liner; 
}
```

* With that, we really remove it from the document flow and therefore if we reload, we can interact again. However, if you watch closely, you might notice that the backdrop isn't really animated and this becomes even clearer if we temporarily increase that to two seconds of a duration. Now if we go back and click this plan, this doesn't look like a two second transition to me.

* The reason for this is some special behavior. If you change display, first of all you can't transition that display change, so watching display won't work and second of all, if you change the display from none to something else or the other way around, then your transition isn't going to kick off even if you're also changing some other property which normally would be animatable or transitionable, this is super important to keep in mind.

*  Now if you still want to ensure that this works in this case, you would have to use some hacky workaround where in Javascript, you actually first of all set the backdrop style to block, backdrop style display is set to block and also the other way around for closing it, so in all occasions where we actually have remove the open class, we set that to none and that alone isn't enough,

* so this isn't all we have to do, instead we now also have to delay the start of the code where we add the open class, we can do this with the Javascript set timeout method, there we pass a function which is executed after a given timeout which can be very short, like 10ms, the 10 is a second argument means 10ms. So after 10ms, this function gets executed and there we actually should attach that open class. So now we can copy that and also wrap that backdrop, remove listener with it. So here we want to remove that after 10ms

* what this does is, it ensures that we first of all set display to none or block, whatever we need and then as a second step, we change that, so we add this class or remove it.

* This ensures that CSS doesn't change all the properties in one step and therefore omit the transition but that it actually first of all changes the display which is the crucial part and then it changes the other properties and hence also plays our transition.

* So let's also add it up here where we have backdrop class list add open and with these changes in place, now we should actually be able to reload our page and now we see a nice transition here. 

* Refer : index.html, shared.css and shared.js

```js
// shared.js

var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});
```

```css
.backdrop {
  display: none;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s linear;
}
```
* Now of course, that's way too slow, so now we can speed that up to not use 2s but .2s for that opacity transition and now we get a transition on the backdrop too. Definitely a bit hacky but a way of making this work if you need such a behavior and I wanted to share this with you for that reason

* This has one important implication, for that closing function, the timeout, the delay for which you want to wait has to match the delay of your transition or the duration of your transition I should say. 

* So since our transition takes 200ms, here that opacity transition on the backdrop, we need to execute that function which removes the element from the document flow by setting display to none after this 200ms

* and that of course is a bit inconvenient because this means whenever you change the duration here on your transition property, you also need to change it in your Javascript code. This is still a workaround you can use, often thankfully, you don't have a set up where you require this behavior, if you do require it, keep this approach in mind.

### Using CSS Animations

* We had a detailed look at CSS transitions, which make it very easy to animate the transition of a CSS property from one value to another,

* We had a detailed look at CSS transitions, which make it very easy to animate the transition of a CSS property from one value to another,

* so it's still about animating things but with way more control over the animation.

* So if we have a block and we want to move to a bigger block, maybe with a different color, we can of course use a transition but if we want more control, like some in-between step, CSS animations are really what we're looking for.

* In CSS animations, we define so-called keyframes and we got full control what the style of an element is at a given point of time (Refer : animation3)

* For this, I'm back in our project and I want to animate that start hosting call to action button in the top right corner

* Now that button's style is defined in the shared.css file, we can search for CTA here to find our main nav CTA link here and I want to play an animation on that button, right when the page loads, I want it to wiggle around, so to rotate a bit up and rotate a bit down.

* Now with a transition, that's hard to do because it should wiggle, it should move in both directions and it should also stop after a given time but until this it should just iterate between moving up moving down.

* Transition is not really what we're looking for in this case, an animation is what we need and an animation always starts with you defining some keyframes, these are the steps of the animation you want to go through.

* You define keyframes in a CSS file by using @keyframes,so just as you used @media and so on before, @keyframes is a special expression. You define a set of keyframes which you can later use in a CSS animation and you have to give that set a name, the name is totally up to you, can be wiggle for example.

* Now you then add curly braces and in there, the most basic animation simply has a from value, so you add the from keyword and then curly braces and then the to keyword. This essentially allows you to define two keyframes, the starting state and the ending state. 

* Now I want this to rotate, so let's add a transform property here and then maybe rotate set zero, this is where I want to start, so I want to start with the rotation it has initially, which is not rotated at all. Please note that there is no CSS selector in here, just the CSS property, this property will later be applied to any element which receives that set of keyframes as an animation.

* The target state maybe is that we have a transformation of let's say rotate set of 10 degrees, so moved up a little bit.]

```css
@keyframes wiggle {
  from {
    transform: rotateZ(-10deg); /*start keyframe option*/
  }
  to {
    transform: rotateZ(10deg); /*end keyframe option*/
  }
}
```

* Now important, you can of course use any CSS property here, not just transforme, you can also change the text color with color or the background or whatever you want to do, not every property is animatable but you can still change it,it might just jump to the next value immediately

* because what happens behind the scenes is that for a CSS animation, CSS will still automatically generate smooth transitions between your starting and target value,

* it's way easier to define like five different properties that should be animated than it is with transitions, here you simply add them one after each other. So here we get a simple animation though, just one property which we change and just two states; starting and end state.

* Now with that keyframes set defined, let's use it as an animation and please note that we say nothing about the duration of the animation here, just where we want to start and end.

* So let's move up then and let's find our navigation items, here we got the call to action button, Now I'll add a new selector and for main nav item CTA, so only in the main navigation for the call to action button, I want to add that animation by adding the animation property.

```css
.mobile-nav__item--cta {

  animation: wiggle 200ms 3s 8 alternate; /*name duration timing-function delay iteration-count direction */
}
```
* and now after three seconds, we actually see that our button starts wiggling here. Now this didn't look like eight times because the alternate swing actually also counts as an iteration,so we got four iterations in each direction. Besides alternate, 

* If we now reload, here after three seconds, we can see now it's way more bumpy because now what it actually does is it plays the keyframes in reverse, so it starts with the end state and then moves back and you also got alternate reverse,

* One interesting other value you can set for animations is filled state. Now the fill states simply defines, should the properties set during the animation, so in our case the transformed property and its value, should that be kept when the animation is finished or not? The default is that it's not keeping that,

* you can also decide that you'd want to keep the starting state which can differ from your normal elements state by the way.

* Here it's the same but of course, you can have an element where you add an animation and the starting state is for example that it has a blue background color,


* so it immediately starts the animation with that but by default, the element could have a green background color, so then the starting state of the animation would differ from the default state of the element. Anyways you can tell the animation or CSS which values to keep with the fill state which is added as another value to that animation shorthand here and that can be forwards to tell it to keep the final result

```css
.mobile-nav__item--cta {

  animation: wiggle 200ms 3s 8 forwards; /*name duration timing-function delay iteration-count direction */
}
```
* but if we remove alternate, you will see that it actually will finish in a rotated state because now it has this bumpy look but it actually finishes rotated because we specified forwards which tells it 'please keep the final property and values you have in the last keyframe here.'

* I actually want to have none, so we can set none here, we don't have to do that though, none is the default value.

```css
.mobile-nav__item--cta {

  animation: wiggle 200ms 3s 8 none; /*name duration timing-function delay iteration-count direction */
}
```

### CSS "animation" Property Deep Dive

* The animation  property is used as see in the previous video:

* animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE; 

#### Example:

* animation: wiggle 200ms 1s ease-out 8 alternate forwards running; 

* Can be translated to: "Play the wiggle keyframe set (animation) over a duration of 200ms. Between two keyframes start fast and end slow, also make sure to wait 1s before you start. Play 8 animations and alternate after each animation. Once you're done, keep the final value applied to the element. Oh, and you should be playing the animation - not pausing."

* Instead of this shorthand, you can also specify the individual properties:

* 1) animation-name  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name => animation-name: wiggle; 

* 2) animation-duration  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) => animation-duration: 200ms; 

* 3) animation-timing-function  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) => animation-timing-function: ease-out; 

* Possible timing function values are: ease-out , ease-in , linear , cubic-bezier()  and a couple of others. See the above link for more details.

* 4) animation-delay  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) => animation-delay: 1s; 

* 5) animation-iteration-count  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) => animation-iteration-count: 8; 

* 6) animation-direction  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) => animation-direction: alternate; 

* 7) animation-fill-mode  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) => animation-fill-mode: forwards; 

* 8) animation-play-state  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) => animation-play-state: running; 

* You can read the official MDN article on CSS animations here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

### Adding Multiple Keyframes

* let's now add another keyframe though and for that, I'll generally change the notation. Instead of from and to, we can also use percentage values here.that's the same as from and to

```css
@keyframes wiggle {
  0% {
    transform: rotateZ(-10deg); /*start keyframe option*/
  }
  100% {
    transform: rotateZ(10deg); /*end keyframe option*/
  }
}
```
* but now we can add as many in-between steps as we want simply by adding another block, for example with 50% but you can also use 10, 15, whatever you need and now you can define which state your animation should have when it's halfway done.

```css
@keyframes wiggle {
  0% {
    transform: rotateZ(0); 
  }
  50% {
    transform: rotateZ(-10deg); 
  }
  100% {
    transform: rotateZ(10deg); 
  }
}
```
* So now I'll actually start at zero, then halfway through the animation, we'll be at 50% and by the end, we'll be at 100%. Now we got three keyframes and therefore way more control over our animation.

* Now if we go back to our animation property, where we add it to an element, we still have wiggle, we still maybe have that duration, maybe we increased it a bit so that we can see that animation a bit better, we still have the delay and the iteration count maybe.

* now you'll see we have a way better wiggle effect because now we have that in-between step which actually looks way better than using that alternate mode.

* One thing that's good to know is that you can still add a timing function though, you can still add ease out and by the way, the order of these values here doesn't really matter except for duration and delay,since both use seconds or milliseconds, here the duration should come first.

```css
.mobile-nav__item--cta {

  animation: wiggle 200ms 3s 8 ease-out none;
}
```
* isn't it strange to specify ease out or any other timing function if you have perfect control over the way the animation plays?

* Well the timing function simply is there to decide how the movement between the keyframes should be animated because if you go from transform rotate set zero to transform rotate set -10 degree, this change of course has to be animated and actually, this works exactly as the transition did.

* So here, it will simply transition from zero to -10 degree and that transition happens over half the time of your animation but that time there, between these two keyframes, this is now affected by the timing function.You can specify linear or any other function you want, like ease out in our case here.

* So with that if we reload, we might not even see a big difference here because that's really hard to spot but now this is actually animating with an ease out timing function between our keyframes steps.

### Adding Animations to our Customers Page

* let's make sure we can actually flip a customer if we hover over him

* For that, I'll go to my customers.css file and first of all, I'll create the keyframes for the animation, just as we learned it, that's always the first step.

```css
@keyframes flip-customer {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(160deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
```
* I'll actually create a new selector. Our customers have an ID, customer one has an ID of customer-1. So I'll use that ID selector here, maybe here, doesn't matter, customer 1 and listen to a hover or use that hover pseudo selector but then I actually want to animate a nested element, I want to animate the image container, I want to flip the image, not the entire customer

```css
#customer-1:hover .testimonial__image-container {
    animation: flip-customer 1s ease-out forwards;
  }
```

* Now if we save that and we reload the page, you can already see it, if we hover over the customer, it flips but the skewness is messed up as you can see. 

* skew() gets removed because we override the transform property during our animation

* So this is something we can fix by going down to our keyframes again and now by animating more than one property, I also want to animate the skewness and since this also is a transform value,

```css
@keyframes flip-customer {
    0% {
        transform: rotateY(0) skew(20deg);
    }
    50% {
        transform: rotateY(160deg) skew(20deg);
    }
    100% {
        transform: rotateY(360deg) skew(20deg);
    }
}
```
* Now on a mobile device by the way, you don't see this, you have to click on it to trigger that and then click somewhere else because there is no hovering on mobile devices of course.

###  Using JavaScript Animation Event Listeners

*  Now when using animations, there actually is a cool extra feature you can use in Javascript, you can listen to certain events connected to your animations, let's connect an event to our call to action button.

```js
var ctaButton = document.querySelector(".main-nav__item--cta");

ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation iteration', event);
})
```
* now the event I can listen to of course is a click but regarding animations, we get three interesting animations,

* let's reload the page and now you can see, we get a couple of logs here on the right. We got animation started, then we got a log for each iteration and we got animation ended

* and if you inspect the animation event, you'll find the animation name which was played, so your keyframe set essentially and a couple of helpful properties, like which element was animated and a timestamp.

* For each iteration, you'll find that same information but also useful things, like the elapsed time. Now as you see, the elapsed time of course increases by the same amount for each iteration step.

* This can be super useful if you want to time something in your Javascript code, for example if you want to start something once the animation ended because you got this hook here too of course. 