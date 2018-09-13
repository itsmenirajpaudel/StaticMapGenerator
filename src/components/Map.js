import React from "react";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { MarkerItem } from "./sidebar/MarkerItem";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                width: 600,
                height: 300,
                maptype: "roadmap",
                format: "png",
                center: "Kathmandu,+Nepal",
                zoom: 13,
                scale: 1,
                key: "",
                autoscale: false
            },
            invalidKey: false,
            markerItems: [],
            marker: {
                size: 0,
                id: null
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleImageError = this.handleImageError.bind(this);
        this.handleImageLoad = this.handleImageLoad.bind(this);
        this.onAddMarker = this.onAddMarker.bind(this);
        this.onDeleteMarker = this.onDeleteMarker.bind(this);
        this.imageInfo = {
            baseUrl:
                "https://maps.googleapis.com/maps/api/staticmap?visual_refresh=true"
        };
        this.imageInfo.url = this.generateNew(this.state.model);
        this.imageInfo.linkUrl =
            "https://www.google.com/maps/place/Kathmandu,+Nepal/";
        this.imageInfo.directionUrl =
            "https://www.google.com/maps/dir//Kathmandu,+Nepal/";
        this.imageInfo.center = this.state.model.center;
    }

    generateNew(model) {
        let url =
            this.imageInfo.baseUrl +
            "&size=" +
            model.width +
            "x" +
            model.height;
        url += "&maptype=" + model.maptype;
        url += "&format=" + model.format;

        if (!model.autoscale) {
            url += "&center=" + model.center;
            url += "&zoom=" + model.zoom;
            url += "&scale=" + model.scale;
        } else {
            url += "&autoscale=true";
        }
        if (model.key) url += "&key=" + model.key;
        if (model.zoom) url += "&zoom=" + model.zoom;
        return url;
    }

    onInputChange(event) {
        const { id: field } = event.target;
        let { value } = event.target;
        if (field === "scale") value = event.target.checked ? 2 : 1;
        if (field === "autoscale") value = event.target.checked ? true : false;
        this.setState(prevState => {
            const obj = prevState.model;
            obj[field] = value;
            this.imageInfo.url = this.generateNew(obj);
            if (field === "center")
                this.imageInfo.center = this.state.model.center;
            return {
                model: obj,
                invalidKey: false
            };
        });
    }

    onAddMarker() {
        const uniqueKey =
            Date.now().toString(36) +
            Math.random()
                .toString(36)
                .substr(2, 5);
        this.setState(function(prevState) {
            let { markerItems } = prevState;
            markerItems.push(
                <MarkerItem
                    id={uniqueKey}
                    key={uniqueKey}
                    deleteMarker={this.onDeleteMarker}
                />
            );
            return {
                markerItems: markerItems
            };
        });
    }

    onDeleteMarker(event) {
        const { id } = event.target;
        this.setState(function(prevState) {
            const prevMarkerItems = prevState.markerItems;
            let newMarkerItems = prevMarkerItems.filter(item => {
                return item.props.id !== id;
            });
            return {
                markerItems: newMarkerItems
            };
        });
    }

    handleImageError(event) {
        this.setState(function() {
            return {
                invalidKey: true
            };
        });
    }

    handleImageLoad() {
        this.setState(function() {
            return {
                invalidKey: false
            };
        });
    }

    render() {
        return (
            <div id="layout" className="pure-g">
                <Sidebar
                    onInputChange={this.onInputChange}
                    onAddMarker={this.onAddMarker}
                    model={this.state.model}
                    marker={this.state.marker}
                    markerItems={this.state.markerItems}
                />
                <Content
                    apiKey={this.state.model.key}
                    onImageError={this.handleImageError}
                    onImageLoad={this.handleImageLoad}
                    model={this.imageInfo}
                    invalidKey={this.state.invalidKey}
                />
            </div>
        );
    }
}

export { Map };
