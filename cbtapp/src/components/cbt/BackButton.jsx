import Button from "@mui/material/Button";

export default function BackBUtton(props) {
    return (
        <Button 
            {...props} 
            disabled={false}
            children={"뒤로"}
            sx={{ mt: 1, mr: 1 }}/>    
    );
}