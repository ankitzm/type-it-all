(this["webpackJsonptype-it-all"]=this["webpackJsonptype-it-all"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),i=a(4),n=a.n(i),o=(a(15),a(8)),c=a(3),h=a(5),l=a(6),d=a(10),m=a(9),u=(a(16),a(17),a(0));var b=function(e){var t=e.words,a=e.characters,s=e.wpm,r=e.startAgain,i="Check out the React app to find your typing speed here https://ankitzm.github.io/type-it-all/, mine is ".concat(s," wpm, what's yours. ");return Object(u.jsxs)("div",{className:"text-2xl text-justify",children:[Object(u.jsx)("div",{className:"text-3xl mb-6 underline font-bold text-center",children:"Here's the Result"}),Object(u.jsxs)("div",{className:"items-center m-4",children:[Object(u.jsxs)("p",{children:["Words \u2003\u2003 : ",t]}),Object(u.jsxs)("p",{children:["Characters : ",a]}),Object(u.jsxs)("p",{children:["Speed \u2003\u2003 : ",s," WPM"]})]}),Object(u.jsxs)("div",{className:"text-xl",children:[Object(u.jsx)("button",{onClick:function(){return r()},className:"bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 mx-2 rounded shadow",children:"Retry"}),Object(u.jsx)("button",{onClick:function(){return window.open("https://www.facebook.com/sharer/sharer.php?u="+i,"facebook-share-dialog","width=800,height=600")},className:"bg-blue-800 text-white font-semibold py-2 px-4 mx-2 border border-gray-400 rounded shadow",children:"Share"}),Object(u.jsx)("button",{onClick:function(){return window.open("https://twitter.com/intent/tweet?text="+i+"\n Created by @ankitzm","Twitter","width=800,height=600")},className:"bg-blue-600 text-white font-semibold py-2 px-4 mx-2 border border-gray-400 rounded shadow",children:"Tweet"})]})]})};var f=function(e){var t=e.cardName,a=e.cardValue;return Object(u.jsxs)("div",{className:"flex flex-col justify-center items-center py-4 m-auto border hover:shadow-lg",children:[Object(u.jsx)("div",{className:"font-semibold",children:t}),Object(u.jsx)("div",{className:"font-bold text-4xl",children:a})]})};var p=function(e){var t=e.individualLetterInfo,a={correct:"bg-green-400",incorrect:"bg-red-400",notAttempted:"bg-transparent"}[t.status];return Object(u.jsx)("span",{className:"".concat(a),children:t.testLetter})};a(19);var w=function(e){e.selectedParagraph,e.words,e.characters,e.wpm;var t=e.timeRemaining,a=e.timerStarted,s=e.testInfo,r=e.inputHandler;return Object(u.jsxs)("div",{className:"mt-4",children:[Object(u.jsxs)("div",{className:"font-semibold",children:[Object(u.jsxs)("div",{className:"text-4xl",children:["00:",t>=10?t:"0".concat(t)]}),Object(u.jsx)("div",{className:"text-2xl mt-2 delay-500",children:!a&&"Start typing to start the test"})]}),Object(u.jsxs)("div",{className:"flex flex-row justify-center",children:[Object(u.jsx)("div",{className:"text-area test-area overflow-y-auto hover:shadow-md",children:s.map((function(e,t){return Object(u.jsx)(p,{individualLetterInfo:e},t)}))}),Object(u.jsx)("textarea",{onChange:function(e){return r(e.target.value)},className:"text-area resize-none hover:shadow-md",placeholder:"Start typing here"})]})]})};var g=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,i=e.timeRemaining,n=e.timerStarted,o=e.testInfo,c=e.inputHandler;return Object(u.jsxs)("div",{className:"flex flex-col flex-grow",children:[Object(u.jsxs)("div",{className:"flex flex-row justify-evenly h-auto",children:[Object(u.jsx)("div",{className:"w-1/3",children:Object(u.jsx)(f,{cardName:"WORDS",cardValue:a})}),Object(u.jsx)("div",{className:"w-1/3",children:Object(u.jsx)(f,{cardName:"CHARACTERS",cardValue:s})}),Object(u.jsx)("div",{className:"w-1/3",children:Object(u.jsx)(f,{cardName:"WPM",cardValue:r})})]}),Object(u.jsx)(w,{selectedParagraph:t,timeRemaining:i,timerStarted:n,testInfo:o,inputHandler:c})]})};var j=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,i=e.timeRemaining,n=e.timerStarted,o=e.testInfo,c=e.inputHandler,h=e.startAgain;return Object(u.jsx)("div",{className:"flex flex-col h-full justify-center items-center",children:i>0?Object(u.jsx)(g,{selectedParagraph:t,words:a,characters:s,wpm:r,timeRemaining:i,timerStarted:n,testInfo:o,inputHandler:c}):Object(u.jsx)(b,{words:a,characters:s,wpm:r,startAgain:h})})};var y=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,i=e.timeRemaining,n=e.timerStarted,o=e.testInfo,c=e.inputHandler,h=e.startAgain;return Object(u.jsxs)("div",{className:" bg-green-300 flex flex-col justify-center items-center",children:[Object(u.jsx)("div",{className:"font-bangers font-bold text-3xl md:text-5xl mx-auto my-16","data-aos":"fade-down",children:"Take a speed test now !!"}),Object(u.jsx)("div",{className:"challenge bg-gray-50 mb-16",children:Object(u.jsx)(j,{selectedParagraph:t,words:a,characters:s,wpm:r,timeRemaining:i,timerStarted:n,testInfo:o,inputHandler:c,startAgain:h})})]})},x=a.p+"static/media/linkedin.6892b3ae.png",v=a.p+"static/media/github.3b1af483.png",k=a.p+"static/media/ankit.f7e8d9c4.jpeg";var O=function(){return Object(u.jsxs)("div",{className:"text-white text-lg p-8 bg-gray-800",height:"100",children:[Object(u.jsx)("img",{className:"w-36 h-36 rounded-full mx-auto border-white",src:k,alt:"",width:"384",height:"512"}),Object(u.jsx)("div",{className:"text-cyan-600 mt-4",children:"Ankit Singh"}),Object(u.jsx)("div",{className:"text-gray-500",children:"Frontend Web Developer"}),Object(u.jsxs)("div",{className:"flex justify-center mt-3 items-end",children:[Object(u.jsx)("a",{href:"https://www.linkedin.com/in/ankitzm/",children:Object(u.jsx)("img",{src:x,alt:"",width:"40",className:"mx-2"})}),Object(u.jsx)("a",{href:"https://www.github.com/ankitzm/",children:Object(u.jsx)("img",{src:v,alt:"",width:"40",className:"mx-2"})})]})]})},A=a.p+"static/media/flash.96e141d3.png",N=a(7),T=a.n(N);var S=function(){return Object(u.jsxs)("div",{className:"h-screen flex sm:flex-row flex-col justify-center items-center sm:justify-around bg-green-300",children:[Object(u.jsxs)("div",{className:"text-6xl text-left font-bangers","data-aos":"fade-right",children:["Can you type it",Object(u.jsx)(T.a,{options:{strings:["Faster ?","Quick ?","Correctly ?"],autoStart:!0,loop:!0}})]}),Object(u.jsx)("div",{"data-aos":"fade-left",children:Object(u.jsx)("img",{src:A,alt:"flash",className:"md:w-35vw w-80vw mt-12 md:mt-0"})})]})},I=a.p+"static/media/lightning.3330c5d1.svg";var R=function(){return Object(u.jsx)("nav",{className:"w-full text-5xl bg-gray-800 h-full",children:Object(u.jsxs)("p",{className:"font-bangers my-4 inline-block float-left ml-4 text-yellow-300",children:[Object(u.jsx)("img",{src:I,alt:"lightning",className:"h-14 inline-block"}),"TYPE IT ALL"]})})},P=["An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.","This could be, or perhaps a collar is the pamphlet of a kimberly. A dad of the design is assumed to be a patent june. A teeny chief is a james of the mind. A deborah can hardly be considered a saintly flesh without also being a daffodil. Those ministers are nothing more than cathedrals. Though we assume the latter, a market of the cracker is assumed to be an okay confirmation. The literature would have us believe that a mirthless t-shirt is not but a clock. The headlong carol comes from a puddly whistle. The olives could be said to resemble upbound ethernets.","As far as we can estimate, their hat was, in this moment, a towered pakistan. Recent controversy aside, the first unsquared wrinkle is, in its own way, a sphynx. The lutes could be said to resemble cystoid lipsticks. However, before jennifers, attacks were only irans. The rubbers could be said to resemble broadloom cards. Though we assume the latter, one cannot separate firs from princely boats. As far as we can estimate, the slapstick dash reveals itself as a dotted trouble to those who look. A street is the trail of a daniel. They were lost without the hoyden pasta that composed their stove.","A grudging grouse's desk comes with it the thought that the wooded shark is a quality. Before commas, times were only harmonicas. A gum is a wasp's drop. Stopsigns are flabby insects. Fortnights are premorse celestes. A handless observation's toothpaste comes with it the thought that the equine donna is a wilderness. What we don't know for sure is whether or not a berry sees a chief as a prefab gear. The zeitgeist contends that those barges are nothing more than taxes. Framed in a different way, a leopard is a supply's chin.","One cannot separate kohlrabis from bobtail trails. Their jail was, in this moment, a yearling belief. The pint of a rowboat becomes a venous scarecrow. In recent years, the orchid of a harbor becomes a jointed lake. They were lost without the bogus trunk that composed their adult. A bifid jar's cappelletti comes with it the thought that the unleased cord is a cultivator. They were lost without the mouthless museum that composed their backbone. Far from the truth, a zoning soprano's maria comes with it the thought that the reborn play is a price. A kick sees a reindeer as a stolen archaeology.","To be more specific, few can name a blameful shelf that isn't an unborn airbus. Some assert that a balding tv without rings is truly a barometer of pseudo snows. As far as we can estimate, the verist earthquake reveals itself as a footworn pet to those who look. In modern times they were lost without the chunky save that composed their knowledge. Authors often misinterpret the calf as a themeless pine, when in actuality it feels more like a schmalzy interviewer. We know that the octopi could be said to resemble sparry baseballs. The gutless gray reveals itself as an unfiled flood to those who look. An oyster sees a motorcycle as a neuron pharmacist. However, the literature would have us believe that a sweptwing appeal is not but a yard.","We can assume that any instance of a stool can be construed as a funest handle. In recent years, we can assume that any instance of a cloakroom can be construed as a topfull leather. Far from the truth, a turnip sees a man as a churlish poison. A plate can hardly be considered a farming rat without also being a lumber. Some posit the cissoid pastor to be less than shamefaced. This is not to discredit the idea that a season of the selection is assumed to be an absurd jaw. As far as we can estimate, the time of a level becomes a prolate october. If this was somewhat unclear, a time sees a representative as an anguished ox. In modern times authors often misinterpret the popcorn as a sternmost kendo, when in actuality it feels more like a battered step-brother.","Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.","The montane peripheral comes from a hoggish security. Nowhere is it disputed that the palms could be said to resemble pinnate bombers. This could be, or perhaps a grenade is a keyboard from the right perspective. Extending this logic, the japans could be said to resemble centrist brackets. Their Friday was, in this moment, a phatic helmet. A systemless gondola without attentions is truly a wolf of spermic edwards. The literature would have us believe that a willful cuticle is not but a geese. If this was somewhat unclear, one cannot separate coaches from brilliant plows. A dish is an olden baritone.","Some chairborne fronts are thought of simply as routes. One cannot separate hamsters from crackbrained journeies. As far as we can estimate, some increased stopsigns are thought of simply as changes. Few can name an uncalled doctor that isn't a ledgy kendo. Some posit the dendroid buffet to be less than surgy. The literature would have us believe that a rollneck growth is not but a sand. They were lost without the vying bulb that composed their blouse. A heat is a watchmaker's white. The fitchy bush reveals itself as a briny share to those who look.","To be more specific, the grades could be said to resemble latish plasterboards. The first strawless grain is, in its own way, an undercloth. A sheep is the time of a step-son. Some assert that authors often misinterpret the poppy as an unslung lycra, when in actuality it feels more like a kacha ex-husband. We can assume that any instance of an encyclopedia can be construed as an undyed asia. We know that feathers are humdrum reactions. It's an undeniable fact, really; before communities, ashes were only ATMS. The first dicky delete is, in its own way, a cross. They were lost without the arranged string that composed their paint.","Extending this logic, the basses could be said to resemble zippy sugars. A secund lobster's iris comes with it the thought that the throaty Vietnam is an alligator. A toad is the kitchen of a production. Some posit the notour chef to be less than morish. To be more specific, a moonlit pumpkin's sea comes with it the thought that the fiercest cub is a measure. Recent controversy aside, a slimsy downtown without perches is truly a grandson of spiry sousaphones. The bowl of a couch becomes a daring archeology. A kayak is a chill from the right perspective. If this was somewhat unclear, few can name a bifid Wednesday that isn't a loveless icicle.","Framed in a different way, a nimble insurance is a rise of the mind. A rice of the aftershave is assumed to be a contained sink. As far as we can estimate, the unkind fiction comes from a seasick latex. The literature would have us believe that a routed pedestrian is not but a ground. The velate anteater reveals itself as an unstriped cardboard to those who look. The musician of a train becomes an upward ease. It's an undeniable fact, really; a snugger toy is a romanian of the mind. Some fleshy raies are thought of simply as selections. An oval of the baby is assumed to be a shiny room.","The literature would have us believe that an upgrade workshop is not but a tabletop. A sissy liquor without bails is truly a school of awheel dungeons. Shaded landmines show us how violets can be augusts. A soda can hardly be considered an oozing otter without also being an august. One cannot separate bottoms from wrinkly periods. A math is the kilogram of a centimeter. To be more specific, a hyena is the name of a stretch. However, the bridgeless fan comes from an elapsed cucumber. Before faucets, waitresses were only parties."],F={selectedParagraph:"hello world",timerStarted:0,timeRemaining:0,words:0,characters:0,wpm:0,testInfo:[]},C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=F,e.fetchNewParagraphFallback=function(){var t=P[Math.floor(Math.random()*P.length)],a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(c.a)(Object(c.a)({},F),{},{testInfo:a,selectedParagraph:t}))},e.startTimer=function(){e.setState({timerStarted:!0});var t=setInterval((function(){if(e.state.timeRemaining>0){var a=0-e.state.timeRemaining,s=e.state.timeRemaining>0?e.state.words/a*0:0;e.setState({timeRemaining:e.state.timeRemaining-1,wpm:parseInt(s)})}else clearInterval(t)}),1e3)},e.startAgain=function(){e.fetchNewParagraphFallback()},e.handleUserInput=function(t){e.state.timerStarted||e.startTimer();var a=t.length,s=t.split(" ").length,r=a-1;if(r<0)e.setState({testInfo:[{testLetter:e.state.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(o.a)(e.state.testInfo.slice(1))),characters:a,words:s});else if(r>e.state.selectedParagraph.length)e.setState({words:s,characters:a});else{var i=e.state.testInfo;r!==e.state.selectedParagraph.length-1&&(i[r+1].status="notAttempted");var n=i[r].testLetter===t[r];i[r].status=n?"correct":"incorrect",e.setState({testInfo:i,words:s,characters:a})}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewParagraphFallback()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App flex flex-col",children:[Object(u.jsx)(R,{}),Object(u.jsx)(S,{}),Object(u.jsx)(y,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timeRemaining:this.state.timeRemaining,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,inputHandler:this.handleUserInput,startAgain:this.startAgain}),Object(u.jsx)(O,{})]})}}]),a}(r.a.Component);n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.067341fc.chunk.js.map