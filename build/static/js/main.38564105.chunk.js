(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,image:"https://img.buzzfeed.com/buzzfeed-static/static/2015-03/12/22/campaign_images/webdr15/8-times-meredith-grey-beat-the-odds-on-greys-anat-2-23976-1426214196-2_dblbig.jpg"},{id:2,image:"https://www.closerweekly.com/wp-content/uploads/2017/10/alex-karev.jpg?fit=200%2C1"},{id:3,image:"https://pmctvline2.files.wordpress.com/2019/02/patrick-dempsey-04-1024-1.jpg?w=620&h=440&crop=1"},{id:4,image:"https://images.britcdn.com/wp-content/uploads/2018/02/144984_017a_chandra-wilson-greys-anatomy-zoom.jpg?w=1000&auto=format"},{id:5,image:"https://vignette.wikia.nocookie.net/greys/images/4/4a/RichardGAS10.jpg/revision/latest?cb=20130913154611"},{id:6,image:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Dr._Mark_Sloan.jpg/220px-Dr._Mark_Sloan.jpg"},{id:7,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Greys-Chyler-Leigh.jpg"},{id:8,image:"https://ecelebrityfacts.com/images/96550/sandra-oh-1510741164.jpg"},{id:9,image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/04/1516794134-ga3.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=480:*"},{id:10,image:"https://pmctvline2.files.wordpress.com/2011/02/gamckidd_300.jpg"},{id:11,image:"https://s1.r29static.com//bin/entry/e80/720x864,85/2040491/image.webp"},{id:12,image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F10%2F14081440%2Fgreys-anatomy-season-12-caterina-scorsone-amelia-shepherd-750x522.jpg&w=450&c=sc&poi=face&q=85"}]},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),r=a(7),s=a.n(r),n=(a(15),a(1)),o=a(2),m=a(4),p=a(3),l=a(5),d=(a(16),a(17),function(e){function t(){return Object(n.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("p",{className:"title"}," Greys Anatomy Memory Game"),i.a.createElement("p",{className:"score"},"Score: ",this.props.score," Highscore: ",this.props.hscoreTracker))}}]),t}(c.Component));a(18);var g=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("img",{src:e.image,width:"270px",height:"240px",id:e.id,onClick:function(){return e.clickTracker(e.id)}}))};a(19);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},u=a(8),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={score:0,cast:u,clickedCast:[],hscore:0},a.clickTracker=function(e){var t=a.state.clickedCast(e);-1===a.state.clickedCast.indexOf(e)?(a.scoreIncrease(),a.setState({clickedCast:t})):a.resetGame()},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(d,{score:this.state.score,hscore:this.state.hscore}),this.state.cast.map(function(t){return i.a.createElement(g,{clickTracker:e.clickTracker,shuffle:e.shuffle,shuffledCast:e.shuffledCast,scoreIncrease:e.scoreIncrease,resetGame:e.resetGame,id:t.id,key:t.id,image:t.image})}))}}]),t}(c.Component);s.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.38564105.chunk.js.map