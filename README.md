# redux-re-un-do

record state to stack and use in redo or undo

## Todos

- [ ] 当 redo / undo 再触发一次普通操作时, 需要重置 state stack
- [ ] undo 到最后的一次操作时, 无法再触发 undo, redo 到最初的一次操作时无法再触发 redo
- [ ] 配套 reducer 可以返回是否可以能执行 redo / undo 的 state
