import Button from "@mui/material/Button";

export default function BackBUtton(props) {
    return (
        <Button 
            {...props} 
            children={"Back"}
            sx={{ mt: 1, mr: 1 }}/>    
    );
}