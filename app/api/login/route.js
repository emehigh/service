import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Import fs with promises support

export const POST = async (req, res) => {
    try {
        const { email, password } = await req.json();


        // Read the existing JSON file
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);
        
        // Check if the user already exists
        const userExists = usersData.users.find(user => user.email === email);
        if (userExists && userExists.password === password) {
            
            return new Response(JSON.stringify(userExists.id), {status:200})
            
        } else {
            return new Response("User not found.", {status:400})
        }
        // Append the new user to the existing array
        
    } 
    catch (error) {
        console.error('Error:', error);
        return new Response("Error logging in.", {status:500})
    }
};