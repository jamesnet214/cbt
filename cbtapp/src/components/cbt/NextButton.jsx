import Button from "@mui/material/Button";

export default function NextButton(props) {
    const { children = 'Next' } = props;

    return (
        <Button 
            {...props} 
            children={children}
            variant="contained"
            sx={{ mt: 1, mr: 1 }}/>    
    );
}