var sp = React.createElement("span", {


});

var nav = React.createElement("span", {
    id: "ResponsiveMenu1-icon"

}, sp, sp, sp);

var label = React.createElement("label", {
    className: "toggle",
    htmlFor: "ResponsiveMenu1-submenu",
    id: "ResponsiveMenu1-title"

}, "МЕНЮ", nav);

var wb_ResponsiveMenu1 = React.createElement("div", {
    id: "wb_ResponsiveMenu1"
}, label);

var col1 = React.createElement("div", {
    id: "col-1"
}, wb_ResponsiveMenu1);

var row = React.createElement("div", {
    id: "row"
}, col1);

var LayoutGrid1 = React.createElement("div", {
    id: "LayoutGrid1"
}, row);




class Menu extends React.Component{
    render (){
        return React.createElement("div", {
            id: "wb_LayoutGrid1"
        }, LayoutGrid1);
    }
}

ReactDOM.render(
    React.createElement(Menu
    ),

    document.getElementById("menu")
)