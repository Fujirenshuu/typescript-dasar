describe("any", () =>{
    it("should support in typescript", () => {


        const person : any = {
            id: 1,
            name: "fuji",
            age: 17
        };

        person.age = 12;
        person.address = "Japanese";

        console.info(person.aderess);


    });
});