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
        "marginTop": "100px",
        "alignItems": "center"
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
    "Toggle3": {
      "styles": {
        "width": "100px",
        "height": "50px",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "activeColor": "#2196f3",
        "active": false,
        "inactiveColor": "#CCCCCC"
      },
      "callbacks": {
        "onChange": [
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
