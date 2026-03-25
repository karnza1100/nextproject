import z from "zod";

export const URL = 'http://localhost:4000/pets';

export type PetType = {
    group: string;
    gender: string;
    age: number;
    id: string;
};

export const petSchema = z.object({
    group: z.string().min(3, "minimum 3 character").max(10, "maximum 10 character"),
    gender: z.enum(["male", "female"], { 
        errorMap: () => ({ message: 'Invalid option: expected one of "male"|"female"' }) 
    }),
    age: z.coerce.number().max(20, "Too big: expected number to be <=20")
});