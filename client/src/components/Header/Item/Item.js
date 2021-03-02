import { Paper, Container, Grid } from '@material-ui/core';

const Item = ({ item }) => {
    return (       
            <Grid container >
            <img style={{width: '100%'}}  src={item.image} />
            </Grid>  
    )
}

export default Item