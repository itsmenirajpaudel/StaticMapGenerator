import React from "react";

const mapTypes = [
    {
        id: "roadmap",
        text: "Roadmap"
    },
    {
        id: "terrain",
        text: "Terrain"
    },
    {
        id: "satellite",
        text: "Satellite"
    },
    {
        id: "hybrid",
        text: "Hybrid"
    }
];

const formats = ["png", "jpg", "gif"];

class SidebarForm extends React.Component {
    render() {
        const {
            width,
            height,
            maptype,
            format,
            center,
            scale,
            key
        } = this.props.model;
        const onInputChange = this.props.onInputChange;
        return (
            <form className="pure-form" style={{ paddingLeft: "50px" }}>
                <fieldset>
                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="key">
                            API Key
                        </label>
                        <input
                            className="pure-u-1-2"
                            value={key}
                            id="key"
                            type="text"
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="scale">
                            Retina (2x)
                        </label>
                        <input
                            className="pure-u-1-2"
                            id="scale"
                            type="checkbox"
                            checked={scale === 2}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="width">
                            Width
                        </label>
                        <input
                            value={width}
                            className="pure-u-1-2"
                            id="width"
                            type="number"
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="height">
                            Height
                        </label>
                        <input
                            className="pure-u-1-2"
                            value={height}
                            onChange={onInputChange}
                            id="height"
                            type="number"
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="maptype">
                            Map Type
                        </label>

                        <select
                            className="pure-u-1-2"
                            id="maptype"
                            value={maptype}
                            onChange={onInputChange}
                        >
                            {mapTypes.map(mapType => (
                                <option key={mapType.id} value={mapType.id}>
                                    {mapType.text}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="imageformat">
                            Image Format
                        </label>

                        <select
                            className="pure-u-1-2"
                            id="format"
                            value={format}
                            onChange={onInputChange}
                        >
                            {formats.map(format => (
                                <option key={format} value={format}>
                                    {format}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="autoadjust">
                            Auto Adjust?
                        </label>
                        <input
                            className="pure-u-1-2"
                            id="autoadjust"
                            type="checkbox"
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="center">
                            Center Location
                        </label>

                        <input
                            className="pure-u-1-2"
                            value={center}
                            onChange={onInputChange}
                            id="center"
                            type="text"
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="zoom">
                            Zoom
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            className="slider pure-u-1-2"
                            id="zoom"
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}

export { SidebarForm };
