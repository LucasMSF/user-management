import { Inertia } from "@inertiajs/inertia";

export function LogOut() {
    Inertia.post('/logout');
}