import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Import fs with promises support

export const POST = async (req, res) => {
    try {
        const { name, surname, email, password, phoneNumber } = await req.json();

        // Create a new user object with unique ID
        const newUser = {
            id: uuidv4(),
            name, 
            surname,
            email,
            password,
            phoneNumber,
            "role": "user", 
            "status": "active",
            "cars": [],
        };

        // Read the existing JSON file
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);
        
        // Check if the user already exists
        const userExists = usersData.users.find(user => user.email === newUser.email);
        if (userExists) {
            return new Response("User already exists.", {status:400})
        }
        // Append the new user to the existing array
        usersData.users.push(newUser);

        // Write the updated object back to the JSON file
        await fs.writeFile('data/users.json', JSON.stringify(usersData, null, 2));

        return new Response("User created succesfully!", {status:200})    
    } 
    catch (error) {
        console.error('Error:', error);
        return new Response("Failed to create user.", {status:500})
    }
};