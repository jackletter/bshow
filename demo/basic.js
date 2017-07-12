var config =
{
    body: [
        {
            id: "MapPanel",
            zIndex: 1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: 1,
            style: {
                "background-color": "pink"
            }
        },
        {
            id: "TopPanel",
            zIndex: 2,
            top: 0,
            left: 0,
            height: 100,
            right: 0,
            opacity: 0.5,
            style: {
                "background-color": "silver"
            },
            content: "TopPanel",
            children: [
                {
                    id: "Top-Left",
                    zIndex: 2,
                    top: 0,
                    left: 0,
                    height: 100,
                    width: 300,
                    opacity: 0.5,
                    style: {
                        "background-color": "yellow"
                    },
                    content: "Top-Left"
                },
                {
                    id: "Top-Right",
                    zIndex: 2,
                    top: 0,
                    right: 0,
                    height: 100,
                    width: 180,
                    opacity: 0.5,
                    style: {
                        "background-color": "green"
                    },
                    content: "Top-Right"
                }
            ]
        },
        {
            id: "LeftPanel",
            zIndex: 2,
            top: 110,
            left: 0,
            bottom: 0,
            width: 200,
            opacity: 0.7,
            style: {
                "background-color": "yellow"
            },
            content: "LeftPanel"
        },
        {
            id: "BottomPanel",
            zIndex: 2,
            left: 210,
            right: 0,
            bottom: 0,
            height: 200,
            opacity: 0.5,
            style: {
                "background-color": "blue"
            },
            content: "BottomPanel"
        },
        {
            id: "RightPanel",
            zIndex: 2,
            top: 110,
            right: 0,
            bottom: 0,
            width: 200,
            opacity: 0.5,
            style: {
                "background-color": "red"
            },
            content: "RightPanel"
        },
        {
            id: "CenterPanel",
            zIndex: 2,
            left: 220,
            right: 200,
            bottom: 120,
            top: 120,
            opacity: 0.5,
            style: {
                "background-color": "green"
            },
            content: "CenterPanel"
        }
    ]
}