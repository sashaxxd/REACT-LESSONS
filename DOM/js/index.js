class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {
            counter: 0

        };
    }

    buttonClick() {
        this.setState({ counter: ++this.state.counter });
    }

    render() {

        let x = React.createElement(
            "div",
            { id: "LayoutGrid1" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-1" },
                    React.createElement(
                        "div",
                        { id: "site_ResponsiveMenu1" },
                        React.createElement(
                            "label",
                            { className: "toggle", htmlFor: "ResponsiveMenu1-submenu", id: "ResponsiveMenu1-title" },
                            React.createElement(Text, { counter: this.state.counter }),
                            React.createElement(
                                "span",
                                { id: "ResponsiveMenu1-icon" },
                                React.createElement(
                                    "span",
                                    null,
                                    "\xA0"
                                ),
                                React.createElement(
                                    "span",
                                    null,
                                    "\xA0"
                                ),
                                React.createElement(
                                    "span",
                                    null,
                                    "\xA0"
                                )
                            )
                        ),
                        React.createElement("input", { type: "checkbox", id: "ResponsiveMenu1-submenu" }),
                        React.createElement(
                            "ul",
                            { className: "ResponsiveMenu1", id: "ResponsiveMenu1" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "\u041E\xA0\u043D\u0430\u0441"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                                )
                            )
                        )
                    )
                )
            )
        );

        return React.createElement(
            "div",
            { id: "site_LayoutGrid1" },
            x,
            React.createElement(Button, {
                counter: this.state.counter,
                handler: this.buttonClick
            }),
            React.createElement(Text, {
                counter: this.state.counter
            })
        );
    }
}

class Button extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                onClick: this.props.handler
            },
            "\u041D\u0410\u0416\u0410\u0422\u042C ",
            this.props.counter
        );
    }
}

class Text extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "\u041D\u0410\u0416\u0410\u0422\u041E ",
            this.props.counter
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById("menu"));
