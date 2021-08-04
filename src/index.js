import React,{Component} from './lib/react.js';
import ReactDOM from './lib/react-dom.js';

class Menu extends React.Component{
    render(){
        return <h1>menu {this.props.title}</h1>
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'jkl'
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            title:'poi'
        })
    }
    render(){
        return(
            <div>
                <Menu title={this.state.title}/>
                <h1>{this.state.title}</h1>
                <p>{this.props.id}</p>
                <span onClick={this.handleClick.bind(this)}>hello</span>
            </div>
        );
    }
}

ReactDOM.render((
<App id="app">hello</App>
),document.body);



// function clickMe(){
//     console.log('click Me');
// }

// let styleObj={
//     color:'blue',
//     fontSize:'20px'
// }

// let div = (<h1 className="hello" id="header" onClick={ clickMe } style={ styleObj } dataId="hello">
//     <span>hello</span>
//     <span>world</span>
// </h1>);

// console.log(div);

// ReactDOM.render(div, document.body);