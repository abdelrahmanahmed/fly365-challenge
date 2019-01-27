export const styles = theme => ({
    list: {
        display: 'flex',
        width: '400px',
        height: '100px',
        overflowY: 'hidden',
        overflowX: 'scroll',
    },
    picture: {
        cursor: 'pointer',
        paddingLeft: '10px',
    },
    activePhoto: {
        width: '250px'
    },
    score: {
        color: '#000000',
        margin: '10px',
        border: ' 2px solid #000000',
        backgroundColor: ' #ffffff',
    },
    pageNumbers: {
        textAlign: 'center',
        '& li': {
            cursor: 'pointer',
            display: 'inline-block',
            padding: '10px',
            border: '2px solid #000000',
            margin: '0 10px',
        }

    },
    activePageNumber: {
        backgroundColor: ' #cccccc',

    },
    sortingArrows: {
        margin: 'auto',
        '& button': {
            display: 'flex',
            flexFlow: 'column',
            padding: '0px'
        }
    },
    title: {
        lineHeight: 'inherit'
    },
    reviewsList: {
        minHeight: '250px',
        listStyleType: 'none',
    },
    score: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '12px 8px',
        border: ' 2px solid #000',
        textAlign: 'center',
        display: 'inline-block',
        flexBasis: 'initial',
        marginBottom: '15px',
    },
    reviewText: {
        textAlign: 'justify',
        padding: '0px 10px 0px',
        '& p': {
            margin: '0 0 0 0',
            paddingBottom:'15px'
        }
    }
});  