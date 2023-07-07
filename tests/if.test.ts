describe("If statement", () => {
    it("should support in typescript", () => {
        const examValue = 90
        if(examValue > 80){
            console.info("Good Job")
        } else if(examValue > 60){
            console.info("Hmm not bad bro")
        } else{
            console.info("Sorry kid :)")
        }
    })
    it("should support ternary operator", () => {
        const value = 77
        const say = value >= 75 ? "Good Job" : "Go back to be monkey"
        
        console.info(say)
    })
})