
function mSum(X,Y){ 
let i, j; const h=X.length, w=X[0].length, Z=new Array(h);
for(i=0; i<h; i++){ for(Z[i]=new Array(w), j=0; j<w; j++){ Z[i][j]=X[i][j]+Y[i][j]; } }
return Z;
}

function mPrd(X,Y){ 
let i, j, k; const h=X.length, m=Y.length, w=Y[0].length, Z=new Array(h);
for(i=0; i<h; i++){ for(Z[i]=new Array(w), j=0; j<w; j++){ for(Z[i][j]=0, k=0; k<m; k++){ Z[i][j]+=X[i][k]*Y[k][j]; } } }
return Z;
}

function trans(X){ 
const h=X[0].length, w=X.length, Z=new Array(h); let i, j;
for(i=0; i<h; i++){ for(Z[i]=new Array(w), j=0; j<w; j++){ Z[i][j]=X[j][i]; } }
return Z;
}

function scala(s, X){ 
const h=X.length, w=X[0].length, Z=new Array(h); let i, j;
for(i=0; i<h; i++){ for(Z[i]=new Array(w), j=0; j<w; j++){ Z[i][j]=s*X[i][j]; } }
return Z;
}

function mCpy(X){ 
   let i, j; const h=X.length, w=X[0].length, Z=new Array(h);
   for(i=0; i<h; i++){ for(j=0, Z[i]=new Array(w); j<w; j++){ Z[i][j]=X[i][j]; } }
   return Z;
}

function genE(s){
   const Z=new Array(s);
   for(let i=0; i<s; i++){ Z[i]=(new Array(s)).fill(0); Z[i][i]=1; }
   return Z;
}

