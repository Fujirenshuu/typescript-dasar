describe("Loop", () => {
    it("should support for loop", () => {
        const names : string[] = [
            "Keiichi Maebara",
            "Rena Ryuugu",
            "Mion Sonozaki",
            "Shion Sonozaki",
            "Satoko Houjou",
            "Rika Furude"
          ]

        for (let i = 0, len = names.length; i < len; i++) {
        console.info(names[i]);
        }

        for (const name of names) {
            console.info(name)
        }

        for (let index in names){
            console.info(names[index] )
        }
    })

    it("should support while loop", () => {
        let counter : number = 0
        while(counter < 11){
            console.info("Hello world from while XD")
            counter++
        }
    })

    it("should support do while loop", () => {
        let counter = 11
        do {
        
            console.info("Hello world from do while")            
            counter++
        
        } while(counter < 11)
    })
    it("should support break and continue", () => {
        let counter : number = 0
        do {
            counter ++

            if (counter == 11){    
                break;
            }
            if (counter % 2 == 0){
            continue                
            }

        } while(true)

    })
})