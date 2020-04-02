// This file is part of Indico.
// Copyright (C) 2002 - 2020 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import {connect} from 'react-redux';
import LogEntryList from '../components/LogEntryList';
import {setPage, fetchLogEntries, setDetailedView} from '../actions';

const mapStateToProps = ({logs}) => ({
  entries: logs.entries,
  currentPage: logs.currentPage,
  pages: logs.pages,
  isFetching: logs.isFetching,
});

const mapDispatchToProps = dispatch => ({
  changePage: page => {
    dispatch(setPage(page));
    dispatch(fetchLogEntries());
  },
  setDetailedView: entryIndex => {
    dispatch(setDetailedView(entryIndex));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogEntryList);
