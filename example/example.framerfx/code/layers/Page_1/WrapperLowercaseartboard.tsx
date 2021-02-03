
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import { WrapperLowercasegroup } from "./lowercaseartboard/WrapperLowercasegroup";
                
          export function WrapperLowercaseartboard(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"423px","height":"635px"}}>
          
                {props.lowercasegroup && <WrapperLowercasegroup style={{"position":"absolute","left":"59px","top":"159px","width":"305px","height":"317px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperLowercaseartboard, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, lowercasegroup:
        {
          title: "lowercasegroup",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              