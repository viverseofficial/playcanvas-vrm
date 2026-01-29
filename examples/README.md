# Examples

This folder contains example projects and usage demonstrations for the library.

## Project Setup

The [project](./project) directory contains a complete development environment. The example VRM model includes in this project is created using [VIVERSE Avatar Creator](https://avatar.viverse.com/).

### 1. Build the Library (Root)
Since the examples depend on the compiled library, you must first build the core library at the root of the repository:

```bash
# At the root directory
pnpm build
```

### 2. Run the Example Project
Navigate to the project folder and start the development server:

```bash
# Navigate to the project
cd examples/project

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

### 3. Development Mode (Root)
If you are modifying the core library code in `src` and want the examples to update automatically, run the watch command at the root:

```bash
# At the root directory
pnpm watch
```



## Usage Examples

### Standard VRM Loading Template
Most features follow this basic pattern for loading the model and setting up the entity:

```typescript
import * as pc from 'playcanvas';

// 1. Setup VRM asset
const asset = new pc.Asset('vrm', 'container', { url: avatarUrl });
app.assets.add(asset);

asset.on('load', (asset) => {
    // 2. Setup entities
    const renderEntity = asset.resource.instantiateRenderEntity();
    // Optional implementation
    const rootEntity = new pc.Entity('VRM_AVATAR_ROOT');
    rootEntity.addChild(renderEntity);
    
    // --- [Insert Implementation Code Here] ---

    app.root.addChild(rootEntity);
});

app.assets.load(asset);
```

### 1. Adding VRM Animations

**Setup**
```typescript
import { VrmAnimation } from 'playcanvas-vrm';
// Define your VRMA animation assets with container type
const animationAssets = [{ stateName: 'Idle', asset: vrmaAsset }];
```

**Implementation** (Inside asset load callback)
```typescript
const version = VRMLoader.getVersion(asset);
const humanoid = VRMLoader.createFormattedVRMHumanoid(pc, asset, rootEntity, {
    autoUpdateHumanBones: version === 'v1',
});

const animatedEntity = version === 'v1' ? humanoid.normalizedHumanBonesRoot : rootEntity;
animatedEntity.addComponent('anim', { activate: true });

const resources = VrmAnimation.createVRMAnimResources(pc, animationAssets, asset, humanoid);

if (resources) {
    resources.forEach(res => VrmAnimation.assignAnimation(animatedEntity, res));
}
```

**Update Humanoid**
```typescript
// Don't forget to update humanoid in your game loop!
app.on('update', () => humanoid?.update());
```

### 2. VRM Expressions

**Setup**
```typescript
import { VrmExpression } from 'playcanvas-vrm';
// Register script once
VrmExpression.importScript(pc);
```

**Implementation** (Inside asset load callback)
```typescript
rootEntity.addComponent('script');
rootEntity.script.create('vrmExpression', {
    attributes: { asset: asset },
});

// Example: Triggering emotions manually
// rootEntity.fire('vrm-expression:start-emotion', 'expressionName', {
//     times: [0, 0.5, 1],
//     values: [0, 1, 0],
// });
```

### 3. VRM Spring Bone

**Setup**
```typescript
import { VrmSpringBone } from 'playcanvas-vrm';
// Register script once
VrmSpringBone.importScript(pc);
```

**Implementation** (Inside asset load callback)
```typescript
rootEntity.addComponent('script');
rootEntity.script.create('vrmSpringBone', {
    attributes: { asset: asset },
});
```

### 4. VRM MToon
**Note**
- Current MToon implementation does not yet support `uvAnimationMaskTexture`.
- The `vrmMtoon` script should be created **before** other VRM scripts.

**Setup**
```typescript
import { VrmMtoon } from 'playcanvas-vrm';
// Register script once
VrmMtoon.importScript(pc);
```

**Implementation** (Inside asset load callback)
```typescript
rootEntity.addComponent('script');
// Before other VRM scripts
rootEntity.script.create('vrmMtoon', {
    attributes: { asset: asset },
});
```