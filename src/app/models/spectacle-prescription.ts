export interface SpectaclePrescription {
    right_eye: Eye
    left_eye: Eye
}

interface Eye {
    sphere: number
    cylinder: number
    axis: number
    prism: number
    add: number
    mono_va: string 
    dpd: number
    npd: number
    fh: number
}