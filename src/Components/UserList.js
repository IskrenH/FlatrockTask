import {DataGrid, useGridApiRef} from "@mui/x-data-grid";
import * as React from "react";
import AddUser from "../Components/AddUserForm";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'Full name',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

let rows = require('../Data/data.json')

export default function UserList(){
    const apiRef = useGridApiRef();
    const handleAddUser = (newUser) => {
        apiRef.current.updateRows([newUser]);
    };

    return (
        <div style={{ height: 700 }}>
            <AddUser onSubmit={handleAddUser}/>
            <DataGrid
                rows={rows}
                columns={columns}
                apiRef={apiRef}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}