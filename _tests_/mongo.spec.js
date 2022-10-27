const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('user')
    });
    afterAll(async() => {
        await connection.close()
    })

    it('should insert a new user into the users collection', async () => {
        const users = db.collection('user');

        const mockUser = {
            _id: '12345678',          
            given_name: "William",
            family_name: "Turner",
            nickname: "will",
            name: 25,
            picture: null,
            locale: null,
            updated_at: null,
            email: "johnturner@gmail.com",
            email_verified: null,
            sub: null,
            sid: null,
        }

        await users.insertOne(mockUser)

        const insertedUser = await users.findOne({ id: '12345678' });

        expect(insertedUser).toEqual(mockUser)
    },
        
    it('should delete a user from the users collection', async () => {
        const users = db.collection('user')
        await users.deleteMany({ id: '12345678' })
        const deletedUser = await users.findOne({ id: '12345678' });
        expect(deletedUser).toEqual(null)
    })
)})