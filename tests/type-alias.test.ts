import { Category, Product } from '../src/type-alias';
describe("Type alias", () => {
    it("should support in typescript", () => {

        const category : Category ={
            id: "1",
            name :"Figure"
        }

        const product : Product = {
            id: 1,
            name : "Hatsune Miku",
            price : 1000,
            category : category,
        }

        console.info(category);
        console.info(product);
    })
})