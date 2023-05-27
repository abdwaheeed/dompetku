export interface IDompet{
    name: string,
    totalSaldo: number,
    dompetDetail: IDompetDetail[],
}

export interface IActivities{
    id: number,
    nominal: number
    deskripsi: string,
}
export interface IDompetDetail{
    id: number,
    dompetName : string,
    saldo : number,
    deskripsi: string,
    activities?: IActivities[]
}

export interface IDompetCardProps {
    dompetDetail: IDompetDetail;
}

export interface IForm{
    name : string,
    nominal: number,
    deskripsi: string
}