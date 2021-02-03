
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRectangle } from "./Subsubgroup/Rectangle";
                
          export function WrapperSubsubgroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"86px","height":"57px"}}>
          
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"0px","top":"0px","width":"86px","height":"57px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperSubsubgroup, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Rectangle:
        {
          title: "Rectangle",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              