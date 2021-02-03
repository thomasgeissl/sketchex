
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRectangle } from "./group/Rectangle";
                
          export function WrapperGroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"123px","top":"383px","width":"171px","height":"169px"}}>
          
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"0px","top":"0px","width":"171px","height":"169px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperGroup, {
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
              