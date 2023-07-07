describe("switch", () => {
    it("should support switch statement", () => {
        function sayHello(name: string) : string {
            switch(name){
                case "Fuji":
                    return "Hi Fuji"
                case "Kebin" :  
                    return "Hi Kebin"
                case "Sepuh":   
                    return "Hi Sepuh"
                default :   
                    return "Hi"            
            }   
        }
        expect(sayHello("Fuji")).toBe("Hi Fuji");
        expect(sayHello("Kebin")).toBe("Hi Kebin");
        expect(sayHello("Sepuh")).toBe("Hi Sepuh");
        expect(sayHello("Emu")).toBe("Hi");
    })
})