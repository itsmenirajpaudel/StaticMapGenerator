import React from "react";

const MapContent = function(props) {
    let imageElem = (
        <img
            border="0"
            onError={props.onImageError}
            onLoad={props.onImageLoad}
            src={props.model.url}
            alt="api key is either empty or invalid"
        />
    );

    if (props.invalidKey) {
        imageElem = (
            <p>
                Error while loading google map.
                <br />
                <small>
                    valid api key is required to change default settings!
                </small>{" "}
                <br />
                <small>height and/or width must be appropriate</small>
            </p>
        );
    }

    return (
        <div className="posts">
            <h1 className="content-subhead">Map Preview</h1>
            <section className="post">{imageElem}</section>
        </div>
    );
};

export { MapContent };
