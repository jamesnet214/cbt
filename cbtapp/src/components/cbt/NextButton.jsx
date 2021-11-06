import Button from "@mui/material/Button";

export default function NextButton(props) {
    return (
        <Button 
            {...props} 
            variant="contained"
            children="다음"
            sx={{ mt: 1, mr: 1 }}/>    
    );
}