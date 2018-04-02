class Menu extends React.Component{
    constructor (props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {
            counter: 0,

        }
    }

    buttonClick(){
        this.setState({counter: ++this.state.counter})
    };

    render (){

        let x =
        <div id="LayoutGrid1">
            <div className="row">
                <div className="col-1">
                    <div id="site_ResponsiveMenu1">
                        <label className="toggle" htmlFor="ResponsiveMenu1-submenu" id="ResponsiveMenu1-title"><Text  counter={this.state.counter}/><span id="ResponsiveMenu1-icon"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></span></label>
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