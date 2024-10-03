import { createContext, useState } from 'react'

const UserContext = createContext({
    loggedInUser : "Default User"
});

export default UserContext;
