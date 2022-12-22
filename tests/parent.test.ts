import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { NewChild } from "../generated/schema"
import { NewChild as NewChildEvent } from "../generated/Parent/Parent"
import { handleNewChild } from "../src/parent"
import { createNewChildEvent } from "./parent-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let child = Address.fromString("0x0000000000000000000000000000000000000001")
    let newNewChildEvent = createNewChildEvent(child)
    handleNewChild(newNewChildEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewChild created and stored", () => {
    assert.entityCount("NewChild", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewChild",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "child",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
