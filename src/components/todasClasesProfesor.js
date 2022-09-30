import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { Link} from "react-router-dom";

export default function todasClasesProfesor(props) {
    return (  
        <Link to={`/profesor/clasesprofesor/${props.id}`}>
            <Card sx={{ maxWidth: 345, maxHeight: 235 }} >
                <CardActionArea>
                  <Box
                    sx={{
                      width: 345,
                      height: 35,
                      backgroundColor: "primary.dark",
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.nombre}
                    </Typography>
                    
                    <Typography gutterBottom variant="body2" color="text.secondary">
                      {props.estadoClase}
                    </Typography>
                    <Box
                      sx={{
                      width: 315,
                      height: 5,
                      backgroundColor: 'primary.dark',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="button" component="block">{props.frecuencia}</Typography>
                    <Typography variant="button" display="block">{props.duracion}</Typography>
                  </Box>
                  </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}