(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(18),n(13)),s=n(2),u=n(4),l=n(5),d=n(7),b=n(6),m=(n(11),n(3)),h=n(9),j=n.n(h),f=n(23),O=n(0),p=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).contactNameID=Object(f.a)(),t.contactNumberID=Object(f.a)(),t.state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(f.a)(),name:a,number:c};t.props.addContact(r),t.resetForm()},t.resetForm=function(){t.setState(Object(s.a)({},t.state))},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.ContactNameID,c=this.contactNumberID,r=this.handleSubmit,o=this.handleChange,i=this.onAddContact;return Object(O.jsx)("form",{onSubmit:r,children:Object(O.jsxs)("div",{className:j.a.contact_form_container,children:[Object(O.jsx)("label",{htmlFor:a,children:"Contact name"}),Object(O.jsx)("input",{id:a,type:"text",name:"name",placeholder:"Enter contact name ...",onChange:o,value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(O.jsx)("label",{htmlFor:c,children:"Contact number"}),Object(O.jsx)("input",{id:c,type:"tel",name:"number",placeholder:"Enter contact number ...",onChange:o,value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(O.jsx)("button",{type:"submit",className:j.a.contact_add_btn,onClick:i,disabled:!e||n.length<5,children:"Add contact"})]})})}}]),n}(a.Component);n(20);function C(t){var e=t.value,n=t.onFilterChange;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Find contact by name"}),Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})})}n(21);function v(t){var e=t.state,n=t.onListChange;return console.log("state :>> ",e),Object(O.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{children:[e,": ",a]}),Object(O.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"Delete number"})]},Object(f.a)())}))})}var x={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},x),t.addContact=function(e){t.state.contacts.map((function(t){return t.name})).includes(e.name)?alert("".concat(e.name," is in your contacts list already")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.filterChange=function(e){t.setState({filter:e.target.value})},t.filteredItems=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteItem=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.addContact,c=this.filterChange,r=this.filteredItems,o=this.deleteItem;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"PhoneBook"}),Object(O.jsx)(p,{addContact:a,contacts:n}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{value:e,onFilterChange:c}),Object(O.jsx)(v,{state:r(),onListChange:o})]})]})}}]),n}(a.Component),_=g;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contact_form_container:"ContactForm_contact_form_container__2uOIb",contact_add_btn:"ContactForm_contact_add_btn__1SQMs"}}},[[22,1,2]]]);
//# sourceMappingURL=main.3bafe46a.chunk.js.map