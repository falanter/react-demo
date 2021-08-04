// import ReactDOM from "./react-dom.js";
import {renderComponent} from "./react-dom.js";

function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}
class Component{
    constructor(props){
        this.props=props;
        this.state={};
    }
    setState(newState){
        Object.assign(this.state,newState);
        console.log('hello')
        renderComponent(this);
    }
}
// const React = {
//     createElement,
//     Component
// }

export{
    createElement,
    Component
}
export default {
    createElement,
    Component
}