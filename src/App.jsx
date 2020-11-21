import React from "react";
import {Color, Vector3} from "three";
import {StandardEnvironment, Background, Logo, Interactable, Image} from "spacesvr";

function App() {
    return (<StandardEnvironment
        player={{
        pos: new Vector3(0, 1, -48),
        rot: Math.PI / 2
    }}
        canvasProps={{
        camera: {
            far: 300
        }
    }}/>);
}

export default App;
