{
    //Problem6:

    type Profile = {
        name: string,
        age: number,
        email: string
    };
    const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    const updateProfile = (profile: Profile, partialPart: Partial<Profile>): Profile => {
        return {
            ...profile,
            ...partialPart
        }
    }

    const updatedProfile = updateProfile(myProfile, { age: 26 })
    // console.log();

}