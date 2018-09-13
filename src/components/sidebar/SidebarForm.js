import React from "react";
import { MarkerForm } from "./MarkerForm";

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
            key,
            autoscale,
            zoom
        } = this.props.model;

        const { onInputChange, onAddMarker, markerItems } = this.props;
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
                            min="100"
                            max="1000"
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
                            min="100"
                            max="1000"
                        />
                    </div>

                    <div className="pure-control-group pure-u-1">
                        <label className="pure-u-2-5" htmlFor="maptype">
                            Map Type
                        </label>
                        <select
                            className="pure-u-1-2"
                            id="maptype"
                            defaultValue={maptype}
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
                        <label className="pure-u-2-5" htmlFor="autoscale">
                            Auto Adjust?
                        </label>
                        <input
                            className="pure-u-1-2"
                            id="autoscale"
                            type="checkbox"
                            checked={autoscale === true}
                            onChange={onInputChange}
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
                            className="slider pure-u-1-2"
                            onChange={onInputChange}
                            id="zoom"
                            value={zoom}
                            min="5"
                            max="18"
                        />
                    </div>

                    {/* <div className="block">
                        <label className="pure-u-1">
                            Marker1: Kathmandu, Nepal
                        </label>
                        <div className="pure-control-group">
                            <input
                                className="pure-u-9-10"
                                type="text"
                                placeholder="address or coordinates"
                            />
                        </div>
                        <div className="">
                            <div className="pure-control-group pure-u-1-5">
                                <input type="text" placeholder="number" />
                            </div>

                            <div className="pure-control-group pure-u-1-5">
                                <input type="text" placeholder="color" />
                            </div>

                            <div className="pure-control-group pure-u-1-5">
                                <input type="text" placeholder="size" />
                            </div>
                        </div>
                    </div> */}

                    <MarkerForm markerItems={markerItems} />

                    <div className="pure-control-group pure-u-1">
                        <button
                            type="button"
                            onClick={onAddMarker}
                            className="pure-button addmarker"
                        >
                            Add a marker
                        </button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export { SidebarForm };
