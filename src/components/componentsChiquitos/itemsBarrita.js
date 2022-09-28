import * as React from 'react';
import {Rating, Grid, Typography, Avatar,} from "@mui/material";

import SvgIcon from '@mui/material/SvgIcon';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemBarrita(props){
    return(
        <Grid
            container
            xs={'2.7'}
            alignItems={"center"}
            justifyContent={"center"}
          > 
            {props.icono}
            <Typography
              variant="body1"
              sx={{ fontSize: "2em"}}
              px={5}
              align={"center"}
            >
              {props.descripcion}
            </Typography>
          </Grid>
    )
}