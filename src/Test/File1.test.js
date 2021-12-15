// import { expect, test } from "@jest/globals"
import Add from "./File1"
import Sum from "../Components/File1"

// import { expect, test } from "@jest/globals"

// import { expect } from "@jest/globals"
// import { exp } from "prelude-ls"

// import { expect, test } from "@jest/globals"


//Common matchers

const TwoNum = (a, b) => {
    return (a + b)
}

test("addition(Add) of 2 and 2 is 4", () => {
    expect(Add(2, 2)).toBe(4)
})

test("addition(Sum) of 21 and 456 is 477", () => {
    expect(Sum(21, 456)).toBe(477)
})


test("Addition of 3 and 7 is 10", () => {
    expect(TwoNum(3, 7)).toBe(10)
})

test("subtraction of 4 and 12 is not 7", () => {
    expect(12 - 4).not.toBe(7)
})

test("obj contains 2 keys", () => {
    const obj = { one: "one", two: "two" }
    const len = Object.keys(obj).length
    expect(len).toBe(2)

})
test("both objects are not equal", () => {
    const obj1 = { one: "one", two: "two" }
    const obj2 = { one: "1", two: "2" }
    expect(obj1).not.toEqual(obj2)
    expect(obj1).not.toBe(obj2)
})

//Truthiness    

test("check the truthiness of false", () => {
    const b = false
    expect(b).not.toBeNull()
    expect(b).not.toBeUndefined()
    expect(b).toBeDefined()
    expect(b).not.toBeTruthy()
    expect(b).toBeFalsy()
})

//Numbers

const NumberTest = () => {
    const val = Add(5, 5)
    expect(val).toBeGreaterThan(5)
    expect(val).toBeGreaterThanOrEqual(8)
    expect(val).toBeLessThan(10.5)
    expect(val).toBeLessThanOrEqual(10)
    expect(val).toEqual(10)
    expect(val).toBe(10.0)
}
test("addition of 5 and 5 is undergo for Number testing", NumberTest)


test("point value addition", () => {
    const val2 = 0.1 + 0.2
        // expect(val2).toBe(0.3) test will failed because the o/p is 0.300000000004 so,
    expect(val2).toBeCloseTo(0.3)
})


//string

test("there is men in women", () => {
    expect("women").toMatch(/men/)
})

//array

const arr = ["name", "age", "age", "education", "designation", "current company"]
test("if age in arr", () => {
    expect(arr).toContain("age")
    expect(new Set(arr)).toContain("age")
})



//exceptions

const err = () => {
    throw new Error("there is an error")
}

test("compiling err function", () => {
    expect(() => err()).toThrow()
    expect(() => err()).toThrow(Error)
    expect(() => err()).toThrow(/an err/) // if /some thing/ some thing should present in the Error and also below one
    expect(() => err()).toThrow("there is an error")
})