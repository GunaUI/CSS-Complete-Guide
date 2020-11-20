# CSS-Complete-Guide

## Section 17 : Writing Future-Proof CSS Code

###  CSS Modules & Their Working Groups

* CSS is split up into modules. You got a module on media queries, you got a module on selectors, you got a module on animations and so on.

* you'll find a link to this page which gives you an

overview over the different working groups that work on new CSS features, sorted by these modules

basically.

Now on this page, you see which groups exist and also what the current state of the results of that group

is,

for example if it's a recommendation, which means browsers should implement that and they regularly do

that or if it's just a draft which browsers may implement but which they don't have to yet or which

is not necessarily recommended to them yet.

So you can scroll through that list and find out which groups exist and you can always click into one

of these groups, like CSS transitions and read more about their work, what it's all about, what they

plan, which syntax they'd like to see and so on.

This can be really interesting but this also is something you don't regularly do, unless you work for

a browser vendor.

This is a nice place to dive deeper if you really want to go super deep into a specific feature

but generally, this is just what the browsers have to implement in the end and what MDN, the Mozilla

Developer Network which we referenced quite a bit in this course, typically summarizes and makes more

digestible.

Still, this is the original work or these are the summaries, the protocols of the original work groups

and this can be a nice place to dive deeper in case you're interested.

* you could refer https://www.w3.org/TR/#tr_Cascading_Style_Sheets__CSS__Working_Group

### Using CSS Variables

*  CSS variables. Now what does this mean?

* Consider this case; we get CSS code where we get different selectors and let's say they share some common functionality, like a color which you reuse. This could also be some unit though, this could be something like 1rem which you use again and again, CSS variables are a relatively new feature which allow you to put that reused value into a variable which you defined with this strange looking syntax, --my-color. Now this is a property which kind of exists, the browser understands that this now should become a custom variable and then you can reuse that variable with that var function. (Refer: future1)

* Also note that the variable here is defined in that root pseudo selector, which in the end refers to the entire document or to every element, you could also place it on a specific element selector but then this variable would only be usable within that selector.

* So with the snippet you see here, you define it once and you can use it everywhere in your document, everywhere on your page.(Refer: future1)

* And there also is a special syntax which you see at the very bottom where we provide a second value, this is a fallback value in case the variable is not defined yet.(Refer: future1)

* Be aware, this is not a fallback value for browsers which don't support variables because they won't even understand the var function, this really is just a fallback for cases where you reference a variable and for some reason, it isn't set yet maybe because you forgot to import some other file where you defined it, then this fallback value will kick in, not in browsers which don't support variables.

* Speaking of browser support, if we check caniuse for CSS variables, we see that browser support is generally pretty good but Internet Explorer doesn't support it at all.

* Now let's see them in action in our project. Back in our project, if we open the shared.css file, we see a couple of values that we repeat all over again.

* Well actually, I'm not going to replace everything with CSS variables, this is something you can definitely do though but I want to focus on colors. Be aware that you could use them for units like rem and so on too

* but we can already see that we reused colors, for example in that shared.css file if we scroll through it from top to bottom, this red color, we're using it twice here already.

* and if we scroll down further, we see that we also reuse that green color, so here, we can also see that.

* So it sounds like a good idea to put that green color and that red color into a CSS variable,let's do that. All the way at the top, even above that universal selector,

```css
:root {
  --dark-green: #0e4f1f;
  --highlight-color: #ff1b68;
}

.main-nav__item a,
.mobile-nav__item a {
  text-decoration: none;
  color: var(--dark-green); /* variable */
  font-weight: bold;
  padding: 0.2rem 0;
}

.mobile-nav__item--cta a {
  color: white;
  background: var(--highlight-color); /* variable */
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

```

### Understanding & Using Vendor Prefixes

* Now let's stay in that world, obviously our users are able to use different browsers and different browsers implement new features differently and at different speed.

* Once a certain feature reaches recommendation state, you saw that earlier in this module, it should be implemented in all browsers equally

* but until then, each browser might not implement it or implement some of its features or maybe implement some features differently than other browsers do, simply to try how it works, how the users of that browser use that feature and so on.

* For this, we got vendor prefixes.

* This is a mechanism which allows browser vendors to implement an upcoming feature in an early version without breaking the feature when it finally gets released,

* here's an example, flexbox. We add it by setting display to flex and nowadays, the support for this is pretty good.

* A few years ago when that standard was brand new and in very active development, browsers started to implement flexbox step-by-step by implementing prefixed versions of the flex value,

```css
.container {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
}
```
* Now the interesting thing here is these are special values which only work in some browsers, for example webkit box works in older versions of Safari, webkit flex in newer versions, MS flexbox in Internet Explorer and Edge.

* So these values are not understood by other browsers but they don't need to understand it because they either already implement the flex value or their own prefixed version.

* Why do we use these prefixes at all, why don't they just all use flex?

* Because if the standard then changes or becomes finalized and they therefore all implement the same specification, then if they suddenly overwrite the flex value to now work different than it used to be, a lot of websites that were early adopters of that technology would get broken. Therefore they have their early adopter implementation, the prefixed version which they don't change even if the standard changes or becomes final and then they implement their final version once that is the case.

* So now they got different implementations and this allows you a developer to use these features ahead of time, it also ensures that your webpage won't suddenly break and it also, that's another advantage, allows you to safely implement a certain feature which will still work, at least to some extent, even in older browsers because let's say an older version of Safari already supported flexbox with webkit box but didn't support it with display flex.

* Well, if you also provide that vendor prefix, it will understand this, it won't understand the other values for display but it will then just ignore them, that's how the web works and therefore, you can still use flexbox even in that older version, even though it doesn't support flex yet.

* So vendor prefixes are really great as they allow us to implement new features ahead of time and even support older browsers.

* Now let's see that in action on our website, how would we implement such prefixes? It's actually recommended to implement prefixes for flexbox, so let's do that.

* Let's search for a flex value in our shared.css file, like here and the correct way of implementing this would be to specify the display property a couple of times and the final standard, the default one should be at the very bottom, 

* because your code is parsed from top to bottom, so they will start with the older versions and that's important so that the older versions don't overwrite the newer ones and if they understand the newer one, it will just overwrite the older ones which they also might have understood, otherwise if they don't understand the newer one one but an older one they'll use that. If they don't understand any of these, well it just won't work.

```css
.main-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  flex-direction: column;
  align-items: center;
}
```
* This is the correct setup, this one overwrites the legacy versions, so if a browser understands the new one, it will use that one, if it doesn't, maybe one of these can kick in.

### Which Prefixes Should You Use?

* So we had a look at these vendor prefixes, the question then of course comes up is, which prefix should you use? Refer : http://shouldiprefix.com/

* this gives a nice indication, it also links to caniuse which you also should use to find out where prefixes are needed, so if we quickly check the flexbox page on caniuse, you can click show all to also see all browser versions and there for example for older Chrome versions, you'll also see that there is partial support with the webkit prefix and the same is true for other browsers too.

* So here you can see which prefixes might be needed to support these older versions and that should I prefix page is of course a really great source to get a quick overview. There, you see which features do not need prefixes and which ones should be prefixed and then you even see the syntax you should use, so this is a really valuable resource which helps you write code that works in more browsers.

* However, clearly it is very cumbersome to check this for every feature you add and for manually adding all these prefixes, thankfully there is a tool for that, auto prefixer. Refer : https://autoprefixer.github.io/

* This is a tool which automatically fetches a list of properties you should prefix and then adds these prefixes to your code, so it simply runs over your code and adds the prefixes and you specify which browsers you want to support and based on that list of browsers you want support, it does the prefixing. So let's see this in action.

* If you scroll over that, you'll see multiple ways of including it, you can include it in your gulp or a webpack workflow for example, this is the way it's used most often by the way but if you don't have such a tool or workflow and we don't have one, you can also just google for CSS auto prefixer again and you'll find auto prefixer online. Now if you open this page, you can just paste your code into this page. Refer : https://autoprefixer.github.io/

* and it would then, on the right, give us the prefixed version of that code. So as you see, it automatically added a lot of prefixes, for example for grids and so on and now we could just grab that code on the right and put it back into our code or maybe even better than that, into a separate version, 

### Detecting Browser Support with @supports

* We saw vendor prefixes, sometimes you can't implement a vendor prefix for a certain feature though or maybe you can implement vendor prefixes but some browsers which your users might use don't even support these prefixed versions.

* So some features simply aren't implemented in some browsers, now the supports query can help with that.

* It looks a bit like a media query but it's @supports and the condition simply is a property value pair where you can simply check if that property and also that value, that's important, the value is not ignored, if that is supported by the browser.

* So in the end the browser simply checks, can I read and use that? If the browser can't, then it will not execute the code between the curly braces, if it can, it will do so. (Refer : future2)

* This is of course especially useful if you've got a bunch of code which depends on one feature, for example you want to use the grid and obviously the grid itself depends on the grid being available but maybe you've got some other code too which assumes that everything is positioned in a grid, maybe your font size is adjusted accordingly or if some elements get a width of 100% so that they look good in the grid. Well, all of that is something you don't want to apply if the browser doesn't support it and therefore, a supports query can be really useful. (Refer : future2)

* Let's see how it works in our code. Back in our code and here I'm in the regular shared.css file

* what could we check with our supports query? Well obviously, we could check if we can really use a grid. Now the good thing about our page is even if a browser doesn't support the grid, it will still look good because for example, our main layout is simply a one column grid, so if the grid is not supported, elements are just positioned beneath each other.

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding-top: 3.5rem;
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-rows: 3.5rem auto fit-content(8rem);
    grid-template-areas: "header"
                         "main"
                         "footer";
    padding-top: 0;
    height: 100%;
  }
}
```
* then this code will only run if the grid is supported. So this is one example of how we could use the supports query Please also be aware that you can use multiple conditions, you can use 'and' and 'or' or also 'not', so something like 'and not' to create more complex queries.

* This allows you to build more complex supports queries, most of the time, you just need simple ones like this, so that you are able to use some Next-Gen feature if the browser supports it but that you provide a decent fallback otherwise and the typical setup is of course that you to define the fallback first and overwrite it with your better solution if the supports query does allow access.

### Polyfills

* We stay in the world of things not working in a browser, let's talk about polyfills,

* what is a polyfill? A polyfill is a Javascript package which enables certain CSS features in browsers which would not support it otherwise.

* Now obviously, we learned about vendor prefixes, which help us support older browsers and about the supports query which helps us implementing nice fallbacks.

* Sometimes, there is no prefix we can use because some browsers simply doesn't support a feature, not even with a prefix
and we also don't want to implement a fallback, we want to use that cool feature which we can use in modern browsers too.

* For some CSS features, so-called polyfills exist. These are Javascript packages which you can download and import into your code and they will simply parse your CSS code and then style your page accordingly with some Javascript logic,

* so they basically implement a certain feature by falling back to other CSS features and kind of replicating that look you want it to have.

* Now polyfills are not available for every CSS feature though, for example for the grid, there are no polyfills because the grid uses some techniques that simply can't be replicated easily with vanilla CSS and Javascript but for some features, polyfills are an option.

* There is something important to keep in mind though, polyfills come at a cost, it's a Javascript package you download, you add and you import into your HTML file. Therefore, your users have to download it and then it will execute, it will parse the DOM, it will manipulate some styles, these all impacts the performance of your page.

* So especially for bigger polyfills because some feature might be very complicated to replicate, you should really consider if implementing a fallback, with supports or something like that, isn't a better solution.

* If you come to the conclusion that it isn't, polyfills are a great tool but you should really use them with care and use them rarely.

* Now to give you an idea about what could be polyfilled when it comes to CSS, for example rems. Older browsers don't support rem, there is a polyfill which you can download and import which will essentially just convert all your rem declarations to pixels which are supported by older browsers too and there are a couple of such polyfills as you can see.

* There are also polyfills for background image related properties and so on. So if you need that feature and you need to support such old browsers, definitely consider using such polyfills.

### Eliminating Cross-Browser Inconsistencies

* So as you probably guessed by now, developing for the web isn't trivial because we need to support many browsers, at least in some of our pages we need to do that.

* Another problem we face besides some features not being supported in some browsers are cross-browser inconsistencies, this means that different browsers use different defaults.

* You remember this default styling some elements get? The default font size of h1 tags, the default font family which gets used, things like that, browsers implement that differently. 

* For some elements, we might have different margins or paddings, different box sizing behavior, that box sizing is set to border box in some browsers for some elements by default for example and so on.

* This is not necessarily bad, different browsers offer different defaults and some users might pick a browser because of some of the defaults it offers but some defaults are also annoying and you want to have a consistent look of your webpage across browsers too.

* Therefore, you can implement some reset libraries like normalize.css, which is a CSS package you add as one of the first imports or as the first import in your HTML file, which basically overwrites some of the global browser defaults.

* So for example, this could set box sizing to border box for all elements or you do that manually of course.

* For example in our code, in the shared.css file, we are doing such a reset with a universal selector where we set box sizing to border box.

```css
* {
    box-sizing: border-box;
}
```
* This is one of the things normalize.css or other packages like it might do for you, you can of course do it on your own.

* Now very important to keep in mind, if you use a package like normalize.css which resets a bunch of things, that of course is additional code your users need to download and therefore, this increases the size of your page so to say.

* Still, it might be worth it but there are a lot of arguments these days that maybe it's just better to do that box sizing reset because that really is annoying if it doesn't work like this and not reset anything else but simply overwrite things, like font sizes, like font families or colors if you work with that specific element which actually is affected

* because you could also argue that packages like normalize.css reset a lot of styles which might never be used in your page because you never use that element which it resets.

* For example if you never use a select element, it doesn't matter to you if the styles for it are reset globally or not.

* So keeping in mind that resetting some features makes sense and that you can do it manually with the star selector or by using packages is definitely something which is important.

### How to Name CSS Classes

* how should we actually name our class names?

* the class selector is probably the selector you used the most often because it allows you to create reusable styles and even if you only apply a class to one element, you can give it a really expressive name which makes it far easier to understand your CSS code.

* Here are some dos and donts when it comes to class names.

* Dos :  use kebab case, so this is class name style where you use lowercase characters and separate words with dashes. It's important because CSS is case insensitive,

```
Kebab Case: user-login-count
```

* Don'ts : so if you use snake case for example, where you have one word and separate the words with uppercase characters this is not something CSS understands, for CSS, snake case with a capital C is the same as snake case with a lowercase c.

```css
Snake Case: .user_login_count
Snake Case (All Caps): .USER_LOGIN_COUNT
```
* So if you got two classes with the same name and you think they are different, they aren't and this can lead to strange behaviors.

* Additionally since you can't use this snake case version, you would have to use really long words without any separators which are hard to read,so use kebab case, it's easy to read, easy to understand and the browser understands it too.

* Do : Another important hint, name your classes by feature, for example.

```css
.page-title
```
* It's very clear what this style will do, we don't know which element your page title is, if it's h1, h2 or a div but this doesn't matter, we know that this probably will refer to the page title.

* Don't :  name your classes by the style they're going to apply, for example title blue is a really bad name.

```css
.title-blue 
```
* Yes, we can guess that this probably will color the title with a blue color but we can see that by the properties and values you then use in that rule anyways and if you ever change the color of your text to be red, then you probably have to rename your class. So this is a really bad class name, name them by feature instead. (Refer: future3)

* I actually try to follow a convention which is called Block Element Modifier styles, BEM. http://getbem.com/introduction/

* This is a convention which makes sure that we name our classes in a uniform and consistent way across our project and that we also prevent clashes because as you can imagine, the bigger your project gets, the higher the chance of you reusing some class name unintentionally and all of a sudden, you might overwriten the style somewhere else in your page without you noticing it at first.

* Therefore BEM enforces a certain way of naming are classes which should minimize this risk.

* You obviously start with a dot in the selector but then you have the block portion of the name, two underscores, the element portion, maybe two dashes and then an optional modifier. ".BLOCK__ElEMENT--MODIFIER"

```
.menu-main__item--size-big
```
* The block here is our main menu, hence menu main, you could of course also name this main menu, we select a single item in that main menu and we select an item which is very big, which should receive some special style because it's big.

* The last part, the modifier kind of goes against this rule of not naming classes by style but in the end, this is not the entire class name, the whole thing here is the entire class name.

* Here's another example, we got a selector which selects a button which has no special element, so all buttons but which also has the success modifier.

* Now mastering this is something which is very hard obviously and you can probably flame me for some of the class names used here but if you follow this pattern in general, you already gain a lot.

* These classes look a bit ugly but they really help you prevent clashes of class names and once you get into the idea of these class names, they also help you understand what a certain class selector is probably referring to.

### Vanilla CSS vs Frameworks

* Once you dive deeper into CSS world, you'll find out that so-called CSS frameworks exist, things like Bootstrap.

* Now what are they and when should you use them? We have vanilla CSS of course, with that I mean CSS code we write with the base features. We write all our styles and layouts on our own if we don't use an extra package.

* with extra packages, I mean things like component frameworks, for example Foundation or Bootstrap 4.

* often they also come with Javascript portion for some interactive elements but in general, they are packages of code which give you prestyled components and utility classes.

* There also are utility frameworks like Tailwind CSS which are also giving you some help, they offer you some styles in which you can build up on, they give you some utility classes but they don't give you prestyled components, they don't do all the work for you.

### Useful Resources & Links

* CSS Modules & Working Groups: https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

* CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

* Vendor Prefixes: https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix

* Which Vendor Prefixes should you use? => http://shouldiprefix.com/

* @supports: https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports

* BEM in Detail: http://getbem.com/introduction/

* An introduction to Bootstrap 4: https://academind.com/learn/css/bootstrap-4-tutorial/

* CSS Polyfills: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills