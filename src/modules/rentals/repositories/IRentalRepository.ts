import { Rental } from "../infra/typeorm/entities/Rental";

import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";

interface IRentalRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
    create(data: ICreateRentalDTO): Promise<Rental>;
    findById(id: string): Promise<Rental>;
    findByUser(user_id: string): Promise<Rental[]>;
}

export { IRentalRepository };
