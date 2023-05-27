import { IDompet } from "../interfaces"

export const data: IDompet[] = [
    {
        name: "John Doe",
        totalSaldo: 15000000,
        dompetDetail: [
            {
                id: 1,
                dompetName: "Dompet 1",
                saldo: 5000000,
                deskripsi: "Keperluan Rumah",
                activities: [
                    {
                        id: 1,
                        nominal: 10000,
                        deskripsi: "makan",
                    }
                ]
            },
            {
                id: 2,
                dompetName: "Dompet 2",
                saldo: 5000000,
                deskripsi: "Biaya Kuliah"
            },
            {
                id: 3,
                dompetName: "Dompet 3",
                saldo: 5000000,
                deskripsi: "Biaya Konsumsi"
            },

        ],
    }
]