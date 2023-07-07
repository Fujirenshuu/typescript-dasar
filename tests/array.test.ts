describe('Array', function(){
    it("should same with javascript", function() {
        const names :string[] = ["Fuji", "Opal", "Epul"];
        const values :number[] = [1,2,3];

        console.info(names);
        console.info(values);
    })
    it("should support javascript only", function () {
        const hobbies : ReadonlyArray<string> = ["Mengoding", "Menulis"];

        console.info(hobbies[0]);
    })
    it("should ready only tupple" , function() {
        const person : readonly [string, string, string, boolean] =  ["Fuji", "Opal", "Epul", true];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        console.info(person[3]);
    })
})