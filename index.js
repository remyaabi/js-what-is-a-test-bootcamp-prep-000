// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}

describe("Name",()=>{
  it('returns "susan"',()=>{
  expect(index.name).toEqual('Susan')
  
} )
})

describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })