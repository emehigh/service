import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Import fs with promises support


export const POST = async (req, res) => {
    try {
        const { marca, model, serieSasiu, tipMotorizare, capacitateMotor, caiPutere, problemaMasinii, id } = await req.json();

        console.log(marca, model, serieSasiu, tipMotorizare, capacitateMotor, caiPutere, problemaMasinii, id);
        // Create a new car object with unique ID
        const newCar = {
            id: uuidv4(),
            marca,
            model,
            serieSasiu,
            tipMotorizare,
            capacitateMotor,
            caiPutere,
            problemaMasinii,
            "status": "active",
            
        };

        // Read the existing JSON file
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);

        // Find the user by ID
        const user = usersData.users.find(user => user.id === id);

        // Append the new car to the user's cars array
        user.cars.push(newCar);

        // Write the updated object back to the JSON file
        await fs.writeFile('data/users.json', JSON.stringify(usersData, null, 2));

        return new Response("Car added successfully", { status: 200 })
    }
    catch (error) {
        console.error('Error:', error);
        return new Response("Failed to add car", { status: 500 })
    }
}