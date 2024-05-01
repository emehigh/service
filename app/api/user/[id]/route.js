
import fs from 'fs/promises'; // Import fs with promises support

export const GET = async (req, res) => {
    try {
        console.log(res)
        const { id } = res.params;
        console.log(id)

        // Read the existing JSON file
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);
        
        // Check if the user already exists
        const userExists = usersData.users.find(user => user.id === id);
        if (userExists) {
            return new Response(JSON.stringify(userExists), {status:200})
            
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
