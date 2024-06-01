import { Customer } from "./customer"
import { SpectaclePrescription } from "./spectacle-prescription"

export interface Bill {
    id: string
    date: Date
    customersbill: Customer
    spectacle_prescription: SpectaclePrescription
}
