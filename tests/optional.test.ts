describe("Optional", () => {
    it("should support null and undefined", () => {
        
        function sayHello (name? : string| null){
            if(name){
                console.info(`Hello ${name}`)
            }else{
                console.info("Hello")
            }
        }
        sayHello("Fuji")
        const name : string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})