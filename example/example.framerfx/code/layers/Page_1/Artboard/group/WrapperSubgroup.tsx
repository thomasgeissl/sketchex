
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRectangle } from "./subgroup/Rectangle";
                
          export function WrapperSubgroup(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"95px","top":"313px","width":"225px","height":"72px"}}>
          
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"0px","top":"0px","width":"225px","height":"72px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperSubgroup, {
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
              