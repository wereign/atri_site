import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Link1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "color": "#000000",
        "fontWeight": 400,
        "paddingRight": "0px",
        "overflow": "visible",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "paddingRight": "0px"
      },
      "custom": {
        "text": "Portfolio",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Contact": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "paddingRight": "0px"
      },
      "custom": {
        "text": "Link",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-around"
      },
      "callbacks": {}
    },
    "Link8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "500px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300
      },
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": ""
      },
      "custom": {
        "text": "Portfolio",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": ""
      },
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_Bar": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-around",
        "flexDirection": "row",
        "alignContent": "stretch",
        "flexWrap": "nowrap",
        "position": "sticky",
        "paddingTop": "10px"
      },
      "callbacks": {}
    },
    "TextBox7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingRight": "",
        "marginRight": "30px",
        "outlineWidth": "0px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "fontSize": "",
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "borderRadius": "",
        "position": "static"
      },
      "custom": {
        "values": [
          "Pages",
          "Home V2",
          "Home V3",
          "Blog V1",
          "Blog V2",
          "Blog V2"
        ],
        "selectedValue": "Pages"
      },
      "callbacks": {}
    },
    "TextBox8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "paddingLeft": "",
        "marginLeft": "15px",
        "fontSize": "250%"
      },
      "custom": {
        "text": "I'm Sam ,and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "paddingLeft": "",
        "marginLeft": "15px",
        "fontSize": "250%"
      },
      "custom": {
        "text": " user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Intro_Box": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "baseline",
        "paddingTop": "",
        "paddingBottom": "",
        "paddingLeft": "50px",
        "marginLeft": "60px",
        "marginTop": "100px",
        "marginBottom": "30px",
        "left": 0,
        "position": "relative"
      },
      "callbacks": {}
    },
    "TextBox10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 700,
        "paddingBottom": "10px",
        "paddingLeft": "",
        "marginLeft": "15px",
        "fontSize": "150%"
      },
      "custom": {
        "text": "----------------"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#716666",
        "marginLeft": "15px",
        "outlineOffset": "px",
        "fontSize": "120%",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#716666",
        "marginLeft": "15px",
        "fontSize": "120%",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": " eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#716666",
        "marginLeft": "15px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "120%"
      },
      "custom": {
        "text": "minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "textAlign": "center",
        "fontFamily": "",
        "fontSize": "25px",
        "color": "#9b9595",
        "outlineColor": "",
        "marginBottom": "60px"
      },
      "custom": {
        "text": "______________________________________________________________________________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "past_projects": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Carousel1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "250%",
        "marginBottom": "45px"
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card1": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row"
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "TextBox16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "100%",
        "paddingTop": "",
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "App X  -  Web Design     "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "150%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "Wesbite Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "textAlign": "left",
        "wordWrap": "normal",
        "overflow": "visible",
        "boxSizing": "content-box",
        "clear": "both",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "scroll",
        "width": "500px",
        "paddingTop": "5px"
      },
      "custom": {
        "text": "Lorem Ipsum is commonly used but where is the creativity? Why not use your own brain to jusy give out random words?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "height": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/kick.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Link11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "App Y - Designing Pasta"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Pasta Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Red Sauce Pasta is the best, especially if you have lactose intolerance and can't eat cheese"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "textAlign": "left",
        "wordWrap": "normal",
        "overflow": "visible",
        "boxSizing": "content-box",
        "clear": "both",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "scroll",
        "width": "500px",
        "paddingTop": "5px"
      },
      "custom": {
        "text": "Lorem Ipsum is commonly used but where is the creativity? Why not use your own brain to jusy give out random words?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "150%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "Wesbite Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "100%",
        "paddingTop": "",
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "App X  -  Web Design     "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "textAlign": "left",
        "wordWrap": "normal",
        "overflow": "visible",
        "boxSizing": "content-box",
        "clear": "both",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "scroll",
        "width": "500px",
        "paddingTop": "5px"
      },
      "custom": {
        "text": "Lorem Ipsum is commonly used but where is the creativity? Why not use your own brain to jusy give out random words?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "150%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "Wesbite Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "100%",
        "paddingTop": "",
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "App X  -  Web Design     "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "textAlign": "left",
        "wordWrap": "normal",
        "overflow": "visible",
        "boxSizing": "content-box",
        "clear": "both",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "scroll",
        "width": "500px",
        "paddingTop": "5px"
      },
      "custom": {
        "text": "Lorem Ipsum is commonly used but where is the creativity? Why not use your own brain to jusy give out random words?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "150%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "Wesbite Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "100%",
        "paddingTop": "",
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "App X  -  Web Design     "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Image7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "height": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/kick.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row"
      },
      "callbacks": {}
    },
    "Button2": {
      "styles": {
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "",
        "marginTop": "30px",
        "fontFamily": "IBM Plex Sans",
        "left": 900,
        "position": "relative"
      },
      "custom": {
        "text": "Visit Portfolio ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Visit Project ↗",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "textAlign": "left",
        "wordWrap": "normal",
        "overflow": "visible",
        "boxSizing": "content-box",
        "clear": "both",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "scroll",
        "width": "500px",
        "paddingTop": "5px"
      },
      "custom": {
        "text": "Lorem Ipsum is commonly used but where is the creativity? Why not use your own brain to jusy give out random words?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "150%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "Wesbite Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "100%",
        "paddingTop": "",
        "paddingBottom": "10px"
      },
      "custom": {
        "text": "App X  -  Web Design     "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Image8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "height": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/kick.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "Link8": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "paddingLeft": "30px"
        }
      },
      "Link9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Menu_Bar": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Dropdown2": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "marginRight": "15px"
        }
      }
    },
    "767": {
      "Link1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Link8": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "paddingLeft": "300px"
        }
      },
      "Link9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "991": {
      "Link1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Link8": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Link9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
