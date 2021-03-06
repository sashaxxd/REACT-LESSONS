class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.buttonMenuClick = this.buttonMenuClick.bind(this);

        this.state = {

            isCardView1: false
        };
    }

    buttonMenuClick() {
        this.setState({ isCardView1: !this.state.isCardView1 });
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
                            "\u041C\u0435\u043D\u044E ",
                            React.createElement(ButtonMenu, { StateButton: this.state.isCardView1 })
                        ),
                        React.createElement(Input, { updateStateButton: this.buttonMenuClick }),
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
            x
        );
    }
}

class Input extends React.Component {
    render() {
        return React.createElement("input", { type: "checkbox", id: "ResponsiveMenu1-submenu", onClick: this.props.updateStateButton });
    }
}

class ButtonMenu extends React.Component {
    render() {
        let indents = [];

        for (let i = 0; i < 3; i++) {
            indents.push(React.createElement(
                "span",
                { key: i },
                "\xA0"
            ));
        }
        let sp = React.createElement(
            "span",
            { id: "ResponsiveMenu1-icon" },
            this.props.StateButton ? React.createElement(
                "div",
                null,
                React.createElement("div", { className: "m_close" })
            ) : indents
        );
        return sp;
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById("menu"));
