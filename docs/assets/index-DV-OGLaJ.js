const __vite__fileDeps=["assets/StrokeColorUpdater-DlebS6nJ.js","assets/index-A9mCt7ES.js","assets/index-DYQpp7Kn.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-A9mCt7ES.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-DlebS6nJ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};