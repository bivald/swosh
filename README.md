swosh
=====

Swosh - a scroll based animation framework

This is a scroll based animation framework, as you scroll down on the site you trigger certain actions (move, scale, frame-by-frame). It was developed by Niklas Bivald. In it's full version (that is  currently uncleaned) it also supports iphone/android, responsive and advanced pre-loading (splitting over several domains to allow faster loading) as well as adaptive-speed depending on the power of your device. Currently the semi-cleaned version contain:

1. ANIMATION_FRAMES (animate a series of images, 1.jpg, 2.jpg, 3.jpg, 4.jpg)
2. ANIMATION_OPACITY (opacity, 0 to 1)
3. ANIMATION_ROTATE 
4. ANIMATION_POSITION (x, y)
5. ANIMATION_SIZE
6. ANIMATION_MOVEBG
7. ANIMATION_FIXED_START (experimental)
8. ANIMATION_FIXED_END (experimental)

You initiate load balancing for ANIMATION_FRAMES with:

```javascript
var hostnames = ['http://static1.example.com','http://static2.example.com','http://static3.example.com','http://static4.example.com'];
```

In the lite version you define the animations based on scrolling positions (in pixels from the top). In the full (uncleaned) version you define based on div positions and percentage (making it perfect for responsive design). 

Important
---------

While the JS library is stable and have been used live for over a year, it's a very rough draft. It is unclean, it is unstructured. It is however, optimized for speed. It is self-contained. 


Animation types
---------------

### Frame animation (ANIMATION_FRAMES):
- "name": For your own sake, name it. Usfull if you've enabled debugging
- "element": element links to the container element that the images will reside in. This should be the exact same size as the frames and have overflow hidden (important)
- "startAtPixel": Start the animation at this point, based on scrolltop
- "endAtPixel": End the animation at this point, based on scrollTop
- "startFrame": Usually 1 (translates into 1.jpg)
- "endFrame": Your last frame 
- "type": animation type, in this case ANIMATION_FRAMES

```javascript
{
name: 'frames',
element: '#element-that-contains that will contain the images',
startAtPixel: 900,
endAtPixel: 1400,
startFrame: 1,
endFrame: 76,
type: ANIMATION_FRAMES,
folder: '/wp-content/themes/iwww/static/cases/spotify/animation1/',
fileFormat: 'png',
data: {}            
},
```

### Position (ANIMATION_POSITION)
- "left": x position to animate to
- "start": object that contains the start values for the element. This is what it defaults back to on scroll-up.

```javascript
{
name: 'card1',
element: '#element',
startAtPixel: 1900,
endAtPixel: 2700,
left: -100,
start: { left: -20 },
type: ANIMATION_POSITION,
data: {}         
},
```

### Opacity (ANIMATION_OPACITY)
- "opacity": opacity to animate to
- "start": object that contains the start values for the element. This is what it defaults back to on scroll-up.

```javascript
{
name: 'Show',
element: '#animation',
startAtPixel: 1500,
endAtPixel: 1851,
type: ANIMATION_OPACITY,
opacity: 0,
start: { opacity: 1 },
data: {}            // This contains meta-data such as if the afterDone has been fired,
},
```



### ANIMATION_MOVEBG
```javascript
{
name: 'Scrolla ner i dator',
moveElement: '#case-ps-computer-screen-bg',
countFromElement: '#case-ps-computer',
startAtPixel: 1500,
endAtPixel: 2500,
y: -1000,
start: {y: 0},
type: ANIMATION_MOVEBG,
data: {}            // This contains meta-data such as if the afterDone has been fired,
},
```
### ANIMATION_FIXED_START
```javascript
{
name: 'Set position fixed',
moveElement: '#case-swish-computer',
element: 'body #fake-body',
countFromElement: '#case-ps-computer',
startAtPixel: 3000,
endAtPixel: 3001,
type: ANIMATION_FIXED_START,
data: {}            // This contains meta-data such as if the afterDone has been fired,
},
```

### ANIMATION_FIXED_END
```javascript
{
name: 'Set position fixed',
element: 'body #fake-body',
countFromElement: '#case-swish-computer-container',
startAtPixel: 4300,
endAtPixel: 4301,
type: ANIMATION_FIXED_END,
data: {}            // This contains meta-data such as if the afterDone has been fired,
},
```

### ANIMATION_ROTATE
### ANIMATION_SIZE
### ANIMATION_MOVEBG

Callbacks
---------
The library support callbacks, before and after an animation is called. 

```javascript
{
name: 'card1',
element: '#element',
startAtPixel: 1900,
endAtPixel: 2700,
left: -100,
start: { left: -20 },
type: ANIMATION_POSITION,
after: function() {} // Will be called after an animation is completed and you've scrolled down 
before: function() {} // Will be called after an animation is resetted after you've scrolled up
data: {}
},
```

Other
-----
1. I strongly suggest that if possible you use "-webkit-transform: translate3d(0, 0, 0)" to force-enable hardware acceleration

Debugging
---------
Set DEBUG to true in the js file. 

Init the framework
------------------

```javascript
	var animator  = new animatorHandler();
	animator.init();
	animator.preloadImages();
	animator.updateFrame( 1 );
	animator.startAnimations();    
```