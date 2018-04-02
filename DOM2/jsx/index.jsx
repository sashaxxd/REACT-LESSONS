class Menu extends React.Component{
    constructor (props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {
            counter: 1,

        };
        this.buttonMenuClick = this.buttonMenuClick.bind(this);
        this.state = {

            isCardView1: false,
        };
    }

    buttonClick(){
        this.setState({counter: ++this.state.counter})
    };

    buttonMenuClick(){
        this.setState({ isCardView1: !this.state.isCardView1 })
    };

    render (){

        let x =
        <div id="LayoutGrid1">
            <div className="row">
                <div className="col-1">
                    <div id="site_ResponsiveMenu1">
                        <label className="toggle" htmlFor="ResponsiveMenu1-submenu" id="ResponsiveMenu1-title">
                            <Text  counter={this.state.id}/><ButtonMenu bbb={this.buttonMenuClick} vvv={this.state.isCardView1}/></label>
                        <input type="checkbox" id="ResponsiveMenu1-submenu"/>
                        <ul className="ResponsiveMenu1" id="ResponsiveMenu1">
                            <li><a href="#">&#1043;&#1083;&#1072;&#1074;&#1085;&#1072;&#1103;</a></li>
                            <li><a href="#">&#1054;&nbsp;&#1085;&#1072;&#1089;</a></li>
                            <li><a href="#">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1099;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;


        return <div id="site_LayoutGrid1">{x}<Button
        counter={this.state.counter}
        handler ={this.buttonClick}
        /><Text
            counter={this.state.counter}
        /></div>;
    }
}

class Button extends React.Component{
    render(){
        return <button
            onClick={this.props.handler}
        >НАЖАТЬ {this.props.counter}</button>
    }
}

class ButtonMenu extends React.Component{
    render(){
        let indents = [];


        for(let i =0; i <3; i++){
            indents.push(<span key={i}>&nbsp;</span>);
        }
        let sp = <span id="ResponsiveMenu1-icon" onClick={this.props.bbb}>


            {
                this.props.vvv
                    ? <span className="glyphicon glyphicon-remove-sign" />
                    : indents
            }


        </span>;
        return sp;
    }
}

class Text extends React.Component{
    render(){
        return <div

        >НАЖАТО {this.props.counter}</div>
    }
}

ReactDOM.render(
    <Menu/>,
    document.getElementById("menu")
);


// class IconButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isCardView: false,
//         }
//     }
//
//     render() {
//         return (
//             <a className="btn btn-primary" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
//                 { this.state.isCardView
//                     ? <span className="glyphicon glyphicon-remove-sign" />
//                     : <span className="glyphicon glyphicon-ok-sign" />
//                 }
//                 &nbsp;&nbsp;BUTTON
//             </a>
//         );
//     }
//
// }
//
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <IconButton />
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App/>,document.getElementById('root'));