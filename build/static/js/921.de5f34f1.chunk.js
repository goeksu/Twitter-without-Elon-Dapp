(self.webpackChunktwitter_without_elon_dapp=self.webpackChunktwitter_without_elon_dapp||[]).push([[921],{84656:function(r,t,n){"use strict";n.r(t),n.d(t,{getED25519Key:function(){return u}});var e=n(93433),a=n(83201),f=n.n(a),o=n(19778).Buffer,i=f().lowlevel;function u(r){var t;t="string"===typeof r?o.from(r,"hex"):r;var n=new Uint8Array(64),a=[i.gf(),i.gf(),i.gf(),i.gf()],f=new Uint8Array([].concat((0,e.Z)(new Uint8Array(t)),(0,e.Z)(new Uint8Array(32)))),u=new Uint8Array(32);i.crypto_hash(n,f,32),n[0]&=248,n[31]&=127,n[31]|=64,i.scalarbase(a,n),i.pack(u,a);for(var c=0;c<32;c+=1)f[c+32]=u[c];return{sk:o.from(f),pk:o.from(u)}}},78848:function(){}}]);
//# sourceMappingURL=921.de5f34f1.chunk.js.map