import {
  NewChild as NewChildEvent,
  NewDelayedChild as NewDelayedChildEvent
} from "../generated/Parent/Parent"
import { NewChild, NewDelayedChild } from "../generated/schema"

export function handleNewChild(event: NewChildEvent): void {
  let entity = new NewChild(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.child = event.params.child

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewDelayedChild(event: NewDelayedChildEvent): void {
  let entity = new NewDelayedChild(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delayedChild = event.params.delayedChild

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
