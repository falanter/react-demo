import React from "./react.js";
function setAttribute(node, attrs) {
    if (!attrs) return;
    for (let key in attrs) {
        if (key.startsWith('on')) {
            node[key.toLocaleLowerCase()] = attrs[key];
        } else if (key === 'style') {
            Object.assign(node.style, attrs[key]);
        } else {
            node[key] = attrs[key];
        }
    }
}


function renderVdom(vdom, container) {
    let node=createDomfromVdom(vdom)
    container.appendChild(node);
}

function createDomfromVdom(vdom){
    let node;
    if (typeof vdom === 'string') {
        node = document.createTextNode(vdom);
        return node;
    }
    if (typeof vdom === 'object') {
        if(typeof vdom.tag==='function'){
            // let component=new vdom.tag(vdom.attrs);
            let component=getComponent(vdom.tag,vdom.attrs);
            let vnode=component.renderVdom();
            node=createDomfromVdom(vnode);
            component.$root=node;
        }else{
            node = document.createElement(vdom.tag);
            setAttribute(node,vdom.attrs);
            vdom.children.forEach(childVdom => renderVdom(childVdom, node)); 
        }
    }
    return node;
}

function getComponent(constructor,attrs){
    if(constructor.prototype instanceof React.Component){
        return new constructor(attrs);
    }else{
        let App=class extends React.Component{}
        App.prototype.render=function(){
            return constructor(attrs)
        }
        return new App(attrs)
    }
}

function renderComponent(component){
    let vdom=component.render();
    let node=createDomfromVdom(vdom);
    if(component.$root){
        component.$root.parentNode.replaceChild(node,component.$root);    //(new,old)
    }
    console.log('render')
}

function render(vdom, container){
    container.innerHTML = '';
    render(vdom, container);
}


export{
    render,
    renderComponent
};
export default{
    render,
    renderComponent
};

// function createComponent(constructor,attrs){
//     return new constructor(attrs);
// }

// export default ReactDOM;

