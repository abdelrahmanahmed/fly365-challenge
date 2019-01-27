import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Card, CardContent, Typography, Grid, FormControl, NativeSelect } from '@material-ui/core';

import { styles } from './home.component.style';
import { fetchHotels, fetchHotelDetails, updateNumberOfNights } from '../actions/hotels.action';
import Gallery from './hotel/gallery/gallery.component';
import Reviews from './hotel/reviews/reviews.component';
import { config } from '../config/app';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.props.fetchHotels();
    }
    renderHotelsList = (hotels, numberOfNights, classes) => {
        let nightWord = numberOfNights > 1 ? 'nights' : 'night';
        return (hotels.map((hotel, key) =>
            <Grid key={key} item>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography color="textSecondary" className={classes.cardHead}>
                                    <a href='javascript:void(0)' onClick={() => { this.props.fetchHotelDetails(hotel.id) }}> {hotel.name}</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={hotel.photo} />
                            </Grid>
                            <Grid item xs={8}>
                                <ul className={classes.list} >
                                    <li> ${hotel.pricePerNight * numberOfNights} for {numberOfNights} {nightWord} </li>
                                    <li> {hotel.totalScore} {this.getReview(hotel.totalScore)}</li>
                                    <li> {hotel.totalReviews} reviews</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        ));
    }

    getReview = (score) => {
        if (score >= 9)
            return 'Excellent';
        else if (score > 7)
            return 'Very Good';
        else if (score >= 5)
            return 'Good';
        else (score < 5);
        return 'Bad';
    }

    handleNumberOfNightsChange = event => {
        this.props.updateNumberOfNights(event.target.value);
    };

    genereateNumberOfNightsList = () => {
        let array = [];
        for (let i = 1; i <= config.maxNumberOfNights; i++) {
            array.push(<option key={i} value={i}>{i}</option>);
        }
        return array;
    }


    render() {
        const { classes, hotelDetails } = this.props;
        const listItems = this.renderHotelsList(this.props.hotels, this.props.numberOfNights, classes);
        const numberOfNightsList = this.genereateNumberOfNightsList();
        return (
            <Grid container spacing={8} justify="center">

                <Grid container spacing={8} justify="center">

                    {listItems.length > 0 ? listItems : <div>no data</div>}

                </Grid>

                <Grid container justify="center">
                    <Grid item xs={8}>
                        <Card>
                            {hotelDetails ?
                                <CardContent>
                                    <Grid container spacing={16} justify="center">
                                        <Grid item xs={12}>
                                            <Typography variant="h4">
                                                {hotelDetails.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>

                                            For
                                  <FormControl className={classes.numberOfNightsDropDown}>
                                                <NativeSelect
                                                    className={classes.selectEmpty}
                                                    value={this.props.numberOfNights}
                                                    name="numberOfNights"
                                                    onChange={this.handleNumberOfNightsChange}
                                                >

                                                    {numberOfNightsList}
                                                </NativeSelect>
                                            </FormControl>
                                            {parseInt(this.props.numberOfNights) === 1 ? <span>night</span> : <span>nights</span>}

                                        </Grid>

                                        <Grid item xs={12}>
                                            <Gallery list={hotelDetails.pictures} />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Reviews list={hotelDetails.reviews} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                :
                                <CardContent>
                                    <Typography color="textSecondary" className={classes.nodata} >
                                        No Hotel selcted
                                </Typography>
                                </CardContent>

                            }

                        </Card>
                    </Grid>
                </Grid>


            </Grid>
        )
    }
}

export function mapStateToProps({ hotels }) {
    let list = [];
    let details;
    if (hotels.list) {
        list = hotels.list;
    }
    if (hotels.details) {
        details = hotels.details;
    }
    return { hotels: list, hotelDetails: details, numberOfNights: hotels.numberOfNights };
}

Home = withStyles(styles)(Home);
export default connect(mapStateToProps, { fetchHotels, fetchHotelDetails, updateNumberOfNights })(Home);
