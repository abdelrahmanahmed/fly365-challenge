import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Card, CardContent, Typography, Grid, FormControl, NativeSelect } from '@material-ui/core';

import { styles } from './home.component.style';
import { fetchHotels, fetchHotelDetails, updateNumberOfNights } from '../actions/hotels.action';
import Gallery from './hotel/gallery/gallery.component';
import Reviews from './hotel/reviews/reviews.component';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.props.fetchHotels();
    }
    renderHotelsList = (hotels, numberOfNights, classes) => {
        return (hotels.map((hotel, key) =>
            <Grid key={key} item>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography color="textSecondary">
                                    <a href='javascript:void(0)' onClick={() => { this.props.fetchHotelDetails(hotel.id) }}> {hotel.name}</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={hotel.photo} />
                            </Grid>
                            <Grid item xs={6}>
                                <ul className={classes.list} >
                                    <li> ${hotel.pricePerNight * numberOfNights} for {numberOfNights} night</li>
                                    <li> {hotel.totalScore}</li>
                                    <li> total reviews {hotel.totalReviews}</li>
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


    render() {
        const { classes, hotelDetails } = this.props;
        const listItems = this.renderHotelsList(this.props.hotels, this.props.numberOfNights, classes);
        return (
            <Grid container spacing={8} justify="center">

                <Grid container spacing={8} justify="center">

                    {listItems.length > 0 ? listItems : <div>no data</div>}

                </Grid>
                {hotelDetails ?
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <h1>{hotelDetails.name}</h1>
                            for
                            <FormControl className={classes.formControl}>
                                <NativeSelect
                                    className={classes.selectEmpty}
                                    value={this.props.numberOfNights}
                                    name="numberOfNights"
                                    onChange={this.handleNumberOfNightsChange}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </NativeSelect>
                            </FormControl>
                            nights
                        </Grid>

                        <Grid item xs={12}>
                            <Gallery list={hotelDetails.pictures} />
                        </Grid>
                        <Grid item xs={12}>
                            <Reviews list={hotelDetails.reviews} />
                        </Grid>
                    </Grid>
                    :

                    <div>no data</div>
                }
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
