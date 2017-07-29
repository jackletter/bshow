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
            resizeLeft: true,
            resizeRight: true,
            resizeTop: true,
            resizeBottom:  {
                "height": "8px",
                "background-color": "#666"
            },
            style: {
                "background-color": "silver"
            },
            content: "TopPanel",
            //children: [
            //	{
            //	    id: "Top-Left",
            //	    zIndex: 2,
            //	    top: 2,
            //	    left: 2,
            //	    height: 96,
            //	    width: 300,
            //	    opacity: 1,
            //	    style: {
            //	        "background-color": "yellow"
            //	    },
            //	    content: "Top-Left"
            //	},
            //	{
            //	    id: "Top-Right",
            //	    zIndex: 2,
            //	    top: 2,
            //	    right: 0,
            //	    height: 96,
            //	    width: 180,
            //	    opacity: 1,
            //	    style: {
            //	        "background-color": "green"
            //	    },
            //	    content: "Top-Right"
            //	},
            //	{
            //	    id: "Top-Center",
            //	    zIndex: 2,
            //	    top: 2,
            //	    leftLink: "Top-Left",
            //	    height: 96,
            //	    rightLink: "Top-Right",
            //	    opacity: 1,
            //	    style: {
            //	        "background-color": "red"
            //	    },
            //	    content: "Top-Center"
            //	}
            //]
        },
        {
            id: "LeftPanel",
            zIndex: 2,
            topLink: "TopPanel",
            left: 0.5,
            bottom: 0,
            width: 200,
            opacity: 1,
            resizeTop: true,
            resizeLeft: true,
            resizeRight: true,
            resizeBottom: true,
            style: {
                "background-color": "yellow"
            },
            content: "LeftPanel"
        },
        {
            id: "BottomPanel",
            zIndex: 2,
            leftLink: "LeftPanel",
            right: 0,
            bottom: 0,
            height: 200,
            resizeTop: true,
            resizeLeft: true,
            resizeRight: true,
            resizeBottom: true,
            opacity: 0.5,
            style: {
                "background-color": "blue"
            },
            content: "BottomPanel"
        }
        ,
        {
            id: "RightPanel",
            zIndex: 2,
            topLink: "TopPanel",
            right: 0,
            bottomLink: "BottomPanel",
            width: 200,
            opacity: 0.5,
            resizeTop: true,
            resizeLeft: true,
            resizeRight: true,
            resizeBottom: true,
            //resizeLeft: true,
            style: {
                "background-color": "red"
            },
            content: "RightPanel"
        },
        {
            id: "CenterPanel",
            zIndex: 2,
            leftLink: "LeftPanel 10,LeftPanel 20",
            rightLink: "RightPanel 10",
            bottomLink: "BottomPanel 10",
            topLink: "TopPanel 10,TopPanel 10",
            resizeRight: true,
            resizeBottom: true,
            resizeLeft: true,
            resizeTop: true,
            opacity: 0.5,
            style: {
                "background-color": "green"
            }
        },
        {
            id: "Center2Panel",
            zIndex: 3,
            leftUse: "BottomPanel",
            rightUse: "CenterPanel",
            topUse: "LeftPanel",
            bottomUse: "RightPanel",
            opacity: 0.8,
            style: {
                "background-color": "silver"
            }
        }
    ]
}