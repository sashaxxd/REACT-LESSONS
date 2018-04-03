class Menu extends React.Component{
    constructor (props){
        super(props);

        this.buttonMenuClick = this.buttonMenuClick.bind(this);

        this.state = {

            isCardView1: false,
        };


    }


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
                           Меню <ButtonMenu  StateButton={this.state.isCardView1}/></label>
                        <Input updateStateButton={this.buttonMenuClick}  />
                        <ul className="ResponsiveMenu1" id="ResponsiveMenu1">
                            <li><a href="#">&#1043;&#1083;&#1072;&#1074;&#1085;&#1072;&#1103;</a></li>
                            <li><a href="#">&#1054;&nbsp;&#1085;&#1072;&#1089;</a></li>
                            <li><a href="#">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1099;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;


        return <div id="site_LayoutGrid1">{x}</div>;
    }
}




class Input extends React.Component{
    render(){
        return <input type="checkbox" id="ResponsiveMenu1-submenu" onClick={this.props.updateStateButton}/>;
    }
}

class ButtonMenu extends React.Component{
    render(){
        let indents = [];


        for(let i =0; i <3; i++){
            indents.push(<span key={i}>&nbsp;</span>);
        }
        let sp = <span id="ResponsiveMenu1-icon" >


            {
                this.props.StateButton
                    ? <div><div className="m_close" /></div>
                    : indents
            }


        </span>;
        return sp;
    }
}



ReactDOM.render(
    <Menu/>,
    document.getElementById("menu")
);


