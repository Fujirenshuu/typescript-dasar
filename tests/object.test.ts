describe("Object Type", () => {
    it("should support in typescript", () => {

        const person : {id : number, name: string, hobbies? : string} = {
            id : 1,
            name : "Fuji"
        };

        console.info(person);
        
        person.id = 1;
        person.name = "Fujitime";
        person.hobbies = "Mengoleksi Figure";
        
        console.info(person);

    });
});