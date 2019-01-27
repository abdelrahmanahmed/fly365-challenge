import React, { Component } from 'react';
import { withStyles, Grid, IconButton, Typography } from '@material-ui/core';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { styles } from './reviews.component.style';

export class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortType: '',
            paginateType: '',
            currentPage: 1,
            reviewsPerPage: 3,
            activeReviewsList: [],
        };
    }

    componentDidMount() {
        this.setState({ activeReviewsList: this.props.list })
    }

    componentDidUpdate(prevProps) {
        if (this.props.list.join('') !== prevProps.list.join('')) {
            this.setState({ activeReviewsList: this.props.list, currentPage: 1 });
        }
    }

    rendeReviewsList = (list, classes) => {
        return (
            list.map((item, key) =>
                <Grid key={key} container>
                    <Grid item xs={2} className={classes.score}>
                        {item.score}

                    </Grid>
                    <Grid item xs={11} className={classes.reviewText}>
                        <p>
                            {item.review}

                        </p>
                    </Grid>
                </Grid>
            )
        );
    }

    sort = (type) => {
        const array = this.state.activeReviewsList.slice();
        switch (type) {
            case 'asc':
                array.sort((a, b) => {
                    if (a.score > b.score) { return 1 }
                    return -1;
                });
                break;
            case 'desc':
                array.sort((a, b) => {
                    if (a.score < b.score) { return 1 }
                    return -1;
                });
                break;
        }
        this.setState({ activeReviewsList: array, sortType: type });
    }

    handlePageClick = (event) => {
        this.setState({ currentPage: Number(event.target.id) });
    }

    handleNavigation = (paginateType) => {
        let currentPage = Number(this.state.currentPage);
        switch (paginateType) {
            case 'next':
                currentPage += 1;
                break;
            case 'prev':
                currentPage -= 1;
                break;
        }
        this.setState({ currentPage, paginateType });
    }

    getPagesNumber = (totalPages) => {
        return [...Array(totalPages)].map((_, i) => i + 1);
    }

    getTotalPages = (list) => {
        return Math.ceil(list.length / this.state.reviewsPerPage);
    }

    getSlicedPages = (pageNumbers, totalPages) => {
        if (this.state.currentPage === totalPages)
            return [...pageNumbers.slice(this.state.currentPage - 3, this.state.currentPage + 2)];

        else if (this.state.currentPage === 1) {
            return [...pageNumbers.slice(this.state.currentPage - 1, this.state.currentPage + 2)];
        }
        else
            return [...pageNumbers.slice(this.state.currentPage - 2, this.state.currentPage + 1)];
    }

    renderPageNumbers = (pageNumbers, classes) => {
        return pageNumbers.map(number => {
            return (
                <li
                    className={this.state.currentPage === number ? classes.activePageNumber : null}
                    key={number}
                    id={number}
                    onClick={this.handlePageClick}
                    disabled={number === this.state.currentPage ? true : false}
                >
                    {number}
                </li>
            );
        });
    }

    render() {
        const { classes } = this.props;
        const { activeReviewsList, currentPage, reviewsPerPage } = this.state;
        const lastReview = currentPage * reviewsPerPage;
        const firstReview = lastReview - reviewsPerPage;
        const currentReviews = activeReviewsList.slice(firstReview, lastReview);
        const reviewsList = this.rendeReviewsList(currentReviews, classes);
        const totalPages = this.getTotalPages(activeReviewsList);
        const pageNumbers = this.getPagesNumber(totalPages);
        const slicedPages = this.getSlicedPages(pageNumbers);
        const renderedPageNumbers = this.renderPageNumbers(slicedPages, classes);

        return (
            <Grid container>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography variant="h4" className={classes.title}>
                            Reviews
                    </Typography>
                    </Grid>

                    <Grid item xs={8} className={classes.sortingArrows}>
                        <IconButton
                            onClick={() => { this.sort('asc') }}
                            disabled={this.state.sortType === 'asc' ? true : false}
                        >
                            <KeyboardArrowUpIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => { this.sort('desc') }}
                            disabled={this.state.sortType === 'desc' ? true : false}
                        >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>

                    <Grid item xs={12}>
                        <ul className={classes.reviewsList}>
                            {reviewsList}
                        </ul>
                    </Grid>
                    <Grid item xs={12}>

                        <ul className={classes.pageNumbers}>
                            {this.state.currentPage !== 1 ?
                                <IconButton
                                    onClick={() => { this.handleNavigation('prev') }}
                                >
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                                : null
                            }
                            {renderedPageNumbers}

                            {this.state.currentPage !== totalPages ?
                                <IconButton
                                    onClick={() => { this.handleNavigation('next') }}
                                >
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                                : null}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Reviews = withStyles(styles)(Reviews);
export default Reviews;
