import React from "react";

function MarkerItem(props) {
    return (
        <div className="marker-item" style={{ paddingBottom: "10px" }}>
            <div className="pure-u-2-3">
                <input type="text" placeholder="number" />
                <input type="text" placeholder="color" />
                <input type="text" placeholder="size" />
            </div>
            <div className="pure-u-1-3">
                <i
                    onClick={props.deleteMarker}
                    title="Remove"
                    style={{ cursor: "pointer" }}
                    className="icono-cross"
                    id={props.id}
                />
            </div>
        </div>
    );
}

export { MarkerItem };
