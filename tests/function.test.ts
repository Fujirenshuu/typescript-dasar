describe("function", () => {

    it("should support in typescript", () => {

        function sayHello(name : string) : string {
            return `Hello ${name}`
        }

        expect(sayHello("Fuji")).toBe("Hello Fuji")

        function printHello(name: string) :void{
            //not returning anything 
            console.info(`Hello ${name}`)
        }

        printHello("Fuji")
    })

    it("should support default value", () => {
        function sayHello(name : string = "Guys") : string {
            return `Hello ${name}`
        }

        expect(sayHello("Fuji")).toBe("Hello Fuji")
        expect(sayHello()).toBe("Hello Guys")
    })

    it("should support rest param", () => {
        function sum(...values : number[] ) : number {
            let result = 0
            for (const value of values) {
                result += value
            }
            return result
        }

    expect(sum(1,2,3,4,5)).toBe(15)

    })

    it("should support optional param", () => {
        function sayHello(firstName : string, lastName? : string ) : string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`
            }else{
                return `Hello ${firstName}`
            }
        }

        expect(sayHello("Fuji")).toBe("Hello Fuji")
        expect(sayHello("Fuji", "Halim")).toBe("Hello Fuji Halim")
    })
    
    it("should support function overloading", () => {
        function callMe(value: number) : number
        function callMe(value: string) : string

        function callMe(value: any) : any {
            if(typeof value === 'string'){
                return value.toUpperCase
            }else if(typeof value === 'number'){
                return value + 5
            }

            expect(callMe(10)).toBe(15)
            expect(callMe("Fuji")).toBe("FUJI")

        }
    })
    it("should support function as parameter", () => {
        function sayHello(name: string, filer : (name : string) => string) :string{
            return `Hello ${filer(name)}`
        }

        function toUpper(name: string) : string{
            return name.toUpperCase()
        }
        
        expect(sayHello("Fuji", toUpper)).toBe("Hello FUJI")
        expect(sayHello("Fuji", function (name: string) : string {
            return name.toUpperCase()
        })).toBe("Hello FUJI")
        expect(sayHello("Fuji", (name: string) : string => name.toUpperCase())).toBe("Hello FUJI")
    })
})