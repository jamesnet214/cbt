import React from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

let _count = 0;
let signalRStarted = false;
export default function NotificationsBadge(props) {
    const [count, setCount] = React.useState(_count);

    if (!signalRStarted) {
        signalRStarted = true;
        window.onSignalR(signalRReceived);
    }
    function signalRReceived(type, value) {
        console.log("signalR received: ", type, value);
        _count = _count + 1;
        setCount(_count);
         
    }
    
    return (
        <Badge badgeContent={count} color="secondary">
            <NotificationsIcon/>
        </Badge>
    );
}