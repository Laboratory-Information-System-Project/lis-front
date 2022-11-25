import React from "react";

function GetCheckedRow(gridView, dataProvider) {
    let rows = gridView.getCheckedRows(true);
    const boolCheck = dataProvider.getFieldValues('Bool');
    let selectedData = '';
    const firstCheckBoxLength = rows.length;
    let secondCheckBoxLength = boolCheck.length;
    let checkedRow = [];
    let index = 0;

    console.log(rows)
    console.log(secondCheckBoxLength)

    for (let i = 0; i < firstCheckBoxLength; i++) {
        for (let j = 0; j < secondCheckBoxLength; j++) {
            if (rows[i] === j) {
                delete boolCheck[j];
                console.log(boolCheck);
                break;
            }
        }
        checkedRow[index] = rows[i];
        index++;

    }
    secondCheckBoxLength = boolCheck.length;
    for (let i = 0; i < secondCheckBoxLength; i++) {
        if (boolCheck[i] !== undefined) {
            checkedRow[index] = boolCheck[i];
        }
        index++;
    }

    return checkedRow;
}

export default GetCheckedRow