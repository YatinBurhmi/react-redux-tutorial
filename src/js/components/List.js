import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
}

const ConnectedList = ({articles}) => (
    <ul>
        {articles.map(e1 => (
            <li key={e1.id}>{e1.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;