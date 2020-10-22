import React, { Component } from 'react';
import { Box, Button, Link, Typography } from '@material-ui/core';
import { EnhancedTable, SearchBox } from '../components';
import logo from '../logo.svg';
import { FullScreenDialog } from "../components";

export default class Calculators extends Component {
    state = {
        open: false,
        selectedItem: null,
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
                id: 'page_link',
                label: 'Page',
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
                name: 'Dummy Calculator (for Reference)',
                link: "https://www.google.com"
            },
            {
                name: 'BMI Calculator',
                link: "https://www.calculator.net/bmi-calculator.html"
            }
        ],

        searchTerm: '',
        filteredResults: []
    }

    componentDidMount() {
        this.generateRows();
    }

    generateRows() {
        this.setState({
            rows: this.state.rows.map((row, index) => {
                return {
                    ...row,
                    id: (index + 1),
                    page_link: <Link className="action-link" href={row?.link} target="_blank">View Page</Link>,
                    action:
                        <>
                            <Button size="small" variant="outlined" color="primary" onClick={() => {
                                this.setState({ selectedItem: row }, () => {
                                    this.handleOpen();
                                })
                            }}>Open</Button>
                        </>
                }
            })
        });
    }

    handleSearchInput = (value) => {
        this.setState({ searchTerm: value }, () => {
            this.filterBy('search');
        });
    }

    filterBy = (action) => {
        switch (action) {
            case 'search':
                this.setState({ filteredResults: this.state.rows?.filter(row => row.name?.toLowerCase()?.includes(this.state.searchTerm?.toLowerCase())) });
                break;

            default:
                console.log("Invalid Action!");
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        console.log("Called close");
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                {/* Main Logo */}
                <img src={logo} width="84" height="84" />

                {/* Body Headers */}
                <Box id="header-section" my={2}>
                    <Typography variant="h4">Calculator Hub</Typography>
                    <Typography variant="body1">List the calculators name with the links below</Typography>
                </Box>

                {/* Calculator - Search */}
                <Box id="search-section" my={2}>
                    <SearchBox value={this.state.searchTerm} change={this.handleSearchInput} />

                </Box>

                {/* Calculator - View */}
                <FullScreenDialog title={this.state.selectedItem?.name} open={this.state.open} link={this.state.selectedItem?.link} close={this.handleClose} />

                {/* Calculator - Listing */}
                <EnhancedTable rows={(this.state.searchTerm ? this.state.filteredResults : this.state.rows) || []} columns={this.state.columns} />
                <Typography variant="caption">NOTE: If the open option above doesn't work click on view page</Typography>
            </div>
        )
    }
}
