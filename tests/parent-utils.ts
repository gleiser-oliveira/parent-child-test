import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NewChild, NewDelayedChild } from "../generated/Parent/Parent"

export function createNewChildEvent(child: Address): NewChild {
  let newChildEvent = changetype<NewChild>(newMockEvent())

  newChildEvent.parameters = new Array()

  newChildEvent.parameters.push(
    new ethereum.EventParam("child", ethereum.Value.fromAddress(child))
  )

  return newChildEvent
}

export function createNewDelayedChildEvent(
  delayedChild: Address
): NewDelayedChild {
  let newDelayedChildEvent = changetype<NewDelayedChild>(newMockEvent())

  newDelayedChildEvent.parameters = new Array()

  newDelayedChildEvent.parameters.push(
    new ethereum.EventParam(
      "delayedChild",
      ethereum.Value.fromAddress(delayedChild)
    )
  )

  return newDelayedChildEvent
}
