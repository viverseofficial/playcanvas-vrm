### ESLint + Prettier Configuration

- Install VSCode prettier extension and eslint extension
  1. https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint
  2. https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Press `F1` and input `>format Document...` to select formatter
- Choose `Prettier` as default formatter
- Enable `Editor: Format On Save` toggle

### How to develop ?

It will build file to to dist on runtime.

```
pnpm watch
```

Change to examples/project

```
pnpm dev
```

### How to build ?

```
pnpm build
```

### How to import ?

#### Methods A

Use import module directly, but it's better to wait for the package version.

```javascript
import {
  VrmExpression,
  VrmSpringBone,
  VrmAnimation,
  createFormattedVRMHumanoid,
  GLTFLoader,
} from 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@{version}/playcanvas-vrm.js';
```

#### Methods B

Use window to get the module & You can use the Singleton Pattern, assign it to a value. (recommend to cdn version)

```javascript
let VRMLoader: any = null;
let GLTFLoader: any = null;

const loadScript = () =>
new Promise<void>((resolve, reject) => {
const script = document.createElement('script');
script.type = 'module';
script.src = '/dist/playcanvas-vrm.js';
script.async = false;
document.head.appendChild(script);
    script.onload = () => {
      VRMLoader = window.VRMLoader;
      GLTFLoader = window.GLTFLoader;
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };
});
```

### VRM Animation


#### Potential Issue:
VRMA without translation move 'hips' to orgin.

##### Temporary Solution:
In VRMAnimationTrack.ts, add the following code. 

```ts
if (this.vrmAnimation.humanoidTracks.translation.size == 0) {
  const emptyPath = {
    component: 'graph',
    entityPath: ['SkeletonRoot', 'hips'],
    propertyPath: ['localPosition'],
  };
  const emptyPaths = [emptyPath];

  const emptyTranslateTrack: IVrmaTrack = {
    // @ts-ignore
    curve: new this.pcRef.AnimCurve(emptyPaths, 0, 0, 1),
    input: new this.pcRef.AnimData(1, new Float32Array([0])),
    output: new this.pcRef.AnimData(3, new Float32Array([0, 0, 0])),
  };
  this.vrmAnimation.humanoidTracks.translation.set('hips', emptyTranslateTrack);
}
```
