
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgOval } from "./lowercasegroup/Oval";
                
          export function WrapperLowercasegroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"59px","top":"159px","width":"305px","height":"317px"}}>
          
          {props.Oval && <SvgOval style={{"position":"absolute","left":"0px","top":"0px","width":"305px","height":"317px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperLowercasegroup, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Oval:
        {
          title: "Oval",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              