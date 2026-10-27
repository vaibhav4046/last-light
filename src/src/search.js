export function cosine(a,b){if(!a.length||a.length!==b.length)throw new Error('Invalid embedding dimensions');let dot=0,aa=0,bb=0;for(let i=0;i<a.length;i++){dot+=a[i]*b[i];aa+=a[i]*a[i];bb+=b[i]*b[i]}return aa&&bb?dot/Math.sqrt(aa*bb):0}
export function chunk(text){return text.split(/\n\s*\n/).map(t=>t.trim()).filter(Boolean).flatMap(t=>{if(t.length<=900)return[t];const out=[];for(let i=0;i<t.length;i+=750)out.push(t.slice(i,i+900));return out}).slice(0,200)}
export function rank(query,vectors,passages){return vectors.map((v,i)=>({text:passages[i],score:cosine(query,v),index:i})).sort((a,b)=>b.score-a.score).slice(0,3)}

export function locations(text){let cursor=0;return chunk(text).map(passage=>{const start=text.indexOf(passage,cursor);if(start<0)throw new Error('Source location not found');cursor=start+Math.min(750,passage.length);return {start,end:start+passage.length};});}
