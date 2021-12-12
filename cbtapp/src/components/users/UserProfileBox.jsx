import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Badge from '@mui/material/Badge';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { IconButton, Stack } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";

export default function UserProfileBox(props) {
    const { user, index } = props;
    const [detailVisibility, setDetailVisibility] = React.useState('none');
    const [count, setCount] = React.useState(0);

    const useStyles = makeStyles({
        root: {
            margin: '0px 0px 10px 10px', 
            padding: '10px 10px 10px 10px', 
            borderRadius: 8
        },
        thumbnail: {
            width: 40, 
            borderRadius: 8, 
            marginRight: '10px'
        },
        badge: {
            margin: 10
        },
        detail: {
            display: detailVisibility
        }
    });
    
    const classes = useStyles();
    
    React.useEffect(() => {
        setCount(Math.floor(Math.random() * (15 - 3) + 3));
    }, []);

    const thumbnail = (index) => {
        return <img className={classes.thumbnail} src={`./images/people${index}.png`}/>;
    }

    const userClick = (e, user) => {
        setDetailVisibility(detailVisibility == 'none' ? 'block' : 'none');
    };

    const detailClick = (e, user) => {
        props.userClick(e, user);
    }

    return(
        <Grid key={user.id} item lg={3} md={4} sm={6} xs={12}>                        
            <Paper className={classes.root}
                variant="outlined" 
                onClick={(e) => userClick(e, user)}>
                    <Grid container>
                        <Grid item>
                            {thumbnail(index)}
                        </Grid>
                        <Grid item xs>
                            <Stack>
                                <Typography variant="caption">
                                    {user.userName}
                                </Typography>
                                <Typography variant="body2">
                                    {`${count}개의 자격증 보유`}
                                </Typography>
                                <Stack className={classes.detail}>
                                    <Typography variant="caption" children={'이름: ' + user.name}/><br/>
                                    <Typography variant="caption" children={'핸드폰: ' + user.phone}/><br/>
                                    <Typography variant="caption" children={'이메일: ' + user.email}/><br/>
                                    <Typography variant="caption" children={'학교: ' + user.school}/><br/>
                                    <Typography variant="caption" children={'깃허브ID: ' + user.gitHubId}/><br/>
                                    <Typography variant="caption" children={'블로그: ' + user.blog}/><br/>
                                    
                                    <IconButton size="small" children={<ArrowRight fontSize="small"/>}
                                        onClick={(e) => detailClick(e, user)}/>
                                </Stack>
                            </Stack>
                        </Grid>  
                        <Grid item>
                            <Badge className={classes.badge} 
                                badgeContent={count} 
                                color="primary"
                                fontSize="small">
                                <FeaturedPlayListIcon color="action" fontSize="small"/>
                            </Badge>
                        </Grid>                                                    
                    </Grid>
            </Paper>
        </Grid>
    );
}