/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/


const tabs = [
  { id: 'List', link: '/admin/companies' },
  { id: 'Create new Company', link: '/admin/companies/create' },
];

class CompaniesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Companies Overview" tabs={tabs}>
        { children }
      </ContentLayout>
    )
  }
}

export default (CompaniesOverviewPage);