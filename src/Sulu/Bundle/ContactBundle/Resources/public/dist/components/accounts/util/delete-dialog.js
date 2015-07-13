define(["sulucontact/model/account"],function(a){"use strict";var b={dialogEntityFoundTemplate:["<p><%= foundMessage %>:</p>",'<% if (typeof list !== "undefined") { %>',"<ul><%= list %></ul>","<% } %>",'<% if (typeof numChildren !== "undefined" && numChildren > 3 && typeof andMore !== "undefined") { %>',"<p><%= andMore %></p>","<% } %>","<p><%= description %></p>",'<% if (typeof checkboxText !== "undefined") { %>',"<p>",'   <label for="overlay-checkbox">','       <div class="custom-checkbox">','           <input type="checkbox" id="overlay-checkbox" class="form-element" />','           <span class="icon"></span>',"       </div>","       <%= checkboxText %>","</label>","</p>","<% } %>"].join("")},c=function(a,b){var c="/admin/api/accounts/"+a+"/deleteinfo";this.sandbox.util.ajax({headers:{"Content-Type":"application/json"},context:this,type:"GET",url:c,success:function(c){d.call(this,c,a,b)}.bind(this),error:function(a,b,c){this.sandbox.logger.error("error during get request: "+b,c)}.bind(this)})},d=function(a,c,d){if(d&&"function"!=typeof d)throw"callback is not a function";var f,g,h="contact.accounts.delete.desc",i="show-warning",j="sulu.overlay.be-careful",k=function(){var a=this.sandbox.dom.find("#overlay-checkbox").length&&this.sandbox.dom.prop("#overlay-checkbox","checked");d.call(this,!0,a)}.bind(this);parseInt(a.numChildren,10)>0?(f=a.numChildren-a.children.length,i="show-error",j="sulu.overlay.error",k=void 0,h=this.sandbox.util.template(b.dialogEntityFoundTemplate,{foundMessage:this.sandbox.translate("contact.accounts.delete.sub-found"),list:e.dependencyListAccounts.call(this,a.children),numChildren:parseInt(a.numChildren,10),andMore:this.sandbox.util.template(this.sandbox.translate("public.and-number-more"),{number:f}),description:this.sandbox.translate("contact.accounts.delete.sub-found-desc")})):parseInt(a.numContacts,10)>0&&(g=a.numContacts-a.contacts.length,h=this.sandbox.util.template(b.dialogEntityFoundTemplate,{foundMessage:this.sandbox.translate("contact.accounts.delete.contacts-found"),list:e.dependencyListContacts.call(this,a.contacts),numChildren:parseInt(a.numContacts,10),andMore:this.sandbox.util.template(this.sandbox.translate("public.and-number-more"),{number:g}),description:this.sandbox.translate("contact.accounts.delete.contacts-question"),checkboxText:this.sandbox.util.template(this.sandbox.translate("contact.accounts.delete.contacts-checkbox"),{number:parseInt(a.numContacts,10)})})),this.sandbox.emit("sulu.overlay."+i,j,h,d.bind(this,!1),k)},e={dependencyListContacts:function(a){var b="<% _.each(contacts, function(contact) { %> <li><%= contact.firstName %> <%= contact.lastName %></li> <% }); %>";return this.sandbox.template.parse(b,{contacts:a})},dependencyListAccounts:function(a){var b="<% _.each(accounts, function(account) { %> <li><%= account.name %></li> <% }); %>";return this.sandbox.template.parse(b,{accounts:a})}},f=function(a,b){a&&(this.sandbox.emit("sulu.header.toolbar.item.loading","options-button"),this.account.destroy({data:{removeContacts:!!b},processData:!0,success:function(){this.recordRemove&&this.sandbox.emit("husky.datagrid.accounts.record.remove",this.account.get("id")),this.sandbox.emit("sulu.router.navigate","contacts/accounts")}.bind(this)}))},g=function(a,c,d){if(d&&"function"!=typeof d)throw"callback is not a function";var e="contact.accounts.delete.desc",f="sulu.overlay.be-careful",g="show-warning",h=function(){var a=this.sandbox.dom.find("#delete-contacts").length&&this.sandbox.dom.prop("#delete-contacts","checked");d(!0,a)}.bind(this);parseInt(a.numChildren,10)>0?(g="show-error",f="sulu.overlay.error",h=void 0,e=this.sandbox.util.template(b.dialogEntityFoundTemplate,{foundMessage:this.sandbox.translate("contact.accounts.delete.sub-found"),description:this.sandbox.translate("contact.accounts.delete.sub-found-desc")})):parseInt(a.numContacts,10)>0&&(e=this.sandbox.util.template(b.dialogEntityFoundTemplate,{foundMessage:this.sandbox.translate("contact.accounts.delete.contacts-found"),numChildren:parseInt(a.numContacts,10),description:this.sandbox.translate("contact.accounts.delete.contacts-question"),checkboxText:this.sandbox.util.template(this.sandbox.translate("contact.accounts.delete.contacts-checkbox"),{number:parseInt(a.numContacts,10)})})),this.sandbox.emit("sulu.overlay."+g,f,e,d.bind(this,!1),h)},h=function(b,c){b&&this.ids.forEach(function(b){var d=a.findOrCreate({id:b});d.destroy({data:{removeContacts:!!c},processData:!0,success:function(){this.sandbox.emit("husky.datagrid.accounts.record.remove",b)}.bind(this)})}.bind(this))};return{showForSingle:function(a,b,d,e){a&&b&&d&&(this.sandbox=a,this.account=b,this.recordRemove=e,c.call(this,d,f.bind(this)))},showForMultiple:function(a,b){if(a&&b){this.sandbox=a,this.ids=b;var c="/admin/api/accounts/multipledeleteinfo";this.sandbox.util.ajax({headers:{"Content-Type":"application/json"},context:this,type:"GET",url:c,data:{ids:b},success:function(a){g.call(this,a,b,h.bind(this))}.bind(this),error:function(a,b,c){this.sandbox.logger.error("error during get request: "+b,c)}.bind(this)})}}}});