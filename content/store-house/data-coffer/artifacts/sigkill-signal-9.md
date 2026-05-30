---
title: "SIGKILL — Signal 9"
description: "The signal that cannot be caught, blocked, or ignored — and the one place even it cannot reach."
date: 2026-05-30
tags: ["unix", "signals", "kernel", "process", "sysadmin", "gtv"]
type: "artefakt"
author: "GTV"
draft: false
---

When Unix was young at Bell Labs in the early 1970s, Ken Thompson and Dennis Ritchie needed a way to tell a process to stop. They gave the kernel a handful of *signals* — small interrupts a process could choose to catch, handle, or ignore.

Most signals are polite. A program can trap `SIGTERM` (15) and clean up first: flush the buffers, close the sockets, say goodbye. That is the civilised way to die.

But the founders left one signal that takes no answer. **Signal 9 — SIGKILL.** It cannot be caught. It cannot be blocked. It cannot be ignored. The process never even hears it coming; the kernel simply removes it from the world.

> `kill -9 21450` — and it should be over.

Except for one shadow the founders could not abolish. A process waiting on the kernel itself — disk that will not answer, a network mount that hangs, a FUSE filesystem gone silent — enters **uninterruptible sleep**: state `D`. There it is deaf to everything, even Signal 9. SIGKILL is queued, patient, lethal — but it cannot fire until the kernel call returns.

So the unkillable process is not immortal. It is simply *waiting* — and the only cures are to free what it waits on, or to reboot the machine and end the world it lives in.

Every sysadmin learns this the hard way, usually at the worst possible moment. `kill -9` is absolute power. The `D` state is the reminder that even absolute power must wait its turn.
