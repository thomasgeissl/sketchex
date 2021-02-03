
import * as React from "react";
import { Frame } from "framer";
import { addPropertyControls, ControlType } from "framer";

                import { WrapperGroup } from "./Artboard/WrapperGroup";
                
                import {SvgRectangle } from "./Artboard/Rectangle";
                
          export function WrapperArtboard(props) {
            return (
                <div className="content" style={{"position":"absolute","left":"0px","top":"0px","width":"526px","height":"635px"}}>
          
                {props.group && <WrapperGroup style={{"position":"absolute","left":"83px","top":"106px","width":"360px","height":"492px"}} />}
                
          {props.Rectangle && <SvgRectangle style={{"position":"absolute","left":"0px","top":"0px","width":"553px","height":"71px"}} />
          }
                  {props.children}
                  <Frame style={{width: "100%", height: "100%"}}>
                  </Frame>
                  </div>
              );
            }
            
              addPropertyControls(WrapperArtboard, {
      children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
          type: ControlType.ComponentInstance,
          title: "Page"
        }
      }, group:
        {
          title: "group",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }, Rectangle:
        {
          title: "Rectangle",
          type: ControlType.Boolean,
          enabledTitle: "Show",
          disabledTitle: "Hide",
          defaultValue: true
        }})
              