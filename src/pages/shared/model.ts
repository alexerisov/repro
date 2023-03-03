// import { loadAuthenticatedUser } from "@src/entities/authenticated-user";
import { createEvent, createStore } from "effector";

export const appStarted = createEvent();
export const $cookies = createStore(null);

appStarted.watch(() => console.info("[Event] appStarted"));
