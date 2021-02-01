document.getElementById("watsonData-covidVariantWrapper").innerHTML='\n<style>\n.bi{display:inline-block;vertical-align:text-bottom;width:1em;height:1em;vertical-align:-.1em}\n.watsonData-legends {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 20px;\n    margin-top: 15px;\n    padding-bottom: 10px;\n}\n.watsonData-legend-text {\n    margin: 0 5px;\n}\n</style>\n<div class="watsonData-legends" id="watsonData-covidVariantWrapper-legends">\n</div>\n<div id="watsonData-covidVariantWrapper-svg">\n</div>\n',d3.timeFormatDefaultLocale({decimal:",",thousands:"'",grouping:[3],currency:["€",""],dateTime:"%a %b %e %X %Y",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Jannuar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]});let JSONurl="https://gitcdn.link/repo/petarmarj/watsonDataInfos/main/projects/2012_covidViz/JSON-variantGraphManual.json";function drawCircleWithText(t,e,a,r={x:0,y:0},n=WDcolors.magenta){[svg,xScale,yScale]=t,svg.append("circle").attr("cx",a.x).attr("cy",a.y).attr("r",4).attr("fill",n).attr("stroke-width",0).attr("stroke",n);const i=d3.linkHorizontal().x(t=>t.x).y(t=>t.y)({source:{x:a.x,y:a.y},target:{x:a.x+r.x,y:a.y+r.y}});svg.append("path").attr("d",i).attr("stroke",n).attr("opacity",.5).attr("stroke-dasharray",4).attr("fill","none"),svg.append("text").attr("font-size","0.8rem").attr("font-weight","bold").attr("fill",n).attr("stroke","#fff").attr("stroke-width","4px").attr("paint-order","stroke").attr("text-anchor","end").attr("x",a.x+r.x).attr("y",a.y+r.y+3).text(e)}function addLegendCircle(t,e,a=1){let r="";return margin="",textMargin="",!1!==e&&0!==e&&(r+=' <svg style="color:'+e+";"+margin+";opacity:"+a+'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"> <circle cx="8" cy="8" r="8"></circle></svg>'),-1!=t&&0!=t&&(r+=' <span class="watsonData-legend-text" style="'+textMargin+'">'+t+"</span> "),r}d3.json(JSONurl,function(t,e){}).then(function(t){let e=0,a=0,r=50,n=0,i=940-n-a,l=400-e-r,d=d3.select("#watsonData-covidVariantWrapper-svg").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("overflow","hidden").attr("viewBox","0 0 "+(i+n+a)+" "+(l+e+r)).classed("svg-content",!0).append("g").attr("transform","translate("+n+","+e+")"),o=d3.scaleTime().domain(d3.extent(Object.keys(t.CH),function(t){return d3.timeParse("%Y-%m-%d")(t)})).range([50,i-20]);d.append("g").attr("transform",`translate(0,${l})`).call(d3.axisBottom(o).ticks(2).tickFormat(d3.timeFormat("%b %y"))).call(t=>t.select(".domain").remove()).call(t=>t.selectAll(".tick:not(:first-of-type) line").attr("stroke-opacity",1)).call(t=>t.selectAll(".tick text").attr("x",0).attr("dy",10));let s,c,f=d3.scaleLinear().domain([0,d3.max(Object.values(t.CH),function(t){return t.newCases})]).range([l,0]),u=(d3.scaleLinear().domain([0,d3.max(Object.values(t.CH),function(t){return t.newCases})]).range([l,0]),d3.scaleLinear().domain([0,2]).range([l,0]));d.append("g").attr("transform","translate(0,0)").call(d3.axisLeft(f).tickSize(-i-n-a)).call(t=>t.select(".domain").remove()).call(t=>t.selectAll(".tick:not(:first-of-type) line").attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")).call(t=>t.selectAll(".tick text").attr("x",40).attr("dy",-4)),d.selectAll("bar").data(Object.keys(t.CH).sort()).enter().append("rect").attr("x",function(t){return o(d3.timeParse("%Y-%m-%d")(t))}).attr("y",function(e){return f(t.CH[e].newCases)}).attr("width","25px").attr("height",function(e){return l-f(t.CH[e].newCases)}).attr("fill","#00C1F6").attr("opacity",.5),d.selectAll("bar").data(Object.keys(t.CH).sort()).enter().append("rect").attr("x",function(t){return o(d3.timeParse("%Y-%m-%d")(t))}).attr("y",function(e){return null===t.CH[e].B117diff&&(t.CH[e].B117diff=0),f(3e3+t.CH[e].B117diff)}).attr("width","25px").attr("height",function(e){return null===t.CH[e].B117diff&&(t.CH[e].B117diff=0),l-f(t.CH[e].B117diff)}).attr("fill","#F40F97").attr("opacity",.5),d.selectAll("bar").data(Object.keys(t.CH).sort()).enter().append("rect").attr("x",function(t){return o(d3.timeParse("%Y-%m-%d")(t))}).attr("y",function(e){return null===t.CH[e].B117diff&&(t.CH[e].B117diff=0),null===t.CH[e].B1351diff&&(t.CH[e].B1351diff=0),f(3e3+t.CH[e].B117diff+t.CH[e].B1351diff)}).attr("width","25px").attr("height",function(e){return null===t.CH[e].B1351diff&&(t.CH[e].B1351diff=0),l-f(t.CH[e].B1351diff)}).attr("fill","#771B71").attr("opacity",.5),d.selectAll("bar").data(Object.keys(t.CH).sort()).enter().append("rect").attr("x",function(t){return o(d3.timeParse("%Y-%m-%d")(t))}).attr("y",function(e){return null===t.CH[e].B117diff&&(t.CH[e].B117diff=0),null===t.CH[e].N501Yotherdiff&&(t.CH[e].N501Yotherdiff=0),f(3e3+t.CH[e].B117diff+t.CH[e].B1351diff+t.CH[e].N501Yotherdiff)}).attr("width","25px").attr("height",function(e){return null===t.CH[e].N501Yotherdiff&&(t.CH[e].N501Yotherdiff=0),l-f(t.CH[e].N501Yotherdiff)}).attr("fill","#FB9FD5").attr("opacity",.5);let p=d3.line().x(function(t){return c=d3.timeParse("%Y-%m-%d")(t),10+o(d3.timeParse("%Y-%m-%d")(t))}).defined(function(e){if(!isNaN(t.CH[e].N501Ytotal)&&t.CH[e].N501Ytotal>0)return!0}).y(function(e){return s=t.CH[e].N501Ytotal,f(3e3+t.CH[e].N501Ytotal)+20});d.append("path").datum(Object.keys(t.CH).sort()).attr("fill","none").attr("stroke","#F40F97").attr("stroke-width",2).attr("d",p),d.append("path").datum(Object.keys(t.CH).sort().filter(p.defined())).attr("fill","none").attr("stroke","#F40F97").attr("stroke-dasharray",2).attr("stroke-width",2).attr("d",p),drawCircleWithText([d,o,f],"Total Mutanten-Infektionen: "+s,{x:10+o(c),y:f(3e3+s)+20},{x:-100,y:20},"#F40F97");let m,g="";d.append("path").datum(Object.keys(t.CH).sort()).attr("fill","none").attr("stroke","#771B71").attr("stroke-width",2).attr("d",d3.line().x(function(t){return g=d3.timeParse("%Y-%m-%d")(t),o(d3.timeParse("%Y-%m-%d")(t))}).defined(function(e){if(!isNaN(t.CH[e].rValue)&&null!==t.CH[e].rValue)return!0}).y(function(e){return m=parseFloat(t.CH[e].rValue),u(parseFloat(t.CH[e].rValue))})),drawCircleWithText([d,o,u],"Letzter R-Wert: "+m,{x:o(g),y:u(m)},{x:-40,y:-40},"#771B71");let C=addLegendCircle("R-Wert","#771B71");C+=addLegendCircle("Neue tägliche Infektionen<br>","#00C1F6",.5),C+=addLegendCircle("B.1.1.7","#F40F97",.5),C+=addLegendCircle("B.1.351","#771B71",.5),C+=addLegendCircle("andere N501-Mutationen","#FB9FD5",.5),document.getElementById("watsonData-covidVariantWrapper-legends").innerHTML=C});
