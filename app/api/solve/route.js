import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Import fs with promises support

export const POST = async (req, res) => {
    try {
        const {id, rezolvare} = await req.json();
        console.log(id);
        
        
        const jsonData = await fs.readFile('data/users.json', 'utf-8');
        //find the user with car with id = id
        const usersData = JSON.parse(jsonData);
        const user = usersData.users.find(user => user.cars?.find(car => car.id === id));
        const car = user.cars.find(car => car.id === id);
        car.status = "solved";
        car.feedback = rezolvare;

        await fs.writeFile('data/users.json', JSON.stringify(usersData, null, 2));

        
        return new Response("status changed", {status:200})
    } 
    catch (error) {
        console.error('Error:', error);
        return new Response("error changing status.", {status:500})
    }
};