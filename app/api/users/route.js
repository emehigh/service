import fs from 'fs/promises';

export const GET = async (req, res) => {
    try {

        // Read the existing JSON file
        const jsonData = await fs.readFile('data/users.json', 'utf-8');

        // Parse the JSON data into a JavaScript object
        const usersData = JSON.parse(jsonData);
        
        // Filter users who have at least one car with status "active"
        const usersWithActiveCars = usersData.users.filter(user => {
            if (user.cars && user.cars.length > 0) {
                return user.cars.some(car => car.status === 'active' || car.status === 'scheduled');
            }
            return false;
        });

        // Return the filtered users
        return new Response(JSON.stringify(usersWithActiveCars), { status: 200 });
    } 
    catch (error) {
        console.error('Error:', error);
        return new Response("Error fetching users.", { status: 500 });
    }
}
