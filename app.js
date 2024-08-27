const parent =React.createElement("div",
        {id:"parent"},
        [
        React.createElement("div",{id:"child1"},
                [React.createElement("h1",{},"Nested H1 Tag"),
                React.createElement("h2",{},"Nested H2 Tag")
                ]),
                React.createElement("div",{id:"child2"},
               [React.createElement("h1",{},"Nested H1 Tag"),
                React.createElement("h2",{},"Nested H2 Tag")
                ])
        ]
)





        console.log(parent);
        
        const root= ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)