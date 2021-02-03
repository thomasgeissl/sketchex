
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRectangle2 } from "./artbaord4/Rectangle2";
                
                import {SvgRectangle1 } from "./artbaord4/Rectangle1";
                
                import { WrapperGroup } from "./artbaord4/WrapperGroup";
                
          export function WrapperArtbaord4(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"441px","height":"635px"}}>
          
          {props.Rectangle2 && <SvgRectangle2 style={{"position":"absolute","left":"0px","top":"0px","width":"441px","height":"635px"}} />
          }
          {props.Rectangle1 && <SvgRectangle1 style={{"position":"absolute","left":"123px","top":"104px","width":"171px","height":"169px"}} />
          }
                {props.group && <WrapperGroup style={{"position":"absolute","left":"123px","top":"383px","width":"171px","height":"169px"}} />}
                
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperArtbaord4, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, Rectangle2:
        {
          title: "Rectangle2",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, Rectangle1:
        {
          title: "Rectangle1",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, group:
        {
          title: "group",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              