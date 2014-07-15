define([],function(){"use strict";var a={visibleItems:999,instanceName:null,url:"",idsParameter:"ids",preselected:{ids:[]},idKey:"id",titleKey:"title",resultKey:"",columnNavigationUrl:"",translations:{noLinksSelected:"internal-links.nolinks-selected",addLinks:"internal-links.add",visible:"internal-links.visible",of:"internal-links.of"}},b={ids:[],displayOption:"top",config:{}},c="sulu.internal-links.",d=function(){return h.call(this,"input-retrieved")},e=function(){return h.call(this,"data-changed")},f=function(){return h.call(this,"data-request")},g=function(){return h.call(this,"data-retrieved")},h=function(a){return c+(this.options.instanceName?this.options.instanceName+".":"")+a},i={skeleton:function(a){return['<div class="smart-content-container form-element" id="',a.ids.container,'">','   <div class="smart-header">','       <a href="#" class="fa-plus-circle add" id="',a.ids.addButton,'"></a>','       <a href="#" class="fa-cog config" id="',a.ids.configButton,'" style="display: none;"></a>',"   </div>",'   <div class="smart-content" id="',a.ids.content,'"></div>',"</div>"].join("")},noContent:function(a){return['<div class="no-content">','   <span class="fa-file icon"></span>','   <div class="text">',a,"</div>","</div>"].join("")},data:function(a){return['<div id="',a.ids.columnNavigation,'"/>'].join("")},contentItem:function(a,b,c){return['<li data-id="',a,'">','   <span class="num">',b,"</span>",'   <span class="value">',c,"</span>","</li>"].join("")}},j=function(a){return"#"+this.options.ids[a]},k=function(){if(this.options.ids={container:"internal-links-"+this.options.instanceName+"-container",addButton:"internal-links-"+this.options.instanceName+"-add",configButton:"internal-links-"+this.options.instanceName+"-config",displayOption:"internal-links-"+this.options.instanceName+"-display-option",content:"internal-links-"+this.options.instanceName+"-content",chooseTab:"internal-links-"+this.options.instanceName+"-choose-tab",columnNavigation:"internal-links-"+this.options.instanceName+"-column-navigation"},this.sandbox.dom.html(this.$el,i.skeleton(this.options)),this.$container=this.sandbox.dom.find(j.call(this,"container"),this.$el),this.$content=this.sandbox.dom.find(j.call(this,"content"),this.$el),this.$addButton=this.sandbox.dom.find(j.call(this,"addButton"),this.$el),this.$configButton=this.sandbox.dom.find(j.call(this,"configButton"),this.$el),this.sandbox.dom.data(this.$el,"internal-links")){var a=this.sandbox.util.extend(!0,{},b,this.sandbox.dom.data(this.$el,"internal-links"));w.call(this,a)}else w.call(this,this.options.preselected);l.call(this),m.call(this),this.itemsVisible=this.options.visibleItems,this.URI={str:"",hasChanged:!1},x.call(this),y.call(this),r.call(this),v.call(this),o.call(this)},l=function(){var a=this.sandbox.translate(this.options.translations.noLinksSelected);this.sandbox.dom.html(this.$content,i.noContent(a))},m=function(){this.sandbox.on("husky.overlay.internal-links."+this.options.instanceName+".add.initialized",n.bind(this)),this.sandbox.on("husky.column-navigation.edit",function(a){-1===this.data.ids.indexOf(a.id)?this.data.ids.push(a.id):this.data.ids=this.data.ids.filter(function(b){return b!==a.id}),w.call(this,this.data),this.sandbox.logger.log("selected items",this.data.ids)}.bind(this)),this.sandbox.on(d.call(this),function(){x.call(this),v.call(this)}.bind(this)),this.sandbox.on(g.call(this),function(){p.call(this)}.bind(this))},n=function(){this.sandbox.start([{name:"column-navigation@husky",options:{el:j.call(this,"columnNavigation"),url:this.options.columnNavigationUrl,instanceName:this.options.instanceName,noPageDescription:"No Pages",sizeRelativeTo:".smart-content-overlay .slide-0 .overlay-content",wrapper:{height:100},editIcon:"fa-check",resultKey:this.options.resultKey,showEdit:!1,showStatus:!1}}])},o=function(){this.sandbox.dom.on(j.call(this,"displayOption"),"change",function(){w.call(this,{displayOption:this.sandbox.dom.val(j.call(this,"displayOption"))}),this.sandbox.emit(e.call(this),this.data,this.$el)}.bind(this))},p=function(){if(0!==this.items.length){for(var a=this.sandbox.dom.createElement('<ul class="items-list"/>'),b=-1,c=this.items.length;++b<c&&b<this.itemsVisible;)this.sandbox.dom.append(a,i.contentItem(this.items[b][this.options.idKey],b+1,this.items[b][this.options.titleKey]));this.sandbox.dom.html(this.$content,a),q.call(this)}else l.call(this),u.call(this)},q=function(){this.itemsVisible=this.items.length<this.itemsVisible?this.items.length:this.itemsVisible,(null===this.$footer||void 0===this.$footer)&&(this.$footer=this.sandbox.dom.createElement('<div class="smart-footer"/>')),this.sandbox.dom.html(this.$footer,["<span>","<strong>"+this.itemsVisible+" </strong>",this.sandbox.translate(this.options.translations.of)," ","<strong>"+this.items.length+" </strong>",this.sandbox.translate(this.options.translations.visible),"</span>"].join("")),this.sandbox.dom.append(this.$container,this.$footer)},r=function(){var a=this.sandbox.dom.createElement("<div/>");this.sandbox.dom.append(this.$el,a),this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$addButton,cssClass:"internal-links-overlay",el:a,container:this.$el,instanceName:"internal-links."+this.options.instanceName+".add",skin:"wide",slides:[{title:this.sandbox.translate(this.options.translations.addLinks),okCallback:s.bind(this),cssClass:"internal-links-overlay-add",data:i.data(this.options)}]}}])},s=function(){this.sandbox.emit(d.call(this))},t=function(){u.call(this);var a=this.sandbox.dom.createElement('<div class="loader"/>');this.sandbox.dom.html(this.$content,a),this.sandbox.start([{name:"loader@husky",options:{el:a,size:"100px",color:"#e4e4e4"}}])},u=function(){null!==this.$footer&&this.sandbox.dom.remove(this.$footer)},v=function(){if(this.URI.hasChanged===!0){var a=function(a){this.items=a._embedded[this.options.resultKey]||[],this.sandbox.emit(g.call(this))}.bind(this);this.sandbox.emit(f.call(this)),t.call(this),this.itemsVisible=this.options.visibleItems,this.data.ids&&this.data.ids.length>0?this.sandbox.util.load(this.URI.str).then(a.bind(this)).then(function(a){this.sandbox.logger.log(a)}.bind(this)):a.call(this,{})}},w=function(a){for(var b in a)a.hasOwnProperty(b)&&(this.data[b]=a[b]);this.sandbox.dom.data(this.$el,"internal-links",this.data)},x=function(){var a=-1===this.options.url.indexOf("?")?"?":"&",b=[this.options.url,a,this.options.idsParameter,"=",(this.data.ids||[]).join(",")].join("");b!==this.URI.str?(""!==this.URI.str&&this.sandbox.emit(e.call(this),this.data,this.$el),this.URI.str=b,this.URI.hasChanged=!0):this.URI.hasChanged=!1},y=function(){this.sandbox.dom.val(j.call(this,"displayOption"),this.data.displayOption)};return{historyClosed:!0,initialize:function(){this.options=this.sandbox.util.extend({},a,this.options),this.data={},k.call(this)}}});