import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Import fs with promises support

export const POST = async (req, res) => {
    try {
        const {id, date, userId} = await req.json();
        console.log(id);
        console.log(date);
        console.log(userId);
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);

        // Find the user by ID
        const user = usersData.users.find(user => user.id === userId);

        const car = user.cars.find(car => car.id === id);
        
        car.status = "scheduled";
        car.date = date;

        // Write the updated object back to the JSON file
        await fs.writeFile('data/users.json', JSON.stringify(usersData, null, 2));

        
        return new Response("status changed", {status:200})
    } 
    catch (error) {
        console.error('Error:', error);
        return new Response("error changing status.", {status:500})
    }
};