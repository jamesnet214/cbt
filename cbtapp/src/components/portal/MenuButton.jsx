import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { makeStyles, useTheme } from "@mui/styles";
import { IconButton } from '@mui/material';

export default function MenuButton(props) {
    const { isOpen, menuClick } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();

    return (
        <IconButton size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={menuClick}>
            {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
    );

}