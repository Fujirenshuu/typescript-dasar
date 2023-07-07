describe("union-type", () => {
    it("should support in typescript", () => {
        let sample : Number | String | Boolean = "Fuji";
        
        console.log(sample)

        sample = 100;
        console.log(sample);

        sample = true;
        console.log(sample);
    });

    it("should support typeof operator", () => {
        function process(value: Number | String | Boolean){
            if(typeof value === "number"){
                 return value + 5;
            }else if (typeof value === "string"){
                return value.toLowerCase();
            }else{
                return !value;
            }
        }

        expect(process("FUJI")).toBe("fuji");
        expect(process(5)).toBe(10);
        expect(process(true)).toBe(false);


    });
});