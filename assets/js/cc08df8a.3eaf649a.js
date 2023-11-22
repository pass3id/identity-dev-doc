"use strict";(self.webpackChunkpass_3_identity=self.webpackChunkpass_3_identity||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},a="PASS3 ID Login",s={unversionedId:"pass3-id-connect/pass3-login",id:"pass3-id-connect/pass3-login",title:"PASS3 ID Login",description:"Overview",source:"@site/docs/pass3-id-connect/pass3-login.md",sourceDirName:"pass3-id-connect",slug:"/pass3-id-connect/pass3-login",permalink:"/pass3-identity/docs/pass3-id-connect/pass3-login",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PASS3 ID Connect Introduction",permalink:"/pass3-identity/docs/pass3-id-connect/intro"},next:{title:"PASS3 OpenID4VP",permalink:"/pass3-identity/docs/pass3-id-connect/pass3-openid4vp-quick-integration"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Scope",id:"scope",level:2},{value:"Integrate With PASS3 ID Login",id:"integrate-with-pass3-id-login",level:2},{value:"Button",id:"button",level:3},{value:"Flow",id:"flow",level:3},{value:"Obtain Access Token",id:"obtain-access-token",level:3},{value:"Obtain User Info",id:"obtain-user-info",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pass3-id-login"},"PASS3 ID Login"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"PASS3 handles all the complexity of underlying self-sovereign identity. PASS3 ID login is the easiest way to connect your website with the self-sovereign identity."),(0,o.kt)("p",null,"PASS3 ID Login supports OAuth2 integration with your website. OAuth2 is a secure and standardized authorization framework that allows your website to obtain limited access to user resources on behalf of the user. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To obtain your OAuth2 credentials, please get in touch with us.")),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"OAuth2 allows users to grant limited access to their protected resources to your site. The scope list will appear on the Authorization consent page."),(0,o.kt)("p",null,"This is a list of all the OAuth2 scopes that PASS3 supports."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user.identifiers.email_addresses"),(0,o.kt)("td",{parentName:"tr",align:null},"Access to the list of email addresses associated with the account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user.identifiers.phone_numbers"),(0,o.kt)("td",{parentName:"tr",align:null},"Access to the list of phone numbers associated with the account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user.identifiers.web_accounts"),(0,o.kt)("td",{parentName:"tr",align:null},"Access to web account profiles that are associated with the account. i.e. social media accounts, e-commerce accounts etc")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user.profile.languages"),(0,o.kt)("td",{parentName:"tr",align:null},"Access user language preferences")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user.profile.locations"),(0,o.kt)("td",{parentName:"tr",align:null},"Access user locations")))),(0,o.kt)("h2",{id:"integrate-with-pass3-id-login"},"Integrate With PASS3 ID Login"),(0,o.kt)("h3",{id:"button"},"Button"),(0,o.kt)("p",null,"The easiest way to connect to your website with a button."),(0,o.kt)("img",{src:"/img/pass3-id-login-btn.png"}),(0,o.kt)("p",null,"Put this snippet code on your login site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n.pass3-login-button {\n  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";\n  font-weight: 600; background-color: #AFEF78; border-radius: 12px; color: #072031;\n  padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block;\n  font-size: 16px; margin: 4px 2px; cursor: pointer; vertical-align: middle;\n}\n</style>\n\n<div id="pass3-login-button" class="pass3-login-button">\n  <div style="display: inline-block; vertical-align: middle;">\n    <svg height=25 width=25 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M19.941 7.33667C19.941 4.38934 17.5516 2.00001 14.6043 2.00001H4.00024V7.33582H14.6052V12.6049H14.6727C17.5823 12.6049 19.941 10.2463 19.941 7.33667Z"></path><path d="M4.00012 22H14.605V12.6051H9.26922V16.6642H4.00012V22Z"></path><path d="M9.2691 7.33583H4V12.6049H9.2691V7.33583Z"></path></svg>\n  </div>\n  <div style="display: inline-block; vertical-align: middle;">Login with PASS3</div>\n</div>\n\n<script>  \n  const pass3LoginButton = document.getElementById(\'pass3-login-button\');\n  const params = {\n    response_type: \'code\',\n    client_id:\'${your client id}\',\n    scope: \'${oauth2 scope}\'\n  };\n  const queryParams = \'?\' + new URLSearchParams(params).toString();\n                 \n  pass3LoginButton?.addEventListener(\'click\', (e) => {\n    e.preventDefault()\n    if (typeof window !== "undefined") {\n      window.location.href = "https://wallet.pass3.id/authorize"+queryParams;\n    }\n  });\n<\/script>\n')),(0,o.kt)("h3",{id:"flow"},"Flow"),(0,o.kt)("p",null,"Authorization process using OAuth2 Authorization Code Flow."),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    User ->> Relying Party: Login with PASS3\n    Relying Party ->> PASS3 Login: Redirect To Authorization Page\n    PASS3 Login ->> User: Ask for Permissions\n    User ->> PASS3 Login: Permissions Granted\n    PASS3 Login ->> Relying Party: Redirect To Your URL Callback\n    Relying Party ->> PASS3 API: POST /token\n    PASS3 API --\x3e> Relying Party: PASS3 Access Token + DID\n    Relying Party ->> PASS3 API: GET /user/me\n    PASS3 API --\x3e> Relying Party: PASS3 User Info"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user decided to login to your site with their PASS3 Account"),(0,o.kt)("li",{parentName:"ol"},"The page will redirect from your site to PASS3 authorization page"),(0,o.kt)("li",{parentName:"ol"},"PASS3 Login will ask user for permissions"),(0,o.kt)("li",{parentName:"ol"},"User gives permission to your website to obtain their PASS3 Resources with limited access"),(0,o.kt)("li",{parentName:"ol"},"Once a user grants the permissions, the page will redirect to your URL callback with authorization code included. It is used to obtain a token"),(0,o.kt)("li",{parentName:"ol"},"Exchange authorization code for a token to PASS3 API"),(0,o.kt)("li",{parentName:"ol"},"Your site obtained PASS3 Access Token & User DID"),(0,o.kt)("li",{parentName:"ol"},"Access user info through PASS3 API using the access token")),(0,o.kt)("h3",{id:"obtain-access-token"},"Obtain Access Token"),(0,o.kt)("p",null,"Once a user grants the permissions, the page will redirect to your URL callback with authorization code included. It is used to obtain a token through the following HTTP request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X \'POST\' \\\n  \'https://api.pass3.id/iwm/rest/v1/oauth2/token\' \\\n  -H \'accept: application/json\' \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Basic ${credential}" \\\n  -d \'{"grant_type": "authorization_code", "code": "<code>"}\'\n')),(0,o.kt)("p",null,"Sample JSON response "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "access_token": "eyJhbGciOiJFUzI1NiIs...",\n  "token_type": "bearer",\n  "expires_in": 2592000,\n  "refresh_token": "eyJhbGciOiJFUzI1...",\n  "did": "did:ethr:0x9D9Ea56218d726E85234b5003E6319C0fA38fA2d"\n}\n')),(0,o.kt)("h3",{id:"obtain-user-info"},"Obtain User Info"),(0,o.kt)("p",null,"Access user info through PASS3 API using the access token. An example of obtaining user email addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X 'GET' \\\n  'https://api.pass3.id/iwm/rest/v1/user/me/email_addresses' \\\n  -H 'accept: application/json' \\\n  -H \"Authorization: Bearer ${access_token}\"\n")),(0,o.kt)("p",null,"Sample JSON response "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "email_addresses": [\n    "user@example.com"\n  ]\n}\n')))}d.isMDXComponent=!0}}]);