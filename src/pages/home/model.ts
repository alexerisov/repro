import * as process from "process";
import axios from "axios";
import { attach, createEffect, createEvent, restore, sample } from "effector";
import {
  ClientPageContext,
  ServerPageContext,
  isClientPageContext,
  isServerPageContext
} from "~shared/lib/nextjs-effector";

const api = axios.create({ baseURL: process.env.NEXTAUTH_URL });
export const pageStarted = createEvent();

const getComments = createEffect(async () => {
  const response = await api.get("/api/posts/1/comments");
  console.debug({ response });
  return response;
});

export const loadComments = attach({ effect: getComments });

export const $comments = restore(loadComments, []);

sample({
  clock: pageStarted,
  target: loadComments
});

const pageStartedOnClient = createEvent<ClientPageContext>();
const pageStartedOnServer = createEvent<ServerPageContext>();

sample({
  source: pageStarted,
  filter: isClientPageContext,
  target: pageStartedOnClient
});

sample({
  source: pageStarted,
  filter: isServerPageContext,
  target: pageStartedOnServer
});

sample({
  source: pageStartedOnServer,
  fn: context => {
    // You can access "req" and "res" on server side
    const { req, res } = context;
    console.debug("pageStartedOnServer ctx", context);
  }
});

// debug(pageStarted);
// debug(pageStartedOnClient);
// debug(pageStartedOnServer);
