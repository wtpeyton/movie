type Table = {
    rows: number;
    columns: number; 
    color: "primary" | "secondary" | "ternary";
    items: flat;

}

type flat = {
    title: string;
    startTime: string;
    endTime: string;
    location: string; 
}