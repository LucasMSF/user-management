import { format } from "date-fns";

export function BRDate(date) {
    if(typeof date === 'string') date = new Date(date);
    return format(date, 'dd/MM/yyyy HH:mm:ss')
}