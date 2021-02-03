
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRect } from "./lowestgroup/Rect";
                
          export function WrapperLowestgroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"54px","top":"474px","width":"352px","height":"122px"}}>
          
          {props.Rect && <SvgRect style={{"position":"absolute","left":"0px","top":"0px","width":"352px","height":"122px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperLowestgroup, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Rect:
        {
          title: "Rect",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              