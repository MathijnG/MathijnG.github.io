const __vite__fileDeps=["assets/LifeUpdater-ofGGWq0A.js","assets/ValueWithRandom-DhoC7b-C.js","assets/index-A9mCt7ES.js","assets/index-DYQpp7Kn.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-A9mCt7ES.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-ofGGWq0A.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};