import PIXI, {
  Application,
  Sprite,
  Graphics,
  BitmapFont,
  BitmapText,
  Text,
  TextStyle,
  Container,
  ParticleContainer,
  BlurFilter,
} from 'pixi.js';
import {CRTFilter} from 'pixi-filters';

const app: Application = new Application({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 640,
});

// setInterval(() => {
//   contA.angle += 2;
//   graphy.lineTo(200, 400);
// }, 50);

const contA: ParticleContainer = new ParticleContainer();
contA.width = 200;
contA.height = 200;
contA.x = 200;
contA.y = 200;
contA.getBounds();
app.stage.addChild(contA);

// const clampy: Sprite = Sprite.from('https://pixijs.com/assets/bunny.png');
const clampy: Sprite = Sprite.from('pngs/kim.webp');
clampy.scale.set(0.8);
clampy.x = -200;
clampy.y = 0;
// clampy.tint = 0xff69b4;
contA.addChild(clampy);

const graphy: Graphics = new Graphics();
graphy.beginFill(0x00ff00);
graphy.lineStyle(20, 0xff69b4);
graphy.drawCircle(0, 0, 50);
graphy.endFill();
app.stage.addChild(graphy);
// set graphy position to the center of the canvas
graphy.x = app.screen.width / 2;
graphy.y = app.screen.height / 2;

const style = new TextStyle({
  fontFamily: '"Comic Sans MS", cursive, sans-serif',
});
const hello = new Text('Hello World', style);
hello.x = 200;
hello.y = 200;
app.stage.addChild(hello);

// If you need to know, this is the expensive part. This creates the font atlas
BitmapFont.from('comic 32', {
  fill: '#ffffff', // White, will be colored later
  fontFamily: 'Comic Sans MS',
  fontSize: 32,
});
// Remember, this font only has letters and numbers. No commas or any other symbol.
const bitmapTexty: BitmapText = new BitmapText('I love baking, my family, and my friends', {
  fontName: 'comic 32',
  fontSize: 32, // Making it too big or too small will look bad
  tint: 0xff0000, // Here we make it red.
});
app.stage.addChild(bitmapTexty);

// Make your filter
const myBlurFilter = new BlurFilter();
let crtFilter = new CRTFilter({
  curvature: 10,
  lineWidth: 2,
  noise: 0.2,
  noiseSize: 2,
  vignetting: 0.5,
  vignettingAlpha: 0.5,
  time: 0,
});
// Add it to the `.filters` array of any DisplayObject
clampy.filters = [myBlurFilter, crtFilter];
