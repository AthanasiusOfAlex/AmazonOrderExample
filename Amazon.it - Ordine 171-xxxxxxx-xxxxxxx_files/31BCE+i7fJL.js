(function(c,d){function u(c){if(c)return c.replace(/^\s+|\s+$/g,"")}function q(f,d){if(!f)return{};var b="INFO"===d.logLevel;f.m&&f.m.message&&(f=f.m);var h=d.m||d.message||"";h=f.m&&f.m.message?h+f.m.message:f.m&&f.m.target&&f.m.target.tagName?h+("Error handler invoked by "+f.m.target.tagName+" tag"):f.m?h+f.m:f.message?h+f.message:h+"Unknown error";h={m:h,name:f.name,type:f.type,csm:P+" "+(f.fromOnError?"onerror":"ueLogError")};var g,m=0;h.logLevel=d.logLevel||B;d.adb&&(h.adb=d.adb);if(g=d.attribution)h.attribution=
""+g;if(!b){h.pageURL=d.pageURL||""+(window.location?window.location.href:"")||"missing";h.f=f.f||f.sourceURL||f.fileName||f.filename||f.m&&f.m.target&&f.m.target.src;h.l=f.l||f.line||f.lineno||f.lineNumber;h.c=f.c?""+f.c:f.c;h.s=[];h.t=c.ue.d();if((b=f.stack||(f.err?f.err.stack:""))&&b.split)for(h.csm+=" stack",g=b.split("\n");m<g.length&&h.s.length<z;)(b=g[m++])&&h.s.push(u(b));else{h.csm+=" callee";var v=x(f.args||arguments,"callee");for(g=m=0;v&&m<z;){var k=n;v.skipTrace||(b=v.toString())&&b.substr&&
(k=0===g?4*n:k,k=1==g?2*n:k,h.s.push(b.substr(0,k)),g++);v=x(v,"caller");m++}}if(!h.f&&0<h.s.length&&(m=h)&&m.s){var t;b=0<m.s.length?m.s[0]:"";g=1<m.s.length?m.s[1]:"";b&&(t=b.match(y));t&&3==t.length||!g||(t=g.match(O));t&&3==t.length&&(m.f=t[1],m.l=t[2])}}return h}function x(c,d){try{return c[d]}catch(b){}}function w(f,v){if(f){for(var b=q(f,v),h=(window.ue_err?window.ue_err.errorHandlers:null)||[],g=0;g<h.length;g++)"function"==typeof h[g].handler&&h[g].handler(b);c.ue.log(b,v.channel||k,{nb:1});
c.ue_err.buffer&&c.ue_err.buffer.push(b);"function"===typeof ue_err.elh&&ue_err.elh(f,v);try{if(!f.fromOnError){var m=d.console,n=d.JSON;h="Error logged with the Track\x26Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";if(m){if(n&&n.stringify)try{h+=n.stringify(b)}catch(N){h+="no info provided; converting to string failed"}else h+=b.m;"function"===typeof m.error?m.error(h,b):"function"===typeof m.log&&m.log(h,b)}}}catch(N){}}}function C(f,d){if(f&&!(c.ue_err.ec>c.ue_err.mxe)){c.ue_err.ter.push(f);
d=d||{};var b=f.logLevel||d.logLevel;d.logLevel=b;d.attribution=f.attribution||d.attribution;b&&b!==B&&b!==K&&b!==D&&b!==L||c.ue_err.ec++;b&&b!=B||ue_err.ecf++;w(f,d)}}if(c.ue_err&&(!c.ueLogError||c.ueLogError.isStub)){var k=c.ue_err_chan||"jserr",B="FATAL",K="ERROR",D="WARN",L="DOWNGRADED",P="v5",z=20,n=256,O=/\(?([^\s]*):(\d+):\d+\)?/,y=/.*@(.*):(\d*)/;w.skipTrace=1;q.skipTrace=1;C.skipTrace=1;(function(){if(c.ue_err.erl){var f=c.ue_err.erl.length,d;for(d=0;d<f;d++){var b=c.ue_err.erl[d];w(b.ex,
b.info)}ue_err.erl=[]}})();c.ueLogError=C}})(ue_csm,window);
(function(c,d){function u(a){for(var l={},e,p,r=0;r<a.length;r++)p=a[r],p.r=p.r||b.rid,p.s=p.s||c.ue_sid,e=p.r+p.s+p.m,p.c&&(l[e]||(l[e]=[]),l[e].push(a[r]));return l}function q(a){for(var l=1;l<arguments.length;l++){var e=arguments[l];try{if(e.isSupported)return e.send(a)}catch(p){}}}function x(){if(g.length&&!b.paused){for(var a=0;a<A.length;a++)A[a]();b._flhs+=1;w();q(u(g.splice(0,g.length)),E,G,H)}t=M=0}function w(){n&&C({k:"chk",f:b._flhs,l:b._lpn,s:"full"},"csm")}function C(a,l,e){e=e||{};!c.ue_furl||
0===e.bf&&b.isBF||(a={r:e.r||(b.paused?void 0:b.rid),s:e.s||(b.paused?void 0:c.ue_sid),m:e.m||c.ue_mid,mkt:e.mkt||c.ue_mkt,sn:e.sn||c.ue_sn,c:l,d:a,t:e.t||b.d(),cs:e.c&&c.ue_qsl},b._lpn[l]=(b._lpn[l]||0)+1,e.b?q(u([a]),E,H):e.nb?q(u([a]),E,G,H):e.img||Q[l]?q(u([a]),H):e.ff?(g.push(a),x()):e.n?(g.push(a),0===I?x():t||(t=d.setTimeout(x,I))):(g.push(a),M||(M=d.setTimeout(x,R))))}function k(a,l,e){J++;if(J==z){var b={m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"};C(b,
d.ue_err_chan||"jserr");c.ue_err.buffer&&c.ue_err.buffer.push(b)}(J<z||e&&e.il)&&C(a,l,e)}function B(){if(!N){for(var a=0;a<m.length;a++)m[a]();for(a=0;a<A.length;a++)A[a]();b._flhs+=1;w();q(u(g.splice(0,g.length)),E,H);N=!0}}function K(a){var b=f(a);a.reqs&&(b={csmcount:{counter:O,t:0,value:b.length}},b.csmcount.value+=f(b).length,a.reqs.push(b),b=f(a));return b}var D={};(function(){function a(a){return 10>a?"0"+a:a}function b(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var e=d[a];
return"string"===typeof e?e:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function e(a,c){var l,p=r,d=c[a];d&&"object"===typeof d&&"function"===typeof d.toJSON&&(d=d.toJSON(a));"function"===typeof h&&(d=h.call(c,a,d));switch(typeof d){case "string":return b(d);case "number":return isFinite(d)?String(d):"null";case "boolean":case "null":return String(d);case "object":if(!d)return"null";r+=f;var F=[];if("[object Array]"===Object.prototype.toString.apply(d)){c=d.length;for(a=
0;a<c;a+=1)F[a]=e(a,d)||"null";var g=0===F.length?"[]":r?"[\n"+r+F.join(",\n"+r)+"\n"+p+"]":"["+F.join(",")+"]";r=p;return g}if(h&&"object"===typeof h)for(c=h.length,a=0;a<c;a+=1)"string"===typeof h[a]&&(l=h[a],(g=e(l,d))&&F.push(b(l)+(r?": ":":")+g));else for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(g=e(l,d))&&F.push(b(l)+(r?": ":":")+g);g=0===F.length?"{}":r?"{\n"+r+F.join(",\n"+r)+"\n"+p+"}":"{"+F.join(",")+"}";r=p;return g}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=
function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var c=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r,f,d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",
'"':'\\"',"\\":"\\\\"},h;"function"!==typeof D.stringify&&(D.stringify=function(a,b,c){var l;f=r="";if("number"===typeof c)for(l=0;l<c;l+=1)f+=" ";else"string"===typeof c&&(f=c);if((h=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return e("",{"":a})})})();var L=function(){function a(b,e){if(null==b)return e.push("!n");if("number"===typeof b)return e.push("!"+b);if("string"===typeof b)return"\\"==b[b.length-1]?e.push("'"+b.replace(/'/g,"\\'")+
"u005C'"):e.push("'"+b.replace(/'/g,"\\'")+"'");if("boolean"===typeof b)return e.push(b?"!t":"!f");if(b instanceof Array){e.push("*");for(var c=0;c<b.length;c++)a(b[c],e);return e.push(")")}if("object"==typeof b){e.push("(");for(c in b)b.hasOwnProperty(c)&&(e.push(c),a(b[c],e));return e.push(")")}return e.push("!n")}return{stringify:function(b){var e=[];a(b,e);return e.join("")}}}(),P=c.ue_qsl||2E3,z=2E3,n=1===window.ue_ddq,O="foresterPayloadSize",y=function(){},f=d.JSON&&d.JSON.stringify||D&&D.stringify,
v=L.stringify,b=c.ue||{};L=c.uet||y;(c.uet||y)("bb","ue_frst_v2",{wb:1});var h="//"+c.ue_furl+"/1/batch/1/OE/",g=[],m=[],A=[],N=!1,t,M,I=void 0===c.ue_hpfi?1E3:c.ue_hpfi,R=void 0===c.ue_lpfi?1E4:c.ue_lpfi,Q={"scheduled-delivery":1},J=0,G=function(){function a(){if(d.XDomainRequest){var a=new XDomainRequest;a.onerror=y;a.ontimeout=y;a.onprogress=y;a.onload=y;a.timeout=0;return a}if(d.XMLHttpRequest){a=new XMLHttpRequest;if(!("withCredentials"in a))throw"";return a}if(d.ActiveXObject){for(var b=0;b<
f.length&&!a;b++)try{a=new ActiveXObject(f[b]),f=[f[b]]}catch(S){}return a}}function l(a){for(var e=[],d=a[0]||{},l=0;l<a.length;l++){var f={};f[a[l].c]=a[l].d;e.push(f)}return{rid:d.r||b.rid,sid:d.s||c.ue_sid,mid:d.m||c.ue_mid,mkt:d.mkt||c.ue_mkt,sn:d.sn||c.ue_sn,reqs:e}}function e(b){var e=l(b),c=a();if(!c)throw"";c.onerror=function(){for(var a=0;a<b.length;a++)g.push(b[a]);G.isSupported=!1};c.open("POST",h,!0);c.setRequestHeader&&c.setRequestHeader("Content-type","text/plain");e=K(e);c.send(e)}
var f="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");return{send:function(a){for(var b in a)a.hasOwnProperty(b)&&a[b].length&&e(a[b])},buildPOSTBodyLog:l,isSupported:!0}}(),H=function(){return{send:function(a){for(var d in a)if(a.hasOwnProperty(d)){for(var e=a[d],p=e,r={},g,m=0;m<p.length;m++)g=p[m].c,r[g]||(r[g]=[]),r[g].push(p[m]);e=e[0]||{};p=e.sn||c.ue_sn;e=h+(e.m||c.ue_mid)+":"+(e.s||c.ue_sid)+":"+(e.r||b.rid)+(p?":"+
p:"");p=[];g=e;m=[];var n=void 0;for(n in r)if(r.hasOwnProperty(n))for(var k=0;k<r[n].length;k++){var t=r[n][k],q=encodeURIComponent((t.cs?v:f)(t.d));m.push({l:q,t:t.t,p:1,c:n,d:t.cs?"c":"j"})}r=m;m=void 0;n="$";for(t=0;t<r.length;){k=r[t];m!=k.c?(g+=n+k.c+"\x3d",n="\x26",m=k.c):g+=",";q=g;var w=k.d+":",u=k;g=(u.l.match(".{1,"+(P-g.length)+"}[^%]{0,2}")||[])[0]||"";u.l=u.l.substr(g.length);g=q+(w+g+":"+k.t);if(k.l)g+=":"+k.p++ +"_",p.push(g),g=e,n="$",m=0;else if(t++,1!=k.p)for(g+=":"+k.p+"_"+k.p,
q=0;q<k.p-1;q++)p[p.length-q-1]+=k.p}p.push(g);e=p;for(p=0;p<e.length;p++)(new Image).src=e[p]}},isSupported:!0}}(),E=function(){return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)){var e=G.buildPOSTBodyLog(a[b]);e=K(e);if(!navigator.sendBeacon(h,e))throw"";}},isSupported:!!navigator.sendBeacon}}();b._fic=H;b._fac=G;b._fbc=E;b._flq=g;b.sid=b.sid||c.ue_sid;b.mid=b.mid||c.ue_mid;b.furl=b.furl||c.ue_furl;b.sn=b.sn||c.ue_sn;b._flhs=b._flhs||0;b._lpn=b._lpn||{};try{d.amznJQ&&d.amznJQ.declareAvailable&&
d.amznJQ.declareAvailable("forester-client"),d.P&&d.P.register&&d.P.register("forester-client",y)}catch(a){c.ueLogError(a,{logLevel:"WARN"})}(function(){b.log&&b.log.isStub&&(b.log.replay(function(a,b,e){var c=a[2]||{};c.t=b;c.r=e;c.n=1;k(a[0],a[1],c)}),b.onunload.replay(function(a){m.push(a[0])}),b.onflush.replay(function(a){A.push(a[0])}))})();b.log=k;b.log.reset=function(){J=0};b.onunload=function(a){m.push(a)};b.onflush=function(a){A.push(a)};b.attach("beforeunload",B);b.attach("pagehide",B);
L("ld","ue_frst_v2",{wb:1})})(ue_csm,window);
ue_csm.ue.exec(function(c,d){var u=function(){},q=function(){return{send:function(c,q){if(q&&c){if(d.XDomainRequest){var k=new XDomainRequest;k.onerror=u;k.ontimeout=u;k.onprogress=u;k.onload=u;k.timeout=0}else if(d.XMLHttpRequest){if(k=new XMLHttpRequest,!("withCredentials"in k))throw"";}else k=void 0;if(!k)throw"";k.open("POST",c,!0);k.setRequestHeader&&k.setRequestHeader("Content-type","text/plain");k.send(q)}},isSupported:!0}}(),x=function(){return{send:function(d,q){if(d&&q)if(navigator.sendBeacon(d,
q))c.ue_sbuimp&&c.ue&&c.ue.ssw&&c.ue.ssw("eelsts","scs");else throw"";},isSupported:!!navigator.sendBeacon&&!(d.cordova&&d.cordova.platformId&&"ios"==d.cordova.platformId)}}();c.ue._ajx=q;c.ue._sBcn=x},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(c,d){function u(){for(var a=0;a<arguments.length;a++){var l=arguments[a];try{if(l.isSupported){var e=E.buildPayload(g,b);var h=l.send(f,e)}else throw dummyException;return h}catch(r){}}a={m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"};O(a,d.ue_err_chan||"jserr");c.ue_err.buffer&&c.ue_err.buffer.push(a)}function q(){if(b.length){for(var a=0;a<I.length;a++)I[a]();u(n._sBcn||{},n._ajx||{});b=[];h={};g={};
Q=J=m=A=0}}function x(){var a=new Date,b=function(a){return 10>a?"0"+a:a};return Date.prototype.toISOString?a.toISOString():a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function w(a){try{return JSON.stringify(a)}catch(l){}return null}function C(a,f,e,g){var h=!1;g=g||{};t++;if(t==D){var l={m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",
logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"};O(l,d.ue_err_chan||"jserr");c.ue_err.buffer&&c.ue_err.buffer.push(l)}if(l=!(t>=D))(l=a&&-1<a.constructor.toString().indexOf("Object")&&f&&-1<f.constructor.toString().indexOf("String")&&e&&-1<e.constructor.toString().indexOf("String"))||N++;l&&(n.count&&n.count("Event:"+e,1),a.producerId=a.producerId||f,a.schemaId=a.schemaId||e,a.timestamp=x(),f=Date.now?Date.now():+new Date,e=Math.random().toString().substring(2,12),a.messageId=c.ue_id+"-"+
f+"-"+e,g&&!g.ssd&&(a.sessionId=a.sessionId||c.ue_sid,a.requestId=a.requestId||c.ue_id,a.obfuscatedMarketplaceId=a.obfuscatedMarketplaceId||c.ue_mid),(f=w(a))?(f=f.length,(b.length==L||m+f>P)&&q(),m+=f,a={data:E.compressEvent(a)},b.push(a),(g||{}).n?0===G?q():Q||(Q=d.setTimeout(q,G)):J||(J=d.setTimeout(q,H)),h=!0):h=!1);!h&&c.ue_int&&console.error("Invalid JS Nexus API call");return h}function k(){if(!R){for(var a=0;a<M.length;a++)M[a]();for(a=0;a<I.length;a++)I[a]();b.length&&(c.ue_sbuimp&&c.ue&&
c.ue.ssw&&(a=w({dct:g,evt:b}),c.ue.ssw("eeldata",a),c.ue.ssw("eelsts","unk")),u(n._sBcn||{}));R=!0}}function B(a){M.push(a)}function K(a){I.push(a)}var D=1E3,L=499,P=524288,z=function(){},n=c.ue||{},O=n.log||z,y=c.uex||z;(c.uet||z)("bb","ue_sushi_v1",{wb:1});var f=c.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",v=["messageId","timestamp"],b=[],h={},g={},m=0,A=0,N=0,t=0,M=[],I=[],R=!1,Q,J,G=void 0===c.ue_hpsi?1E3:c.ue_hpsi,H=void 0===c.ue_lpsi?1E4:c.ue_lpsi,E=function(){function a(a){h[a]=
"#"+A++;g[h[a]]=a;return h[a]}function c(b){if(!(b instanceof Function)){if(b instanceof Array){for(var e=[],d=b.length,f=0;f<d;f++)e[f]=c(b[f]);return e}if(b instanceof Object){e={};for(d in b)b.hasOwnProperty(d)&&(e[h[d]?h[d]:a(d)]=-1===v.indexOf(d)?c(b[d]):b[d]);return e}return"string"===typeof b&&(b.length>("#"+A).length||"#"===b.charAt(0))?h[b]?h[b]:a(b):b}}return{compressEvent:c,buildPayload:function(){return w({cs:{dct:g},events:b})}}}();(function(){if(n.event&&n.event.isStub){if(c.ue_sbuimp&&
c.ue&&c.ue.ssw){var a=c.ue.ssw("eelsts").val;if(a&&"unk"===a&&(a=c.ue.ssw("eeldata").val)){a:{try{var d=JSON.parse(a);break a}catch(e){}d=null}d&&d.evt instanceof Array&&d.dct instanceof Object&&(b=d.evt,g=d.dct,b&&g&&(q(),c.ue.ssw("eeldata","{}"),c.ue.ssw("eelsts","scs")))}}n.event.replay(function(a){a[3]=a[3]||{};a[3].n=1;C.apply(this,a)});n.onSushiUnload.replay(function(a){B(a[0])});n.onSushiFlush.replay(function(a){K(a[0])})}})();n.attach("beforeunload",k);n.attach("pagehide",k);n._cmps=E;n.event=
C;n.event.reset=function(){t=0};n.onSushiUnload=B;n.onSushiFlush=K;try{d.P&&d.P.register&&d.P.register("sushi-client",z)}catch(a){c.ueLogError(a,{logLevel:"WARN"})}y("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);