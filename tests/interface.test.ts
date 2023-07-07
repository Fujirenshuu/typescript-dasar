import { Employee, Manager } from './../src/employee';
import { Seller } from "../src/seller"
import { Person } from "../src/person"


describe("Interface", () => {
    it("should support in typescript", () => {
        const seller : Seller = {
            id : 1,
            name : "Toko Figure",
            nis : 121301015,
            kelas : "XII RPL-5"

        }

// Cannot assign to 'nis' because it is a read-only property.ts
// (property) Seller.nis: any
        // seller.nis = 121301016;
    
        console.info(seller)
    })

    it("should support function interface", () => {
        interface AddFunction{
            (value1 : number, value2 : number) : number
        }

        const add: AddFunction = (value1 : number, value2 : number) : number => {
            return value1 + value2
        }
        
        expect(add(1,2)).toBe(3)
    })

    it("should support indexable interface", () => {
        interface StringArray {
            [index: number] : string
        }

        const names : StringArray = ["Fuji","Halim","Rabbani"]

        console.info(names)
        
    })

    it("should support indexable interface for non number index", () => {
        interface StringDictionary {
            [key: string] : string
        }

        const dictionary : StringDictionary = {
            name : "Fuji",
            address : "Indonesian"
        }

        expect(dictionary["name"]).toBe("Fuji")
        expect(dictionary["address"]).toBe("Indonesian")
    })

    it("should support extend interface", () => {
        const employee : Employee = {
            id : "1",
            name : "Fuji",
            division : "IT",
        }

        console.info(employee)

        const manager : Manager = {
            id : "2",
            name : "Waltahh",
            division : "IT Support",
            numberOfEmployee: 11
        }

        console.info(manager)
    })

    it("should support function in interface", () => {

        const person : Person = {
            name : "Fuji",
            sayHello : function (name: string): string {
                return `Hello ${name}, my name is ${this.name}. I love you, ${name}! XD`
            }
        }

        console.info(person.sayHello("Emu Otori"))
    })

    it("should support intersection types", () => {
        interface HasName {
            name: string
        }

        interface HasId{
            id: string
        }

        type Domain = HasId & HasName

        const domain : Domain = {
            id : "1",
            name : "Waltah",
        }
        console.info(domain)

    })

    it("should support type assertions", () => {
        const person : any = {
         name: "Fuji",
         age: 17,
        }
        const person2 : Person = person as Person

        console.info(person2)
    })
})