db.createUser(
    {
        user: "dbowner",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "dbGSM"
            }
        ]
    }
);