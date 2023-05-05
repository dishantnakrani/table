import React from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';




export default function Table() {


    const columns = ["Name", "Company", "City", "State", "Contact"];

    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })

    const data = [
        ["Mitesh Akbari", "TCS", "Banglore", "India", "7990216638"],
        ["John Walsh", "Test Corp", "Hartford", "CT", "7485963625"],
        ["Bob Herm", "Test Corp", "Tampa", "FL", "4152639685"],
        ["Abhishek", "Patel Infotech", "Torranto", "Canada", "9824299900"],
        ["Bhumit", "Decode", "Bhavnagar", "GJ", "4152639685"]

    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <div>
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                        title={"Employee List"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </CacheProvider>
        </div>
    )
}
