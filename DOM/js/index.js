class Menu extends React.Component {

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
                            "Menu",
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
                        React.createElement("input", { type: "text", id: "ResponsiveMenu1-submenu" }),
                        React.createElement(
                            "ul",
                            { className: "ResponsiveMenu1", id: "ResponsiveMenu1" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "http://" },
                                    "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "http://" },
                                    "\u041E\xA0\u043D\u0430\u0441"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "http://" },
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

ReactDOM.render(React.createElement(Menu, null), document.getElementById("menu"));
