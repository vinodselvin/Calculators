import React, { Component } from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { EnhancedTable } from '../components';
import { Icon, InlineIcon } from '@iconify/react';
import calculatorIcon from '@iconify/icons-mdi/calculator';
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
        ]
    }

    render() {
        return (
            <div>
                <img src={logo} width="84" height="84" />
                <Box id="header-section" mb={2}>
                    <Typography variant="h4">Calculator Hub</Typography>
                    <Typography variant="body1">List the calculators name with the links below</Typography>
                </Box>

                <EnhancedTable rows={this.state.rows} columns={this.state.columns} />
            </div>
        )
    }
}
