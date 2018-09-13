import React from "react";

function MarkerForm(props) {
    let elem = "";
    let elemArr = [];
    if (props.markerItems.length > 0) {
        props.markerItems.forEach(item => {
            elemArr.push(item);
        });
        elem = elemArr;
    }
    return <div>{elem} </div>;
}

export { MarkerForm };
