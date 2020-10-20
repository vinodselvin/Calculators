import React, { Component } from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { EnhancedTable, SearchBox } from '../components';
import logo from '../logo.svg';

export default class Calculators extends Component {
    state = {

        columns: [
            {
                id: 'id',
                label: '#',
                align: 'right',
                // minWidth: 120 ,
                format: (value) => value
            },
            {
                id: 'name',
                label: 'Name',
                align: 'left',
                // minWidth: 120 ,
                format: (value) => value
            },
            {
                id: 'action',
                label: 'Action',
                align: 'left',
                // minWidth: 120 ,
                format: (value) => value
            }
        ],

        rows: [
            // TODO: To add a new calculator, duplicate the following object to create a new one and update the value ;)
            // NOTE: Before adding new calculator make sure that doesn't exist already in the list. :P
            {
                id: 1,
                name: 'Dummy Calculator (for Reference)',
                action: <Link className="action-link" href={"#"} target="_blank">View</Link>,
                ordering: 1
            },
        ],

        searchTerm: '',
        filteredResults: []
    }

    handleSearchInput = (value) => {
        console.log("Change callback", value);
        this.setState({ searchTerm: value }, () => {
            this.filterBy('search');
        });
    }

    filterBy(action) {
        switch (action) {
            case 'search':
                this.setState({ filteredResults: this.state.rows?.filter(row => row.name?.toLowerCase()?.includes(this.state.searchTerm?.toLowerCase())) });
                break;

            default:
                console.log("Invalid Action!");
        }
    }



    render() {
        return (
            <div>

                <img src={logo} width="84" height="84" />
                <Box id="header-section" my={2}>
                    <Typography variant="h4">Calculator Hub</Typography>
                    <Typography variant="body1">List the calculators name with the links below</Typography>
                </Box>
                <Box id="search-section" my={2}>
                    <SearchBox value={this.state.searchTerm} change={this.handleSearchInput} />
                </Box>
                <EnhancedTable rows={(this.state.searchTerm ? this.state.filteredResults : this.state.rows) || []} columns={this.state.columns} />
            </div>
        )
    }
}
