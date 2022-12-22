import {
  NewChild as NewChildEvent,
  NewDelayedChild as NewDelayedChildEvent
} from "../generated/Parent/Parent"
import {
  Child as ChildContract,
} from '../generated/Parent/Child'
import {
  DelayedChild as DelayedChildContract,
} from '../generated/Parent/DelayedChild'
import { Child, DelayedChild } from "../generated/schema"
import { Address } from "@graphprotocol/graph-ts";

export function handleNewChild(event: NewChildEvent): void {
  const hardcodedChildAddress = "0x38A9fab9058a076A034B25b32B979C06bd7d7929";
  let entity = new Child(
    hardcodedChildAddress
  )
  const childContract = ChildContract.bind(Address.fromString(hardcodedChildAddress))

  entity.age = childContract.AGE()
  entity.familyName = childContract.try_familyName().value
  entity.name = childContract.NAME()

  entity.save()
}

export function handleNewDelayedChild(event: NewDelayedChildEvent): void {
  let entity = new DelayedChild(
    event.params.delayedChild.toHexString()
  )
  const dcContract = DelayedChildContract.bind(event.params.delayedChild)

  entity.toys = dcContract.toys()
  entity.name = dcContract.name()

  entity.save()
}
