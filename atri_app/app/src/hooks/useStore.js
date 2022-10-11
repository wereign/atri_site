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
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 700,
        "fontSize": "175%"
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
        "paddingLeft": "",
        "marginLeft": "",
        "marginTop": "100px",
        "marginBottom": "30px",
        "left": 0,
        "position": "relative",
        "boxSizing": "border-box",
        "alignContent": "space-around",
        "flexWrap": "wrap",
        "width": "100%"
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
    "Link17": {
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
    "TextBox38": {
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
    "TextBox39": {
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
    "TextBox40": {
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
    "Link18": {
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
    "TextBox41": {
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
    "TextBox42": {
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
    "TextBox43": {
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
    "Link19": {
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
    "TextBox44": {
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
    "TextBox45": {
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
    "TextBox46": {
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
    "Carousel11": {
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
    "Div11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Image11": {
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
    "Link20": {
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
    "TextBox47": {
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
    "TextBox48": {
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
    "TextBox49": {
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
    "TextBox50": {
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
    "TextBox51": {
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
    "TextBox52": {
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
    "Link21": {
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
    "Image13": {
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
    "Div13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Carousel13": {
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
    "Flex25": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row",
        "borderRadius": "",
        "width": "95%",
        "position": "relative",
        "left": 20,
        "outlineStyle": "solid",
        "outlineWidth": "0.1px",
        "outlineColor": "#0e0d0d",
        "float": "right"
      },
      "callbacks": {}
    },
    "Carousel14": {
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
    "Flex26": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row",
        "borderRadius": "",
        "width": "95%",
        "position": "relative",
        "left": 20,
        "outlineStyle": "solid",
        "outlineWidth": "0.1px",
        "outlineColor": "#0e0d0d",
        "float": "right"
      },
      "callbacks": {}
    },
    "Flex27": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox56": {
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
    "TextBox57": {
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
    "TextBox58": {
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
    "Link23": {
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
    "Card_Container": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "space-between",
        "alignContent": "center",
        "rowGap": "75px",
        "paddingBottom": ""
      },
      "callbacks": {}
    },
    "TextBox59": {
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
    "TextBox60": {
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
    "TextBox61": {
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
    "Link24": {
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
    "Image16": {
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
    "Div16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Carousel16": {
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
    "Flex30": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row",
        "borderRadius": "",
        "width": "95%",
        "position": "relative",
        "left": 20,
        "outlineStyle": "solid",
        "outlineWidth": "0.1px",
        "outlineColor": "#0e0d0d",
        "float": "right"
      },
      "callbacks": {}
    },
    "TextBox62": {
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
    "TextBox63": {
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
    "TextBox64": {
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
    "Link25": {
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
    "Image17": {
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
    "Div17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Carousel17": {
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
    "Flex31": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row",
        "borderRadius": "",
        "width": "95%",
        "position": "relative",
        "left": 20,
        "outlineStyle": "solid",
        "outlineWidth": "0.1px",
        "outlineColor": "#0e0d0d",
        "float": "right"
      },
      "callbacks": {}
    },
    "TextBox65": {
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
    "TextBox66": {
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
    "TextBox67": {
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
    "Link26": {
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
    "TextBox68": {
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
    "TextBox69": {
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
    "TextBox70": {
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
    "Link27": {
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
    "Image19": {
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
    "Div19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Carousel19": {
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
    "Flex33": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "row",
        "borderRadius": "",
        "width": "95%",
        "position": "relative",
        "left": 20,
        "outlineStyle": "solid",
        "outlineWidth": "0.1px",
        "outlineColor": "#0e0d0d",
        "float": "right"
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox71": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "300px"
      },
      "custom": {
        "text": "___________________________________________________________________________________________________________________________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox74": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "clear": "left",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "textAlign": "left",
        "wordWrap": "break-word",
        "fontSize": "250%",
        "width": "35%",
        "paddingLeft": "",
        "position": "relative",
        "left": 250
      },
      "custom": {
        "text": "Who's behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#4e4b4b",
        "fontSize": "125%",
        "width": "40%",
        "position": "relative",
        "left": 250
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex37": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "flexWrap": "wrap"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "row",
        "paddingTop": "70px"
      },
      "callbacks": {}
    },
    "Flex39": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "",
        "marginTop": "100px"
      },
      "callbacks": {}
    },
    "Image22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "position": "relative",
        "right": 100
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/s1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "left": 250,
        "top": 20,
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "150%"
      },
      "custom": {
        "text": "About Me ↗",
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
    "Flex40": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginTop": "300px",
        "alignItems": "center",
        "top": null,
        "position": "relative",
        "left": 30
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "__________________________________________________________________________________________________________________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex41": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "width": "80%",
        "paddingTop": "100px"
      },
      "callbacks": {}
    },
    "TextBox77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "fontSize": "200%"
      },
      "custom": {
        "text": "My work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "color": "#040303",
        "fontWeight": 600,
        "fontSize": "150%"
      },
      "custom": {
        "text": "Browse Resume ↗",
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
    "Image48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "55%"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex74": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "left": 10,
        "position": "relative"
      },
      "callbacks": {}
    },
    "Flex75": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "position": "relative",
        "right": null
      },
      "callbacks": {}
    },
    "Flex76": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%"
      },
      "callbacks": {}
    },
    "Flex77": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "left": 10,
        "position": "relative"
      },
      "callbacks": {}
    },
    "Flex78": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "position": "relative",
        "right": null
      },
      "callbacks": {}
    },
    "Flex79": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%"
      },
      "callbacks": {}
    },
    "Flex80": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "static",
        "left": null,
        "right": null,
        "top": null,
        "bottom": null,
        "paddingLeft": "",
        "marginLeft": "10px",
        "marginRight": "10px",
        "width": "",
        "height": ""
      },
      "callbacks": {}
    },
    "Flex81": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "static",
        "left": null,
        "right": null,
        "top": null,
        "bottom": null,
        "paddingLeft": "",
        "marginLeft": "10px",
        "marginRight": "10px",
        "width": "",
        "height": ""
      },
      "callbacks": {}
    },
    "Flex82": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "position": "relative",
        "left": 70,
        "top": 40,
        "width": "",
        "height": ""
      },
      "callbacks": {}
    },
    "Flex93": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox176": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "115%",
        "marginLeft": "50px",
        "marginTop": "100px"
      },
      "custom": {
        "text": "Typography -- September 1,2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "155%",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "5 free hot typographies to download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "155%",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "115%",
        "marginLeft": "50px",
        "marginTop": "100px"
      },
      "custom": {
        "text": "Design -- September 1,2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex94": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "",
        "position": "relative",
        "left": 40
      },
      "callbacks": {}
    },
    "Image57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%",
        "paddingRight": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Design_2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%",
        "paddingRight": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Design_1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex95": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "",
        "position": "relative",
        "left": 40
      },
      "callbacks": {}
    },
    "TextBox180": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "40%",
        "paddingLeft": "",
        "marginLeft": "",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "text": "Browse for more articles ↗ "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "185%",
        "width": "45%",
        "position": "relative",
        "left": 100
      },
      "custom": {
        "text": "Articles and News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "%",
        "position": "relative",
        "left": 200
      },
      "custom": {
        "text": "_______________________________________________________________________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex96": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "45px"
      },
      "callbacks": {}
    },
    "Flex97": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "row",
        "marginBottom": "45px"
      },
      "callbacks": {}
    },
    "Flex98": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "flexDirection": "row"
      },
      "callbacks": {}
    },
    "Flex99": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "flexWrap": "nowrap",
        "alignContent": "stretch",
        "marginTop": "300px",
        "position": "relative",
        "left": 55
      },
      "callbacks": {}
    }
  },
  "components": {
    "Image25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "25%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "25%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "25%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "55%"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex58": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%"
      },
      "callbacks": {}
    },
    "Flex59": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "position": "relative",
        "right": null
      },
      "callbacks": {}
    },
    "Flex60": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "left": 10,
        "position": "relative"
      },
      "callbacks": {}
    },
    "TextBox119": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%"
      },
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "50%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex66": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%"
      },
      "callbacks": {}
    },
    "Flex67": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "position": "relative",
        "right": null
      },
      "callbacks": {}
    },
    "Flex68": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "65%",
        "left": 10,
        "position": "relative"
      },
      "callbacks": {}
    },
    "TextBox137": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "12%",
        "fontSize": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "__________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "12%",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "color": "#3d3b3b",
        "width": "60%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex83": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex84": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "width": "80%",
        "flexDirection": "row",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox164": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "11%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "Articles & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "width": "15%"
      },
      "custom": {
        "text": "Browse more articles ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex85": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "67%",
        "paddingLeft": "",
        "marginLeft": "80px",
        "marginTop": "100px",
        "marginRight": ""
      },
      "callbacks": {}
    },
    "TextBox166": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "color": "#514e4e",
        "fontSize": "115%"
      },
      "custom": {
        "text": "Design - September 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "155%"
      },
      "custom": {
        "text": "What did I learn from 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex86": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginRight": "30px"
      },
      "callbacks": {}
    },
    "Image54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "position": "relative",
        "right": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Design_1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex87": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "flexWrap": "nowrap",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex88": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "flexDirection": "row"
      },
      "callbacks": {}
    },
    "Flex89": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "row",
        "marginBottom": "45px"
      },
      "callbacks": {}
    },
    "TextBox168": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "115%",
        "marginLeft": "50px",
        "marginTop": "100px"
      },
      "custom": {
        "text": "Design -- September 1,2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "155%",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex90": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "",
        "position": "relative",
        "left": 40
      },
      "callbacks": {}
    },
    "Image55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%",
        "paddingRight": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Design_1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "185%",
        "width": "45%",
        "position": "relative",
        "left": 100
      },
      "custom": {
        "text": "Articles and News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "125%",
        "width": "40%",
        "paddingLeft": "",
        "marginLeft": "",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "text": "Browse for more articles ↗ "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "155%",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "5 free hot typographies to download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "75%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "115%",
        "marginLeft": "50px",
        "marginTop": "100px"
      },
      "custom": {
        "text": "Typography -- September 1,2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%",
        "paddingRight": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Design_2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex91": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "",
        "position": "relative",
        "left": 40
      },
      "callbacks": {}
    },
    "Flex92": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "45px"
      },
      "callbacks": {}
    },
    "TextBox174": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "%",
        "position": "relative",
        "left": 200
      },
      "custom": {
        "text": "_______________________________________________________________________________"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
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
      },
      "TextBox9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox16": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox40": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox43": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox46": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox49": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox50": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox56": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox59": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox62": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox65": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox68": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
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
      },
      "TextBox9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Intro_Box": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox16": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox40": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox43": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox46": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox49": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox50": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox56": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox59": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox62": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox65": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox68": {
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
      },
      "TextBox9": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Intro_Box": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "width": "",
          "alignSelf": "auto",
          "overflow": "visible",
          "boxSizing": "content-box"
        }
      },
      "TextBox16": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox40": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox43": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox46": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox49": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox50": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox56": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox59": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox62": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox65": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      },
      "TextBox68": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "boxSizing": "inherit"
        }
      }
    }
  },
  "components": {}
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
