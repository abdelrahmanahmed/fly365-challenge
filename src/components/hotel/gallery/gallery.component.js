import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';

import { styles } from './gallery.component.style';

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePhoto: null,
            galleryList: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.galleryList !== props.list && props.list.length) {
            return {
                activePhoto: props.list[0].photo,
                galleryList: props.list
            }
        }
        return state;
    }

    changeActivePhoto = (key) => {
        this.setState({
            activePhoto: this.state.galleryList[key].photo
        })
    }

    renderGalleryList = (list, classes) => {
        return (list.map((image, key) =>
            <img onClick={() => { this.changeActivePhoto(key) }} key={key} className={classes.picture} src={image.thumbnail} />
        ));
    }


    render() {
        const { classes } = this.props;
        const galleryList = this.renderGalleryList(this.state.galleryList, classes);
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <img className={classes.activePhoto} src={this.state.activePhoto} />
                </Grid>
                <Grid item className={classes.list} >
                    {this.props.list.length ?
                        galleryList
                        : null}
                </Grid>
            </Grid>
        )
    }
}

Gallery = withStyles(styles)(Gallery);
export default Gallery;
