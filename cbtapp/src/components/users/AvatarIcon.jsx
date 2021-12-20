import { Avatar } from "@mui/material";

export default function AvataIcon(props) {
    console.log(props.name);
    const { name = "No name" } = props;
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        for (i = 0; i < string.length; i += 1) {
             hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        return color;
    }
      
    function stringAvatar(name) {

        name = name.replace(".", " ");

        if(name.split(' ').length == 1) {
            name = `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`;
        }
        else {
            name = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
        }
        
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: name.toUpperCase()
        };
    }

    return (
        <Avatar {...stringAvatar(name)}/>
    );
}