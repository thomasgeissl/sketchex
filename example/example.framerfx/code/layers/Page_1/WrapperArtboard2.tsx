
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import {SvgRectangle } from "./Artboard2/Rectangle";
                
                import {SvgOval } from "./Artboard2/Oval";
                
          export function WrapperArtboard2(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"456px","height":"635px"}}>
          
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"87px","top":"212px","width":"308px","height":"310px"}} />
          }
          {props.Oval && <SvgOval style={{"position":"absolute","left":"181px","top":"307px","width":"120px","height":"120px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperArtboard2, {
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
        }, Oval:
        {
          title: "Oval",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              