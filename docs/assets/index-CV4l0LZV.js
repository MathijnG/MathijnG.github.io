const __vite__fileDeps=["assets/ColorUpdater-dKqTSom4.js","assets/index-A9mCt7ES.js","assets/index-DYQpp7Kn.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-A9mCt7ES.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-dKqTSom4.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};